import React, { useRef } from 'react';
import { MOCKUP_COMPONENTS } from '../../templates';
import type { TemplateConfig } from '../../templates';

interface CanvasProps {
  template: TemplateConfig;
  values: Record<string, string>;
  zoom: number; // e.g. 0.5 for 50%
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
  visibleLayerIds: Set<string>;
  hoveredLayerId: string | null;
  setHoveredLayerId: (layerId: string | null) => void;
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
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const MockupBg = MOCKUP_COMPONENTS[template.id];

  // Handler for canvas background click to clear selection
  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectLayer(null);
    }
  };

  return (
    <div 
      className="canvas-workspace" 
      onClick={handleCanvasClick}
    >
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
            position: 'relative',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
        >
          {/* Mockup SVG background (first layer) */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 10 
            }}
          >
            {MockupBg ? <MockupBg /> : null}
          </div>

          {/* Dynamic Content Layers */}
          {template.layers.map((layer) => {
            // Skip rendering if visibility is toggled off
            if (!visibleLayerIds.has(layer.id)) return null;

            // Skip mockup layer because we handle it above explicitly or let it render
            if (layer.type === 'mockup') return null;

            const isSelected = selectedLayerId === layer.id;
            const isHovered = hoveredLayerId === layer.id;
            const value = layer.fieldKey ? values[layer.fieldKey] || '' : '';

            // Render Image Layer
            if (layer.type === 'image') {
              return (
                <div
                  key={layer.id}
                  className={`canvas-layer-wrapper ${isSelected ? 'layer-selected' : ''} ${isHovered ? 'layer-hovered' : ''}`}
                  style={{
                    position: 'absolute',
                    left: layer.x,
                    top: layer.y,
                    width: layer.width,
                    height: layer.height,
                    zIndex: layer.zIndex !== undefined ? layer.zIndex : 12,
                    borderRadius: layer.borderRadius || 0,
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredLayerId(layer.id)}
                  onMouseLeave={() => setHoveredLayerId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectLayer(layer.id);
                  }}
                >
                  {value ? (
                    <img
                      src={value}
                      alt={layer.id}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: layer.objectFit || 'cover',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <div className="canvas-image-placeholder">
                      <span>No Image</span>
                    </div>
                  )}
                  {/* Visual Outline Overlays */}
                  <div className="layer-outline-visual" />
                  <div className="layer-label-tag">{layer.fieldKey || layer.id}</div>
                </div>
              );
            }

            // Render Text Layer
            if (layer.type === 'text') {
              const textStyle: React.CSSProperties = {
                fontSize: layer.fontSize,
                fontWeight: layer.fontWeight,
                color: layer.color || '#000000',
                fontFamily: layer.fontFamily || 'sans-serif',
                textAlign: layer.textAlign || 'left',
                lineHeight: layer.lineHeight ? `${layer.lineHeight}px` : 'normal',
                letterSpacing: layer.letterSpacing || 'normal',
                display: '-webkit-box',
                WebkitLineClamp: layer.maxLines || 'none',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap',
                width: '100%',
                height: '100%',
              };

              return (
                <div
                  key={layer.id}
                  className={`canvas-layer-wrapper ${isSelected ? 'layer-selected' : ''} ${isHovered ? 'layer-hovered' : ''}`}
                  style={{
                    position: 'absolute',
                    left: layer.x,
                    top: layer.y,
                    width: layer.width,
                    height: layer.height,
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredLayerId(layer.id)}
                  onMouseLeave={() => setHoveredLayerId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectLayer(layer.id);
                  }}
                >
                  <div style={textStyle}>
                    {value || <span style={{ opacity: 0.4 }}>{layer.fieldKey}</span>}
                  </div>
                  {/* Visual Outline Overlays */}
                  <div className="layer-outline-visual" />
                  <div className="layer-label-tag">{layer.fieldKey || layer.id}</div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};
export default Canvas;
