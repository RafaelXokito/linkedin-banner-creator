import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import BannerPreview from "./components/BannerPreview";
import LogoUploader from "./components/LogoUploader";
import { downloadBanner } from "./utils/downloadBanner";
import "./components/DownloadButton.css";
import "./components/UploadComponent.css";

function App() {
  const [image, setImage] = useState(null);
  const [uploadedLogos, setUploadedLogos] = useState([]);

  const handleLogoUpload = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadedLogos((prevLogos) => [...prevLogos, reader.result]);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <h1>LinkedIn Banner</h1>
        <div className="upload-wrapper">
          <label className="upload-label">Upload Banner</label>
          <ImageUploader onImageUpload={handleImageUpload} />

          <label className="upload-label">Upload Tech Logos</label>
          <LogoUploader onLogoUpload={handleLogoUpload} />
        </div>

        <BannerPreview image={image} logos={uploadedLogos} />
        <button className="download-btn" onClick={downloadBanner}>
          Download Banner
        </button>
      </div>
    </div>
  );
}

export default App;
