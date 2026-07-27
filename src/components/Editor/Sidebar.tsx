import React from 'react';
import { TEMPLATES } from '../../templates';
import type { TemplateConfig } from '../../templates';
import FileUpload from '../Shared/FileUpload';
import { Layers } from 'lucide-react';

interface SidebarProps {
  selectedTemplate: TemplateConfig;
  onSelectTemplate: (template: TemplateConfig) => void;
  values: Record<string, string>;
  onChangeField: (key: string, value: string) => void;
  selectedLayerId: string | null;
  templateLayers: any[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedTemplate,
  onSelectTemplate,
  values,
  onChangeField,
  selectedLayerId,
  templateLayers,
}) => {
  // Find which field matches the selected layer (if any)
  const activeFieldKey = React.useMemo(() => {
    if (!selectedLayerId) return null;
    const layer = templateLayers.find((l) => l.id === selectedLayerId);
    return layer ? layer.fieldKey : null;
  }, [selectedLayerId, templateLayers]);

  return (
    <aside className="editor-sidebar-left">
      <div className="sidebar-header">
        <Layers size={18} className="sidebar-header-icon" />
        <h2>옵션 설정 패널</h2>
      </div>

      <div className="sidebar-content">
        {/* Template Selector Section */}
        <div className="property-group">
          <label className="input-label">템플릿 선택</label>
          <div className="template-select-wrapper">
            <select
              value={selectedTemplate.id}
              onChange={(e) => {
                const found = TEMPLATES.find((t) => t.id === e.target.value);
                if (found) onSelectTemplate(found);
              }}
              className="template-dropdown"
            >
              <optgroup label="유튜브 템플릿">
                {TEMPLATES.filter((t) => t.category === 'YouTube').map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="인스타그램 템플릿">
                {TEMPLATES.filter((t) => t.category === 'Instagram').map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="sidebar-divider" />

        {/* Dynamic Inputs Form */}
        <div className="inputs-section">
          <h3 className="section-title">콘텐츠 입력</h3>
          {selectedTemplate.fields.map((field) => {
            const isFieldActive = activeFieldKey === field.key;
            const currentValue = values[field.key] || '';

            return (
              <div 
                key={field.key} 
                className={`input-field-wrapper ${isFieldActive ? 'field-active-highlight' : ''}`}
                id={`field-container-${field.key}`}
              >
                {field.type === 'image' ? (
                  <FileUpload
                    label={field.label}
                    value={currentValue}
                    onChange={(val) => onChangeField(field.key, val)}
                  />
                ) : (
                  <div className="text-field-container">
                    <div className="input-header">
                      <label className="input-label">{field.label}</label>
                      {field.maxLength && (
                        <span className="character-counter">
                          {currentValue.length}/{field.maxLength}
                        </span>
                      )}
                    </div>
                    {field.multiline ? (
                      <textarea
                        value={currentValue}
                        placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (!field.maxLength || val.length <= field.maxLength) {
                            onChangeField(field.key, val);
                          }
                        }}
                        rows={3}
                        className="text-area-input"
                      />
                    ) : (
                      <input
                        type="text"
                        value={currentValue}
                        placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (!field.maxLength || val.length <= field.maxLength) {
                            onChangeField(field.key, val);
                          }
                        }}
                        className="text-input"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
