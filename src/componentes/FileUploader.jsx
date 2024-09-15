import React, { useState } from "react";
import "./FileUploader.css"; // Importamos los estilos

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="file-label">
        <div className="file-upload-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt="Upload Icon"
            className="upload-icon"
          />
          <p className="upload-text">
            {selectedFile ? selectedFile.name : "Drag & Drop or Click to Upload"}
          </p>
        </div>
      </label>
    </div>
  );
};

export default FileUploader;
