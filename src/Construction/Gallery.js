import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../db';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const db = getFirestore(app);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const allImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const name = uuidv4() + '-' + file.name;

      const uploadTask = uploadBytesResumable(ref(getStorage(app), name), file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const docRef = addDoc(collection(db, 'USCC'), {
              url: url,
              name: name,
            });
            console.log(url);
            allImages.push({ url, name });

            if (allImages.length === files.length) {
              setUploading(false);
              setImages(allImages);
            }
          });
        }
      );
    }
  };

  const handleUpload = () => {
    setUploading(true);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      <div className="image-preview">
        {images.map((image) => (
          <img key={image.name} src={image.url} alt={image.name} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
