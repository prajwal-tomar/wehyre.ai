// import React from "react";

// const API_KEY = "AIzaSyC4hMsWHQXAZBsBqSpK2jcFVT9WmhNQNsQ";

// const ResumeUploadSection = () => {
//   const handleFileUpload = (file) => {
//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append("file", file);

//     // Make an API request to upload the file to Google Drive
//     fetch(
//       `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=${API_KEY}`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("File uploaded successfully:", data);
//         // Handle the response from Google Drive
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error);
//         // Handle any errors that occur during the upload
//       });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     handleFileUpload(file);
//   };

//   return (
//     <section>
//       <h2>Upload Resume</h2>
//       <input type="file" onChange={handleFileChange} />
//     </section>
//   );
// };

// export default ResumeUploadSection;
