import React, { useState, useEffect } from 'react';
import { TEMPLATES } from './templates';
import type { TemplateConfig } from './templates';
import Sidebar from './components/Editor/Sidebar';
import Canvas from './components/Editor/Canvas';
import LayerPanel from './components/Editor/LayerPanel';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { LayoutGrid, Sun, Moon, Info, HelpCircle } from 'lucide-react';

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
  const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>('dark');
  const [showGuide, setShowGuide] = useState<boolean>(true);

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

  // Visibility toggle handler
  const handleToggleLayerVisibility = (layerId: string) => {
    setVisibleLayerIds((prev) => {
      const next = new Set(prev);
      if (next.has(layerId)) {
        next.delete(layerId);
      } else {
        next.add(layerId);
      }
      return next;
    });
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

      // Trigger html-to-image capture
      toPng(node, {
        cacheBust: true,
        pixelRatio: 2, // Double resolution for super crisp print/retina results
        width: selectedTemplate.width,
        height: selectedTemplate.height,
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

      // Trigger html-to-image capture
      toPng(node, {
        cacheBust: true,
        pixelRatio: 2, // Double resolution for super crisp print/retina results
        width: selectedTemplate.width,
        height: selectedTemplate.height,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        },
      })
        .then((dataUrl) => {
          const orientation = selectedTemplate.width > selectedTemplate.height ? 'l' : 'p';
          
          const pdf = new jsPDF({
            orientation: orientation,
            unit: 'px',
            format: [selectedTemplate.width, selectedTemplate.height],
          });

          pdf.addImage(dataUrl, 'PNG', 0, 0, selectedTemplate.width, selectedTemplate.height);
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
    <div className={`editor-app-wrapper theme-${editorTheme}`}>
      {/* --- TOP BAR NAVIGATION --- */}
      <header className="editor-topbar">
        <div className="topbar-left">
          <div className="logo-group">
            <LayoutGrid className="logo-icon" size={20} />
            <h1>Social Preview <span className="logo-badge">MVP</span></h1>
          </div>
          <div className="topbar-divider" />
          <div className="topbar-template-info">
            <span className="info-label">Active:</span>
            <span className="info-value">{selectedTemplate.name}</span>
            <span className="dimension-badge">
              {selectedTemplate.width} × {selectedTemplate.height}px ({selectedTemplate.aspectRatio})
            </span>
          </div>
        </div>

        <div className="topbar-right">
          {/* Guide toggle */}
          <button 
            type="button" 
            className={`topbar-action-btn ${showGuide ? 'btn-active' : ''}`}
            onClick={() => setShowGuide(!showGuide)}
            title="Help / Guidelines"
          >
            <HelpCircle size={18} />
          </button>

          {/* Theme toggle */}
          <button 
            type="button" 
            className="topbar-action-btn"
            onClick={() => setEditorTheme(editorTheme === 'light' ? 'dark' : 'light')}
            title="Toggle Theme"
          >
            {editorTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
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
        />

        {/* CENTER VIEWPORT PREVIEW CANVAS */}
        <main className="editor-canvas-area">
          {showGuide && (
            <div className="canvas-guide-overlay">
              <div className="guide-close-btn" onClick={() => setShowGuide(false)}>×</div>
              <div className="guide-content">
                <Info size={16} className="guide-info-icon" />
                <p>
                  <strong>Figma Style Composition Editor:</strong> Hover over any item in the preview canvas to see its bounds. Click on it to select it and focus its input property. Drag & drop images or edit texts to preview in real-time. Use the right sidebar to hide layers or export as a high-definition PNG.
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
          />
        </main>

        {/* RIGHT LAYER / ACTIONS INSPECTOR */}
        <LayerPanel
          template={selectedTemplate}
          selectedLayerId={selectedLayerId}
          onSelectLayer={setSelectedLayerId}
          visibleLayerIds={visibleLayerIds}
          onToggleLayerVisibility={handleToggleLayerVisibility}
          zoom={zoom}
          onZoomChange={setZoom}
          onDownloadPng={handleDownloadPng}
          onDownloadPdf={handleDownloadPdf}
          isExporting={isExporting}
        />
      </div>
    </div>
  );
};
export default App;
