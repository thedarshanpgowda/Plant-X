import React, { useState } from 'react';
import './Upload.css'; // Use updated CSS file name

function App() {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setPreviewURL(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewURL('');
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate file upload logic
    if (file) {
      console.log('File:', file);
      console.log('Description:', description);
      // Reset form after submission
      setFile(null);
      setPreviewURL('');
      setDescription('');
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container">
      <h1>Upload File with Description</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="file-upload">
          {previewURL && (
            <div className="preview-container">
              <img src={previewURL} alt="Preview" className="preview-image" />
              <button type="button" className="btn-remove" onClick={handleRemoveImage}>
                X
              </button>
            </div>
          )}
          {!previewURL && (
            <label htmlFor="upload" className="file-label">
              <span className="file-custom">Choose a file...</span>
            </label>
          )}
          <input type="file" id="upload" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter a description..."
          />
        </div>
        <button type="submit" className="btn-submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
