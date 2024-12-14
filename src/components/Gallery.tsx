import React from "react";
import "../styles.css";
import FileUploader from "./FileUploader";

interface GalleryProps {
  photos: string[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      <FileUploader />
    </div>
  );
};

export default Gallery;
