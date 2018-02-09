/* const asyncAdd = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject(new Error('Arguments must be numbers'));
    }
  }, 1500);
});

asyncAdd(5, '7').then((res) => {
  console.log('Result: ', res);
  // noinspection JSAnnotator
return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45', res);
}).catch((errorMessage) => {
  console.log(errorMessage.message);
});
*/
