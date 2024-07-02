import React, { useState } from 'react';

const MyImages = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, { id: Date.now(), src: reader.result, name: file.name }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">My Images</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="imageInput">
            Upload an image:
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
           <button
        //   onClick={handleSendMail}
          className="bg-primary text-white py-2 px-4 rounded w-full hover:bg-primary transition duration-300"
        >
          Upload Image
        </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Uploaded Images</h2>
          {images.length === 0 && <p className="text-gray-500">No images uploaded yet.</p>}
          <ul>
            {images.map((image) => (
              <li key={image.id} className="flex items-center justify-between mb-2 p-2 border border-gray-300 rounded">
                <div className="flex items-center">
                  <img src={image.src} alt={image.name} className="w-16 h-16 object-cover mr-4" />
                  <span>{image.name}</span>
                </div>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyImages;
