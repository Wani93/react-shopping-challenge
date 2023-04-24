const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET_NAME);

  return await fetch(import.meta.env.VITE_CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data.url);
};

export { uploadFile };
