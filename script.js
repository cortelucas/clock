 let digitalElement = document.querySelector('.digital'),
     secondElement = document.querySelector('.p_s'),
     minuteElement = document.querySelector('.p_m'),
     hourElement = document.querySelector('.p_h');

const updateClock = () => {
  let now = new Date();
  let time = `${fixZero(now.getHours())}:${fixZero(now.getMinutes())}:${fixZero(now.getSeconds())}`

  digitalElement.innerHTML = time;

  updateSecond(now);
  updateMinute(now);
  updateHour(now);
}

const fixZero = (time) => {
  return time < 10 ? `0${time}` : time;
}

const updateSecond = (time) => {
  let secDeg = ((360 / 60) * time.getSeconds()) - 90;
  
  secondElement.style.transform = `rotate(${secDeg}deg)`;
}

const updateMinute = (time) => {
  let minDeg = ((360 / 60) * time.getMinutes()) - 90;
  
  minuteElement.style.transform = `rotate(${minDeg}deg)`;
}

const updateHour = (time) => {
  let hourDeg = ((360 / 12) * time.getHours()) - 90;
  
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();