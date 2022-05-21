const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const secondsBox = clock.querySelector("span:last-child");
  if(parseInt(seconds) >= 50){
    secondsBox.classList.add("clock-exact")
  }
  else{
    secondsBox.classList.remove("clock-exact")
  }
  clock.querySelector("span:first-child").innerText = `${hours}:${minutes}:`;
  secondsBox.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);