function timeShower(){
  const timeNow = new Date();

  document.querySelector(".hours").textContent = timeNow.getHours();
  document.querySelector(".minutes").textContent = timeNow.getMinutes();
  document.querySelector(".seconds").textContent = timeNow.getSeconds();
}

setInterval (() => {
  timeShower();
}, 1000);