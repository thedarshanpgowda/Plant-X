import React, { useState } from 'react';
import './Upload.css'; // Use updated CSS file name
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks.js/useAuth';

function App() {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setloading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { updateResponse } = useAuth()
  const handleFileChange = async (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setloading(true)
      console.log('File:', file);
      let formdata = new FormData()
      formdata.append("photo", file)
      console.log(formdata)
      try {
        const result = await axios.post(" http://localhost:3000/upload", formdata)
        updateResponse({ ...result.data, img: previewURL })
        console.log(result.data.response)
        navigate("/analysis", { state: location, replace: true })
      } catch (e) {
        console.log(e)
      } finally {
        setloading(false)
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container">
      <h1>{loading? "Analysing the image..." : "Upload File"} <span>with description</span></h1>
      <form onSubmit={handleSubmit} className="upload-form" encType='multipart/form-data'>
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
          <input type="file" name='photo' id="upload" onChange={handleFileChange} />
        </div>
        {/* <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter a description..."
          />
        </div> */}
        {!loading && <button type="submit" className="btn-submit">
          Upload
        </button>}
      </form>
    </div>
  );
}

export default App;
