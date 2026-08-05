import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import Cropper from 'react-easy-crop';
import type { Point, Area } from 'react-easy-crop';
import { getCroppedImg } from '../../utils/cropImage';

interface FileUploadProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  isCircular?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  value,
  onChange,
  className = '',
  isCircular = false,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // States for Image Cropping Modal
  const [srcToCrop, setSrcToCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isCroppingProgress, setIsCroppingProgress] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const imageResult = e.target.result as string;
        // If it's a circular/profile upload, open the crop modal first!
        if (isCircular) {
          setSrcToCrop(imageResult);
          setCrop({ x: 0, y: 0 });
          setZoom(1);
        } else {
          onChange(imageResult);
        }
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

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropCancel = () => {
    setSrcToCrop(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCropSave = async () => {
    if (!srcToCrop || !croppedAreaPixels) return;

    try {
      setIsCroppingProgress(true);
      const croppedBase64 = await getCroppedImg(srcToCrop, croppedAreaPixels);
      onChange(croppedBase64);
      setSrcToCrop(null);
    } catch (error) {
      console.error('Failed to crop image:', error);
      alert('이미지를 자르는 도중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsCroppingProgress(false);
    }
  };

  // Styles dynamically adjusted for circular layout
  const previewWrapperStyle: React.CSSProperties = isCircular ? {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    margin: '4px 0 0 0',
    overflow: 'hidden',
    border: '1px dashed var(--input-border)',
  } : {};

  const dropZoneStyle: React.CSSProperties = isCircular ? {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    margin: '4px 0 0 0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'unset',
  } : {};

  return (
    <div className={`file-upload-container ${className}`} style={isCircular ? { textAlign: 'left' } : {}}>
      <label className="input-label" style={isCircular ? { textAlign: 'left', marginBottom: '8px' } : {}}>{label}</label>
      
      {value ? (
        <div className="image-preview-wrapper" style={previewWrapperStyle} onClick={triggerInput}>
          <img src={value} alt={label} className="uploaded-image-preview" style={isCircular ? { borderRadius: '50%' } : {}} />
          <div className="preview-overlay" style={isCircular ? { borderRadius: '50%' } : {}}>
            <div className="preview-overlay-content" style={isCircular ? { flexDirection: 'column', gap: '2px' } : {}}>
              <Upload size={14} />
              <span style={isCircular ? { fontSize: '9px', whiteSpace: 'nowrap' } : {}}>교체</span>
            </div>
          </div>
          <button 
            type="button" 
            className="remove-image-btn" 
            onClick={removeImage} 
            title="이미지 삭제"
            style={isCircular ? { right: '0px', top: '0px', padding: '2px', backgroundColor: 'rgba(0,0,0,0.6)' } : {}}
          >
            <X size={12} style={isCircular ? { color: '#fff' } : {}} />
          </button>
        </div>
      ) : (
        <div
          className={`drop-zone ${isDragActive ? 'drag-active' : ''}`}
          style={dropZoneStyle}
          onClick={triggerInput}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-zone-content" style={isCircular ? { padding: '0', gap: '4px' } : {}}>
            <div className="upload-icon-wrapper" style={isCircular ? { width: '32px', height: '32px', marginBottom: '0' } : {}}>
              <Upload size={isCircular ? 14 : 20} className="upload-icon" />
            </div>
            {isCircular ? (
              <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontWeight: 600 }}>업로드</span>
            ) : (
              <>
                <p className="upload-text-primary">클릭하거나 이미지를 드래그하여 업로드</p>
                <p className="upload-text-secondary">PNG, JPG, SVG, WebP 최대 10MB</p>
              </>
            )}
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

      {/* --- CROP MODAL OVERLAY --- */}
      {srcToCrop && (
        <div className="crop-modal-overlay">
          <div className="crop-modal-container">
            <h3 className="crop-modal-title">프로필 이미지 영역 자르기</h3>
            
            <div className="crop-area-viewport">
              <Cropper
                image={srcToCrop}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>

            <div className="crop-slider-control">
              <div className="crop-slider-label">
                <span>크기 조절</span>
                <span>{Math.round(zoom * 100)}%</span>
              </div>
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.05}
                aria-label="Zoom"
                onChange={(e) => setZoom(Number(e.target.value))}
                className="crop-slider-input"
              />
            </div>

            <div className="crop-modal-footer">
              <button 
                type="button" 
                className="crop-btn-cancel" 
                onClick={handleCropCancel}
                disabled={isCroppingProgress}
              >
                취소
              </button>
              <button 
                type="button" 
                className="crop-btn-confirm" 
                onClick={handleCropSave}
                disabled={isCroppingProgress}
              >
                {isCroppingProgress ? '처리 중...' : '적용하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FileUpload;
