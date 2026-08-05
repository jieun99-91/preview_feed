import React, { useState, useEffect } from 'react';
import { TEMPLATES } from './templates';
import type { TemplateConfig } from './templates';
import Sidebar from './components/Editor/Sidebar';
import Canvas from './components/Editor/Canvas';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { Info, HelpCircle, Download, FileText, ZoomIn, ZoomOut } from 'lucide-react';

export const App: React.FC = () => {
  // 1. SELECT TEMPLATE STATE
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateConfig>(TEMPLATES[0]);

  // 2. VALUES STATE FOR ALL TEMPLATES
  // We initialize the values state with the default values of ALL templates combined.
  // This allows keeping same-key values (like 'avatar', 'thumbnail', 'username') when switching templates.
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    TEMPLATES.forEach((t) => {
      t.fields.forEach((f) => {
        if (!initial[f.key]) {
          initial[f.key] = f.defaultValue;
        }
      });
    });
    return initial;
  });

  // 3. CANVAS CONTROLS STATE
  const [zoom, setZoom] = useState<number>(0.5);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [hoveredLayerId, setHoveredLayerId] = useState<string | null>(null);

  // 4. LAYER VISIBILITY STATE
  // Managed as a Set of visible layer IDs. When switching templates, we reset this to all layers visible.
  const [visibleLayerIds, setVisibleLayerIds] = useState<Set<string>>(
    () => new Set(selectedTemplate.layers.map((l) => l.id))
  );

  // 5. EXPORT & INTERFACE STATES
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [showCropGuide, setShowCropGuide] = useState<boolean>(false);

  // Reset visibility set and clear selection on template change
  useEffect(() => {
    setVisibleLayerIds(new Set(selectedTemplate.layers.map((l) => l.id)));
    setSelectedLayerId(null);
    
    // Auto-fit zoom on initial template load
    const fitWidth = (window.innerWidth - 650) / selectedTemplate.width;
    const fitHeight = (window.innerHeight - 150) / selectedTemplate.height;
    const fitZoom = Math.max(0.2, Math.min(fitWidth, fitHeight, 0.9));
    setZoom(Math.round(fitZoom * 100) / 100);
  }, [selectedTemplate]);

  // Field change callback
  const handleChangeField = (key: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };


  // High-definition PNG export mechanism
  const handleDownloadPng = () => {
    const node = document.getElementById('preview-canvas-export-target');
    if (!node) return;

    setIsExporting(true);

    // Run in next animation frame to ensure outlines are hidden and DOM is stable
    setTimeout(() => {
      // Temporarily clear active hover/selection states before drawing
      const prevSelected = selectedLayerId;
      setSelectedLayerId(null);
      setHoveredLayerId(null);

      const actualHeight = node.offsetHeight;

      // Trigger html-to-image capture
      toPng(node, {
        cacheBust: true,
        pixelRatio: 2, // Double resolution for super crisp print/retina results
        width: selectedTemplate.width,
        height: actualHeight,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        },
      })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${selectedTemplate.id}-preview.png`;
          link.href = dataUrl;
          link.click();
          setIsExporting(false);
          // Restore selection
          setSelectedLayerId(prevSelected);
        })
        .catch((err) => {
          console.error('Export failed:', err);
          alert('Export failed due to a rendering exception. Please make sure all uploaded images are fully loaded and try again.');
          setIsExporting(false);
          setSelectedLayerId(prevSelected);
        });
    }, 150);
  };

  // High-definition PDF export mechanism
  const handleDownloadPdf = () => {
    const node = document.getElementById('preview-canvas-export-target');
    if (!node) return;

    setIsExporting(true);

    // Run in next animation frame to ensure outlines are hidden and DOM is stable
    setTimeout(() => {
      // Temporarily clear active hover/selection states before drawing
      const prevSelected = selectedLayerId;
      setSelectedLayerId(null);
      setHoveredLayerId(null);

      const actualHeight = node.offsetHeight;

      // Trigger html-to-image capture
      toPng(node, {
        cacheBust: true,
        pixelRatio: 2, // Double resolution for super crisp print/retina results
        width: selectedTemplate.width,
        height: actualHeight,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        },
      })
        .then((dataUrl) => {
          const orientation = selectedTemplate.width > actualHeight ? 'l' : 'p';
          
          const pdf = new jsPDF({
            orientation: orientation,
            unit: 'px',
            format: [selectedTemplate.width, actualHeight],
          });

          pdf.addImage(dataUrl, 'PNG', 0, 0, selectedTemplate.width, actualHeight);
          pdf.save(`${selectedTemplate.id}-preview.pdf`);

          setIsExporting(false);
          // Restore selection
          setSelectedLayerId(prevSelected);
        })
        .catch((err) => {
          console.error('Export failed:', err);
          alert('PDF export failed. Please make sure all uploaded images are fully loaded and try again.');
          setIsExporting(false);
          setSelectedLayerId(prevSelected);
        });
    }, 150);
  };
    
  return (
    <div className="editor-app-wrapper theme-light">
      {/* --- TOP BAR NAVIGATION --- */}
      <header className="editor-topbar">
        <div className="topbar-left">
          <div className="logo-group">
            <h1>프리뷰 에디터</h1>
          </div>
          <div className="topbar-divider" />
          <div className="topbar-template-info">
            <span className="info-label">선택된 템플릿:</span>
            <span className="info-value">{selectedTemplate.name}</span>
            <span className="dimension-badge">
              {selectedTemplate.width} × {selectedTemplate.height}px ({selectedTemplate.aspectRatio})
            </span>
          </div>
        </div>

        <div className="topbar-right">
          {/* Export PNG */}
          <button 
            type="button" 
            className={`topbar-download-btn btn-primary ${isExporting ? 'btn-loading' : ''}`}
            onClick={handleDownloadPng}
            disabled={isExporting}
          >
            <Download size={15} />
            <span>{isExporting ? 'PNG 저장 중...' : 'PNG 다운로드'}</span>
          </button>

          {/* Export PDF */}
          <button 
            type="button" 
            className={`topbar-download-btn btn-secondary ${isExporting ? 'btn-loading' : ''}`}
            onClick={handleDownloadPdf}
            disabled={isExporting}
          >
            <FileText size={15} />
            <span>{isExporting ? 'PDF 저장 중...' : 'PDF 다운로드'}</span>
          </button>

          <div className="topbar-divider" style={{ margin: '0 8px' }} />

          {/* Guide toggle */}
          <button 
            type="button" 
            className={`topbar-action-btn ${showGuide ? 'btn-active' : ''}`}
            onClick={() => setShowGuide(!showGuide)}
            title="이용 가이드"
          >
            <HelpCircle size={18} />
          </button>
        </div>
      </header>

      {/* --- MAIN INTERFACE BODY --- */}
      <div className="editor-workspace-layout">
        {/* LEFT PROPERTIES SIDEBAR */}
        <Sidebar
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
          values={values}
          onChangeField={handleChangeField}
          selectedLayerId={selectedLayerId}
          templateLayers={selectedTemplate.layers}
          showCropGuide={showCropGuide}
          onToggleCropGuide={() => setShowCropGuide(!showCropGuide)}
        />

        {/* CENTER VIEWPORT PREVIEW CANVAS */}
        <main className="editor-canvas-area">
          {showGuide && (
            <div className="canvas-guide-overlay">
              <div className="guide-close-btn" onClick={() => setShowGuide(false)}>×</div>
              <div className="guide-content">
                <Info size={16} className="guide-info-icon" />
                <p>
                  <strong>소셜 프리뷰 에디터 이용 가이드:</strong> 우측 캔버스의 요소 위에 마우스를 올리면 파란색 테두리가 표시되며, 클릭하면 해당 입력 폼으로 즉시 이동합니다. 이미지 업로드 또는 텍스트 수정을 통해 실시간 프리뷰를 확인하고 고해상도 PNG/PDF 파일로 다운로드해 보세요.
                </p>
              </div>
            </div>
          )}

          <Canvas
            template={selectedTemplate}
            values={values}
            zoom={zoom}
            selectedLayerId={selectedLayerId}
            onSelectLayer={setSelectedLayerId}
            visibleLayerIds={visibleLayerIds}
            hoveredLayerId={hoveredLayerId}
            setHoveredLayerId={setHoveredLayerId}
            showCropGuide={showCropGuide}
          />

          {/* Floating Canvas Zoom Controls */}
          <div className="floating-zoom-toolbar">
            <button 
              type="button" 
              className="zoom-btn" 
              onClick={() => setZoom(Math.max(0.1, zoom - 0.1))}
              title="축소"
            >
              <ZoomOut size={14} />
            </button>
            <span className="zoom-value">{Math.round(zoom * 100)}%</span>
            <button 
              type="button" 
              className="zoom-btn" 
              onClick={() => setZoom(Math.min(3, zoom + 0.1))}
              title="확대"
            >
              <ZoomIn size={14} />
            </button>
            <div className="zoom-toolbar-divider" />
            <button 
              type="button" 
              className="preset-btn" 
              onClick={() => {
                const fitWidth = (window.innerWidth - 380) / selectedTemplate.width;
                const fitHeight = (window.innerHeight - 150) / selectedTemplate.height;
                const fitZoom = Math.max(0.2, Math.min(fitWidth, fitHeight, 0.9));
                setZoom(Math.round(fitZoom * 100) / 100);
              }}
            >
              자동 맞춤
            </button>
          </div>
        </main>
      </div>

      {/* --- FOOTER CREATOR INFO --- */}
      <footer style={{
        textAlign: 'center',
        padding: '10px 0',
        fontSize: '11px',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-panel)',
        zIndex: 50,
      }}>
        제작자: 김지은
      </footer>
    </div>
  );
};
export default App;
