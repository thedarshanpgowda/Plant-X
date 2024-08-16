import React, { useState } from 'react';
import './Upload.css'; // Use updated CSS file name
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks.js/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxFile, setReduxLoading, setReduxPreviewURL } from '../../store/initialSlice';

function App() {
  // const [file, setFile] = useState(null);
  // const [previewURL, setPreviewURL] = useState('');
  // const [loading, setloading] = useState(false)


  const file = useSelector(state => state.initial.file)
  const loading = useSelector(state => state.initial.loading)
  const previewURL = useSelector(state => state.initial.previewURL)

  const dispatch = useDispatch()


  const location = useLocation()
  const navigate = useNavigate()
  const { updateResponse } = useAuth()
  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        // setPreviewURL(event.target.result);
        dispatch(setReduxPreviewURL(event.target.result))
      };
      reader.readAsDataURL(e.target.files[0]);
      dispatch(setReduxFile(e.target.files[0]))
      // setFile(e.target.files[0]);

    }



  };

  const handleRemoveImage = () => {
    dispatch(setReduxFile(null))
    // setFile(null);
    dispatch(setReduxPreviewURL(''))
    // setPreviewURL('');
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      // setloading(true)
      dispatch(setReduxLoading(true))
      console.log('File:', file);
      let formdata = new FormData()
      formdata.append("photo", file)
      console.log(formdata)
      try {
        const result = await axios.post(" http://localhost:3000/upload", formdata)
        updateResponse({ ...result, img: previewURL })
        console.log(result.data.response)
        navigate("/analysis", { state: location, replace: true })
      } catch (e) {
        console.log(e)
      } finally {
        // setloading(false)
        dispatch(setReduxLoading(false))
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container">
      <h1>{loading ? "Analysing the image..." : "Upload File"} <span>with description</span></h1>
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
        {!loading && <button type="submit" className="btn-submit">
          Upload
        </button>}
      </form>
    </div>
  );
}

export default App;
