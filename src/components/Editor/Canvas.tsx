import React, { useRef } from 'react';
import type { TemplateConfig } from '../../templates';
import iconInstaPng from '../../assets/icon-insta.png';
import iconStoryPng from '../../assets/icon-story.png';
import instaMoGuidePng from '../../assets/insta_mo-guide.png';

interface CanvasProps {
  template: TemplateConfig;
  values: Record<string, string>;
  zoom: number; // e.g. 0.5 for 50%
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
  visibleLayerIds: Set<string>;
  hoveredLayerId: string | null;
  setHoveredLayerId: (layerId: string | null) => void;
  showCropGuide?: boolean;
}

export const Canvas: React.FC<CanvasProps> = ({
  template,
  values,
  zoom,
  selectedLayerId,
  onSelectLayer,
  visibleLayerIds,
  hoveredLayerId,
  setHoveredLayerId,
  showCropGuide,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Handler for canvas background click to clear selection
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectLayer(null);
    }
  };

  // Helper function to render selecting / hovering outlines for layers
  const renderLayerWrapper = (layerId: string, content: React.ReactNode, style: React.CSSProperties) => {
    const isSelected = selectedLayerId === layerId;
    const isHovered = hoveredLayerId === layerId;
    const layer = template.layers.find(l => l.id === layerId);
    
    // If layer visibility is toggled off, do not render
    if (!layer || !visibleLayerIds.has(layerId)) return null;

    return (
      <div
        className={`canvas-layer-wrapper ${isSelected ? 'layer-selected' : ''} ${isHovered ? 'layer-hovered' : ''}`}
        style={{
          position: 'relative',
          cursor: 'pointer',
          boxSizing: 'border-box',
          ...style
        }}
        onMouseEnter={() => setHoveredLayerId(layerId)}
        onMouseLeave={() => setHoveredLayerId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectLayer(layerId);
        }}
      >
        {content}
        <div className="layer-outline-visual" />
        <div className="layer-label-tag">{layer.fieldKey || layer.id}</div>
      </div>
    );
  };

  // ==========================================
  // 1. YOUTUBE CARD TEMPLATE RENDERER
  // ==========================================
  if (template.id === 'youtube-card') {
    const thumbVal = values['thumbnail'] || '';
    const avatarVal = values['avatar'] || '';
    const titleVal = values['title'] || '';
    const channelVal = values['channel'] || '';
    const viewsVal = values['views'] || '';

    return (
      <div className="canvas-workspace" onClick={handleCanvasClick}>
        <div 
          className="canvas-container-shadow-wrap"
          style={{
            width: template.width,
            height: 'auto',
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div
            ref={canvasRef}
            id="preview-canvas-export-target"
            className="preview-canvas-core"
            style={{
              width: template.width,
              height: 'auto', // Dynamic shrunken height!
              position: 'relative',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              padding: '70px 67px 70px 67px',
              gap: '43px',
              boxSizing: 'border-box',
            }}
          >
            {/* 1. Video Thumbnail (Fixed 16:9 - 1266x712) */}
            {renderLayerWrapper('video-thumbnail', (
              <img 
                src={thumbVal} 
                style={{ width: '1266px', height: '712px', objectFit: 'cover', borderRadius: '12px', display: 'block' }} 
                alt="Thumbnail" 
              />
            ), { width: '1266px', height: '712px', borderRadius: '12px' })}

            {/* 2. Metadata Flex Row Container */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', position: 'relative', width: '1266px', boxSizing: 'border-box' }}>
              
              {/* Channel Avatar Circle */}
              {renderLayerWrapper('channel-avatar', (
                <img 
                  src={avatarVal} 
                  style={{ width: '86px', height: '86px', borderRadius: '43px', display: 'block' }} 
                  alt="Avatar" 
                />
              ), { width: '86px', height: '86px', borderRadius: '43px' })}

              {/* Text Area Column (Title & Channel Name & Views flows naturally) */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px', paddingRight: '40px' }}>
                
                {/* Dynamic Height Video Title */}
                {renderLayerWrapper('video-title', (
                  <div style={{
                    fontSize: '37px',
                    fontWeight: 700,
                    color: '#000000',
                    fontFamily: 'Noto Sans KR, sans-serif',
                    lineHeight: '50px',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                    width: '100%',
                  }}>
                    {titleVal}
                  </div>
                ), { width: '100%', height: 'auto' })}

                {/* Channel Name */}
                {renderLayerWrapper('channel-name', (
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 500,
                    color: '#606060',
                    fontFamily: 'Noto Sans KR, sans-serif',
                    lineHeight: '40px',
                  }}>
                    {channelVal}
                  </div>
                ), { width: '100%', height: 'auto' })}

                {/* Views & Date info */}
                {renderLayerWrapper('views-date', (
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 500,
                    color: '#606060',
                    fontFamily: 'Noto Sans KR, sans-serif',
                    lineHeight: '40px',
                  }}>
                    {viewsVal}
                  </div>
                ), { width: '100%', height: 'auto' })}

              </div>

              {/* YouTube More Options Button (Three vertical dots placed absolutely on right) */}
              <div style={{ position: 'absolute', right: '0', top: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#030303' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#030303' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#030303' }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. INSTAGRAM MOBILE FEED TEMPLATE RENDERER
  // ==========================================
  if (template.id === 'insta-mo') {
    const avatarVal = values['avatar'] || '';
    const usernameVal = values['username'] || '';
    const postImageVal = values['postImage'] || '';
    const captionVal = values['caption'] || '';

    return (
      <div className="canvas-workspace" onClick={handleCanvasClick}>
        <div 
          className="canvas-container-shadow-wrap"
          style={{
            width: template.width,
            height: 'auto',
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div
            ref={canvasRef}
            id="preview-canvas-export-target"
            className="preview-canvas-core"
            style={{
              width: template.width,
              height: 'auto', // Dynamic height to automatically shrink card size!
              position: 'relative',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}
          >
            {/* Header (Username & Small profile bar) */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '78px', padding: '0 16px', position: 'relative', borderBottom: '1px solid #efefef', boxSizing: 'border-box' }}>
              
              {/* Avatar circle */}
              {renderLayerWrapper('user-avatar', (
                <img 
                  src={avatarVal} 
                  style={{ width: '48px', height: '48px', borderRadius: '24px', display: 'block' }} 
                  alt="Avatar" 
                />
              ), { width: '48px', height: '48px', borderRadius: '24px', marginRight: '14.5px' })}

              {/* Username title */}
              {renderLayerWrapper('user-username', (
                <div style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  color: '#000000',
                  fontFamily: 'Noto Sans KR, sans-serif',
                }}>
                  {usernameVal}
                </div>
              ), { height: 'auto', flex: 1 })}

              {/* Header Menu (Three Horizontal Dots) */}
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginLeft: 'auto', paddingRight: '8px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#262626' }} />
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#262626' }} />
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#262626' }} />
              </div>

            </div>

            {/* Post Main image (590x738) */}
            {renderLayerWrapper('post-image', (
              <div style={{ position: 'relative', width: '590px', height: '738px' }}>
                <img 
                  src={postImageVal} 
                  style={{ width: '590px', height: '738px', objectFit: 'cover', display: 'block' }} 
                  alt="Post" 
                />
                {showCropGuide && (
                  <img 
                    src={instaMoGuidePng} 
                    style={{
                      position: 'absolute',
                      left: '17px',
                      top: '0px',
                      width: '556px',
                      height: '738px',
                      pointerEvents: 'none',
                      zIndex: 13,
                    }}
                    alt="3:4 Crop Guide"
                  />
                )}
              </div>
            ), { width: '590px', height: '738px' })}

            {/* Mockup icons bar image loaded directly from assets */}
            <img 
              src={iconInstaPng} 
              style={{ width: '590px', height: '98px', display: 'block' }} 
              alt="Icons Bar" 
            />

            {/* Dynamic height caption with bold username prefix */}
            {renderLayerWrapper('post-caption', (
              <div style={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#000000',
                fontFamily: 'Noto Sans KR, sans-serif',
                lineHeight: '28px',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
                width: '100%',
              }}>
                <span style={{ fontWeight: 700, marginRight: '6px' }}>{usernameVal}</span>
                <span>{captionVal}</span>
              </div>
            ), { width: '552px', margin: '8px 19px 24px 19px', height: 'auto' })}

          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 3. INSTAGRAM MOBILE STORY TEMPLATE RENDERER
  // ==========================================
  if (template.id === 'insta-story') {
    const storyImageVal = values['storyImage'] || '';
    const avatarVal = values['avatar'] || '';
    const usernameVal = values['username'] || '';

    return (
      <div className="canvas-workspace" onClick={handleCanvasClick}>
        <div 
          className="canvas-container-shadow-wrap"
          style={{
            width: template.width,
            height: template.height,
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div
            ref={canvasRef}
            id="preview-canvas-export-target"
            className="preview-canvas-core"
            style={{
              width: template.width,
              height: template.height,
              backgroundColor: '#000000',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Story Fullscreen background image */}
            {renderLayerWrapper('story-background', (
              <img 
                src={storyImageVal} 
                style={{ width: '1080px', height: '1960px', objectFit: 'cover', display: 'block' }} 
                alt="Story Background" 
              />
            ), { left: 0, top: 0, width: 1080, height: 1960, zIndex: 1, position: 'absolute' })}

            {/* Overlays Header (Avatar & Username & Icons) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '1080px', height: '200px', pointerEvents: 'none', zIndex: 12 }}>
              
              {/* Avatar circle background border */}
              <div style={{ position: 'absolute', left: '31px', top: '79px', width: '90px', height: '90px', borderRadius: '45px', border: '2.5px solid #ffffff', boxSizing: 'border-box' }} />

              {/* Story avatar image */}
              {renderLayerWrapper('story-avatar', (
                <img 
                  src={avatarVal} 
                  style={{ width: '90px', height: '90px', borderRadius: '45px', display: 'block' }} 
                  alt="Avatar" 
                />
              ), { left: '31px', top: '79px', width: '90px', height: '90px', borderRadius: '45px', pointerEvents: 'auto', position: 'absolute' })}

              {/* Story account username */}
              {renderLayerWrapper('story-username', (
                <div style={{
                  fontSize: '39.5px',
                  fontWeight: 400,
                  color: '#ffffff',
                  fontFamily: 'Pretendard, sans-serif',
                  textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                }}>
                  {usernameVal}
                </div>
              ), { left: '149px', top: '99px', width: '600px', height: '70px', pointerEvents: 'auto', position: 'absolute' })}

              {/* Story top icons image */}
              <img 
                src={iconStoryPng} 
                style={{ position: 'absolute', left: '25px', top: '56px', width: '1030px', height: '99px' }} 
                alt="Story Icons" 
              />

            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
export default Canvas;
