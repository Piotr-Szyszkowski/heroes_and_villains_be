const promiseYouWillWorkCallback = (shout, cb) => {
  setTimeout(() => {
    if (!shout) {
      return cb(new Error("No shout passed!!"));
    }
    return cb(null, shout);
  }, 2000);
};

const logShout = (err, shout) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`I shout ${shout}`);
  }
};

promiseYouWillWorkCallback(null, logShout);

/**********************************/
const promiseYouWillWorkPromise = (shout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 2000);
  });
};
