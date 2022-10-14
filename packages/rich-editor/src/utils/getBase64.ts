export async function getBase64(file: File): Promise<string> {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(`${reader.result}`);
    reader.onerror = (error) => reject(error);
  });
}
