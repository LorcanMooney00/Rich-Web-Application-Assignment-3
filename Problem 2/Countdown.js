
const { } = rxjs

function hours(){
  hoursfromhtml=document.getElementById("Hour").value;
  hoursfromhtml = hoursfromhtml * 3600
  return hoursfromhtml;
}

function minutes(){
  Minsfromhtml=document.getElementById("Minutes").value;
  Minsfromhtml = Minsfromhtml * 60
  return Minsfromhtml;
}

function seconds(){
  Secsfromhtml=document.getElementById("Seconds").value;
  return Secsfromhtml;
}

countdownDiv = document.getElementById("CountdownDiv")
rxjs.fromEvent(submit, 'click').subscribe(() => CompleteCountdown());
// submit.addEventListener('click', event => {
function CompleteCountdown(){
  var myTimer;
  let hoursfromhtml = hours();
  let Minsfromhtml = minutes();
  let Secsfromhtml = seconds()

  myTimer = setInterval(Countdowntimer, 1000);
  var TimerDown = Number(hoursfromhtml) + Number(Minsfromhtml) + Number(Secsfromhtml); 

  function Countdowntimer() {
    TimerDown=TimerDown-1;
      var seconds = TimerDown % 60; 
      var secondsInMinutes = (TimerDown - seconds) / 60; 
      var minutes = secondsInMinutes % 60; 
      var hours = (secondsInMinutes - minutes) / 60;
      
      countdownDiv.innerHTML = `${hours}:${minutes}:${seconds}`

      if (TimerDown == 0) {
          clearInterval(myTimer);
          countdownDiv.innerHTML = ""
      }
  }
}