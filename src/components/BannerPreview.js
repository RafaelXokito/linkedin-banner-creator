// BannerPreview.js
import React from "react";
import "./Preview.css";

function BannerPreview(props) {
    return (
      <div className="banner-container">
        <div className="logo-spacer"></div>
        <div className="banner" style={{ backgroundImage: `url(${props.image})` }}>
          <div className="logos-container">
            {props.logos.map((logoSrc, index) => (
              <div className="logo-bg" key={index}>
                <img src={logoSrc} alt="Tech Logo" className="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default BannerPreview;
