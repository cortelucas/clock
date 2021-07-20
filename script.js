 let digitalElement = document.querySelector('.digital'),
     secondElement = document.querySelector('.p_s'),
     minuteElement = document.querySelector('.p_m'),
     hourElement = document.querySelector('.p_h');

const updateClock = () => {
  let now = new Date();
  let time = `${fixZero(now.getHours())}:${fixZero(now.getMinutes())}:${fixZero(now.getSeconds())}`

  digitalElement.innerHTML = time;

  updateSecond(now);
}

const fixZero = (time) => {
  return time < 10 ? `0${time}` : time;
}

const updateSecond = (time) => {
  let secDeg = ((360 / 60) * time.getSeconds()) - 90;
  
  secondElement.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);