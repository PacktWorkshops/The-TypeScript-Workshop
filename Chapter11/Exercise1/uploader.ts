let performUpload = (imgStatus: string): Promise<{ imgStatus: string }> => {
  return new Promise(resolve => {
    console.log(`Status: ${imgStatus}`);
    setTimeout(() => {
      resolve({ imgStatus: imgStatus });
    }, 2000);
  });
};

performUpload("uploading...")
  .then(res => {
    return performUpload("compressing...");
  })
  .then(res => {
    return performUpload("transfering...");
  })
  .then(res => {
    return performUpload("Image upload completed");
  });
