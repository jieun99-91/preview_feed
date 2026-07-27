import React from 'react';
import { Eye, EyeOff, Type, Image as ImageIcon, Layout, Download, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import type { TemplateConfig } from '../../templates';

interface LayerPanelProps {
  template: TemplateConfig;
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
  visibleLayerIds: Set<string>;
  onToggleLayerVisibility: (layerId: string) => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  onDownloadPng: () => void;
  onDownloadPdf: () => void;
  isExporting: boolean;
}

export const LayerPanel: React.FC<LayerPanelProps> = ({
  template,
  selectedLayerId,
  onSelectLayer,
  visibleLayerIds,
  onToggleLayerVisibility,
  zoom,
  onZoomChange,
  onDownloadPng,
  onDownloadPdf,
  isExporting,
}) => {
  // Zoom presets helper
  const handleZoomPreset = (preset: number) => {
    onZoomChange(preset);
  };

  const handleZoomFit = () => {
    // Basic heuristics to fit template in typical editor space (approx 600px width/height)
    const fitWidth = 600 / template.width;
    const fitHeight = 550 / template.height;
    const fitZoom = Math.min(fitWidth, fitHeight, 1);
    // Round to 2 decimal places
    onZoomChange(Math.round(fitZoom * 100) / 100);
  };

  return (
    <aside className="editor-sidebar-right">
      {/* --- EXPORT PANEL ACTIONS --- */}
      <div className="sidebar-header">
        <Download size={18} className="sidebar-header-icon" />
        <h2>Export Panel</h2>
      </div>

      <div className="sidebar-content-padding">
        <div className="action-button-group">
          <button 
            type="button" 
            className={`btn-primary btn-full ${isExporting ? 'btn-loading' : ''}`}
            onClick={onDownloadPng}
            disabled={isExporting}
          >
            <Download size={16} />
            <span>{isExporting ? 'Exporting PNG...' : 'Download PNG'}</span>
          </button>
          
          <button 
            type="button" 
            className={`btn-secondary btn-full ${isExporting ? 'btn-loading' : ''}`}
            onClick={onDownloadPdf}
            disabled={isExporting}
          >
            <FileText size={16} />
            <span>{isExporting ? 'Exporting PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        <div className="sidebar-divider" style={{ margin: '16px 0' }} />

        {/* --- ZOOM CONTROLS --- */}
        <h3 className="section-title">Canvas Zoom</h3>
        <div className="zoom-control-section">
          <div className="zoom-row">
            <button 
              type="button" 
              className="zoom-btn" 
              onClick={() => onZoomChange(Math.max(0.1, zoom - 0.1))}
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="zoom-text">{Math.round(zoom * 100)}%</span>
            <button 
              type="button" 
              className="zoom-btn" 
              onClick={() => onZoomChange(Math.min(3, zoom + 0.1))}
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
          </div>
          <div className="zoom-presets-row">
            <button type="button" className="preset-btn" onClick={() => handleZoomPreset(0.5)}>50%</button>
            <button type="button" className="preset-btn" onClick={() => handleZoomPreset(1.0)}>100%</button>
            <button type="button" className="preset-btn" onClick={handleZoomFit}>Auto Fit</button>
          </div>
        </div>

        <div className="sidebar-divider" style={{ margin: '16px 0' }} />

        {/* --- LAYERS LIST --- */}
        <div className="layers-header-row">
          <h3 className="section-title" style={{ margin: 0 }}>Layers</h3>
          <span className="layers-count">{template.layers.length} items</span>
        </div>

        <div className="layers-list-container">
          {template.layers.map((layer) => {
            const isSelected = selectedLayerId === layer.id;
            const isVisible = visibleLayerIds.has(layer.id);
            
            // Get layer icon
            let LayerIcon = Layout;
            if (layer.type === 'image') LayerIcon = ImageIcon;
            if (layer.type === 'text') LayerIcon = Type;

            // Generate label
            const layerLabel = layer.type === 'mockup' 
              ? 'Background Mockup' 
              : `${layer.fieldKey || layer.id}`;

            return (
              <div 
                key={layer.id} 
                className={`layer-item-row ${isSelected ? 'layer-row-selected' : ''}`}
                onClick={() => onSelectLayer(layer.id)}
              >
                <div className="layer-item-left">
                  <span className="layer-icon-type">
                    <LayerIcon size={14} />
                  </span>
                  <span className="layer-item-name" title={layerLabel}>
                    {layerLabel}
                  </span>
                </div>
                
                {/* Visibility eye icon toggle */}
                <button
                  type="button"
                  className={`layer-visibility-toggle ${!isVisible ? 'layer-hidden' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLayerVisibility(layer.id);
                  }}
                  title={isVisible ? 'Hide layer' : 'Show layer'}
                >
                  {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default LayerPanel;
