/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
   return new Promise((res,rej) => setTimeout(res,seconds));
}

async function example(sec) {
    console.log('Before sleep');
    await sleep(sec);
    console.log('After 2 seconds');
  }


example(5000);
