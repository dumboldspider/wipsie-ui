// Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
export const saveToServer = async (
  file: File,
  serverUrl: string,
  accessKey: string
) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
      body: formData,
    });

    const bodyResult = await res.json();

    if (bodyResult.error) {
      reject(bodyResult.error);
    }

    resolve(bodyResult);
  });
};
