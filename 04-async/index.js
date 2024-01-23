/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy')
}
function theEnd() {
  console.log('This is the end!')
}
function sayHi() {
  console.log('Hi')
}

function testMe() {
  setTimeout(sayHowdy, 0) // 2nd
  console.log('Partnah') // 1st
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('Welcome'), 3000)
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(() => console.log('Good Bye'), 2000)
  console.log('Hello')
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  const intervalID = setInterval(() => console.log('hi again'), 1000)
  setTimeout(() => clearInterval(intervalID), 5000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  const funcIntervalID = setInterval(func, interval * 1000)
  setTimeout(() => clearInterval(funcIntervalID), duration * 1000)
}
// Uncomment the following lines to check your work!
// everyXsecsForYsecs(sayHi, 1, 5); // should invoke sayHi function every 1 seconds, for 5 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let counter = 0
  return () => {
    const intervalID = setInterval(() => {
      counter++
      console.log(counter)
    }, wait)
    setTimeout(() => clearInterval(intervalID), target * wait + 1000)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger()
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  return new Promise((res, rej) => {
    setTimeout(() => res(val), 2000)
  })
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...')
// createPromise.then((val) => console.log(val))
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb
    this.intervalID = null
    this.seconds = 0
  }
  start() {
    this.intervalID = setInterval(() => {
      this.seconds = (this.seconds % 60) + 1
      this.cb(this.seconds)
    }, 1000)
  }
  reset() {
    clearInterval(this.intervalID)
    this.seconds = 0
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val)
// })
// console.log('Started Clock.')
// clock.start()
// setTimeout(() => {
//   clock.reset()
//   console.log('Stopped Clock after 6 seconds.')
// }, 6000)

/* CHALLENGE 10 */
function debounce(callback, interval) {
  let intervalID
  return () => {
    clearTimeout(intervalID)
    intervalID = setTimeout(callback, interval)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
  return 'hi'
}
// const giveHiSometimes = debounce(giveHi, 3000)
// console.log(giveHiSometimes()) // -> 'hi'
// setTimeout(() => console.log(giveHiSometimes()), 2000) // -> undefined
// setTimeout(() => console.log(giveHiSometimes()), 4000) // -> undefined
// setTimeout(() => console.log(giveHiSometimes()), 8000) // -> 'hi'
