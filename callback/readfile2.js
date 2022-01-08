const { readFile } = require('fs');

let data = 'test.txt';
let readFilePromise = (data) => {
  return new Promise((resolve, reject) => {
    readFile(data, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
};

readFilePromise(data)
  .then((result) => {
    console.log(`promise result: ${result}`);
  })
  .catch((err) => {
    console.log(`promise err: ${err}`);
  });
