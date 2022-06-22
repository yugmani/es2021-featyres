// Import stylesheets
import './style.css';

// String replaceAll() method
// ****************************************

let str = 'a-b-c-d';

let newStr = str.replaceAll('-', ' ');

console.log(newStr);
// a b c d

// Promise.any
// *******************************************

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise one');
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise two');
  }, 5000);
});

Promise.any([promise1, promise2]).then(
  (val) => {
    //success callback
    console.log(val);
  },
  (e) => {
    //error callback
    console.log(e);
  }
);

//Promise one

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise 3 rejected!');
  });
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 4');
  }, 5000);
});

Promise.any([promise3, promise4]).then(
  (val) => {
    //success callback
    console.log(val);
  },
  (e) => {
    //error callback;
    console.log('All promises were rejected: ', e);
  }
);

// All promises were rejected:  AggregateError {}

Promise.any([promise1, promise3]).then(
  (val) => {
    //success callback
    console.log('Promise is partially resolved: ', val);
  },
  (e) => {
    console.log('Promise is partially rejected: ', e);
  }
);

//Promise is partially resolved: Promise one

Promise.any([promise3, promise2]).then(
  (val) => {
    //success callback
    console.log('Promise is partially resolved: ', val);
  },
  (e) => {
    console.log('Promise is partially rejected: ', e);
  }
);

//Promise is partially resolved: Promise two

// PROMISE.RACE
// ************************************************

Promise.race([promise1, promise4]).then(
  (val) => {
    //success callback
    console.log('Promise race: ', val);
  },
  (e) => {
    //error callback
    console.log('Race error: ', e);
  }
);


// Promise race: Promise one

Promise.race([promise4, promise2]).then(
  (val) => {
    //success callback
    console.log('Promise race: ', val);
  },
  (e) => {
    //error callback
    console.log('Race error: ', e);
  }
);

// Promise race: Promise two