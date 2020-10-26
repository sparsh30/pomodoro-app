var minutes = 25;
var seconds = "00";

var bell = new Audio("bell.mp3");

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start() {
  minutes = 24;
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutesInterval = setInterval(minutesTimer, 60000);
  var secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        document.getElementById("doneMessage").innerHTML = "DONE!";
        document.getElementById("doneMessage").classList.add("showMessage");
      }
      seconds = 60;
    }
  }
}
