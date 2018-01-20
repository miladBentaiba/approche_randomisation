const test = true;

new Promise(((resolve, reject) => {
  if (test) resolve(1);
  else reject(new Error('1 gfg'));
}))
  .then((result) => {
    console.log(result);
    return result * 2;
  }).then((result) => {
    console.log(result);
    return result * 2;
  }).then((result) => {
    console.log(result);
    return result * 2;
  })
  .catch((error) => {
    console.log(error.message);
  });
