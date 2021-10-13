//basic promise 1
//Pending: initial state, neither fulfilled nor rejected.
//Fulfilled: operation completed successfully.
//Rejected: operation failed.
let passexam = false;
        let res = new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (passexam) {
                    resolve("Dad gifted the new mobile.");
                } else {
                    reject("Dad has not gifted the mobile.");
                }
            },  1000);
        });
        console.log(res);

//promise 2
var add = function(x, y) {
    return new Promise((resolve,reject) => {
      var sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };