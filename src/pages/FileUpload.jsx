import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(selectedFile);

      // Display Image (if it's an image file)
      if (selectedFile.type.startsWith('image/')) {
        const img = new Image();
        img.src = fileUrl;
        img.alt = selectedFile.name;
        img.style.maxWidth = "500px"; // Set maximum width for better viewing
        img.style.maxHeight = "500px"; // Set maximum height for better viewing
        document.getElementById('imagePreview').innerHTML = ''; // Clear previous images
        document.getElementById('imagePreview').appendChild(img); 
      }else {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = selectedFile.name;
        link.textContent = selectedFile.name;
        // Append the link to the DOM
        document.getElementById('filePreview').appendChild(link);
      }
    }
  };

  return (
    <div className='container'>
      <h1 title="pageTitle">File Upload</h1>
      <p>Learn to handle file upload.</p>
      <br />
      <input type="file" onChange={handleFileChange} />
      <button className="component-button" onClick={handleFileUpload}>Upload</button>
      <br />
      <br />
      <div id="imagePreview"></div>
      <div id="filePreview"></div> 
    </div>
  );
}

export default FileUpload;
