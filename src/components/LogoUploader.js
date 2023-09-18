// LogoUploader.js
import React from "react";
import "./UploadComponent.css";

function LogoUploader(props) {
  return (
    <input type="file" multiple className="upload-input" onChange={props.onLogoUpload} />
  );
}

export default LogoUploader;
