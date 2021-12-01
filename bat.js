// const promiseYouWillWorkCallback = (shout, cb) => {
//   setTimeout(() => {
//     if (!shout) {
//       return cb(new Error("No shout passed!!"));
//     }
//     return cb(null, shout);
//   }, 2000);
// };

// const logShout = (err, shout) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`I shout ${shout}`);
//   }
// };

// promiseYouWillWorkCallback(null, logShout);

/**********************************/
const promiseYouWillWorkPromise = (shout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shout) {
        return reject(new Error("No shout!"));
      }
      return resolve(shout);
    }, 2000);
  });
};

// promiseYouWillWorkPromise("For the Alliance!")
//   .then((shout) => {
//     console.log(`I shout ${shout}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const thisIsAwait = async (shout) => {
  const theShout = await promiseYouWillWorkPromise(shout);
  try {
    console.log(theShout);
  } catch (err) {
    console.log(err);
  }
};

thisIsAwait();
