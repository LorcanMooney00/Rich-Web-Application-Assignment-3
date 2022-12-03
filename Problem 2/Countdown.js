console.log("hello")
const { interval, take, map, timer } = rxjs
//Counting one second in conslog
const Seconds = timer(1000, 2000);
const subscribe = Seconds.subscribe(valueofseconds => console.log(valueofseconds));