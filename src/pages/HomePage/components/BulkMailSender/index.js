import React, { useState } from 'react';

const BulkMailSender = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSendMail = () => {
    if (selectedFile) {
      // Logic to handle sending mail
      console.log('Sending mail with file:', selectedFile);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Bulk Mail Sender</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fileInput">
            {selectedFile ? 'Change file:' : 'Select a file:'}
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          {selectedFile && (
            <div className="mt-2 text-sm text-gray-600">
              Selected file: {selectedFile.name}
            </div>
          )}
        </div>
        <button
          onClick={handleSendMail}
          className="bg-primary text-white py-2 px-4 rounded w-full hover:bg-primary transition duration-300"
        >
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default BulkMailSender;
