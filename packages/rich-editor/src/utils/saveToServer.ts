// Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
export const saveToServer = async (file, serverUrl) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {},
      body: formData,
    });

    const bodyResult = await res.json();

    if (bodyResult.error) {
      reject(bodyResult.error);
    }

    resolve(bodyResult);
  });
};
