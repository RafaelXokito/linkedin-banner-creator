// ImageUploader.js
import React from "react";
import "./UploadComponent.css";

function ImageUploader(props) {
  return (
    <input type="file" className="upload-input" onChange={props.onImageUpload} />
  );
}

export default ImageUploader;
