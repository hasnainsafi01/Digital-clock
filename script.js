let clock = document.getElementById("clock");
let date = document.getElementById("date");
setInterval(() => {
  // Time
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 === 0 ? 12 : hours % 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  

  clock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}, 1000);
