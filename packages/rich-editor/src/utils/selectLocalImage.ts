// Open Dialog to select Image File
export const selectLocalImage = (callback = null) => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = () => {
    const file = input.files[0];
    if (callback) {
      callback(file);
    }
  };
};
