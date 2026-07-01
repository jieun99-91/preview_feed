import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  value,
  onChange,
  className = '',
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onChange(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`file-upload-container ${className}`}>
      <label className="input-label">{label}</label>
      
      {value ? (
        <div className="image-preview-wrapper" onClick={triggerInput}>
          <img src={value} alt={label} className="uploaded-image-preview" />
          <div className="preview-overlay">
            <div className="preview-overlay-content">
              <Upload size={16} />
              <span>Replace Image</span>
            </div>
          </div>
          <button type="button" className="remove-image-btn" onClick={removeImage} title="Remove image">
            <X size={14} />
          </button>
        </div>
      ) : (
        <div
          className={`drop-zone ${isDragActive ? 'drag-active' : ''}`}
          onClick={triggerInput}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-zone-content">
            <div className="upload-icon-wrapper">
              <Upload size={20} className="upload-icon" />
            </div>
            <p className="upload-text-primary">Click or drag image to upload</p>
            <p className="upload-text-secondary">PNG, JPG, SVG, WebP up to 10MB</p>
          </div>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden-file-input"
        style={{ display: 'none' }}
      />
    </div>
  );
};
export default FileUpload;
