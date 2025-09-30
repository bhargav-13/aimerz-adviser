import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Here you would typically upload to a server
      console.log('Uploading image:', selectedImage);
      alert('Image uploaded successfully! (This is just a demo)');
    }
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPreview(null);
  };

  return (
    <div className="image-upload">
      <h3>Image Upload Demo</h3>
      
      <div className="upload-area">
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="image-upload" className="upload-button">
          Choose Image
        </label>
      </div>

      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" />
          <div className="preview-actions">
            <button onClick={handleUpload} className="upload-btn">
              Upload Image
            </button>
            <button onClick={handleRemove} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
