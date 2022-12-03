console.log("hello")
const { interval, take, map, timer } = rxjs
//Counting one second in conslog
const Hours = timer(1000, 7200000);
const subscribe1 = Hours.subscribe(valueofhours => document.getElementById('hoursDiv').innerHTML=valueofhours);

const Minutes = timer(1000, 120000);
const subscribe2 = Minutes.subscribe(valueofMinutes => document.getElementById('minutesDiv').innerHTML=valueofMinutes);

const Seconds = timer(1000, 2000);
const subscribe3 = Seconds.subscribe(valueofseconds => document.getElementById('secondsDiv').innerHTML=valueofseconds);