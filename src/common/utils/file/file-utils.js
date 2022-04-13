
export const fileUtils = {
  readAsBase64Async
};

function readAsBase64Async(file) {
  const promise = new Promise((resolve) => {
    const fileClone = new File([file], file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64 = e.target.result;
      const data = {
        file: fileClone,
        base64
      };

      resolve(data);
    };

    reader.readAsDataURL(fileClone);
  });

  return promise;
}

