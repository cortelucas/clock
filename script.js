 let digitalElement = document.querySelector('.digital'),
     secondElement = document.querySelector('.p_s'),
     minuteElement = document.querySelector('.p_m'),
     hourElement = document.querySelector('.p_h');

const updateClock = () => {
  let now = new Date();
  let time = `${fixZero(now.getHours())}:${fixZero(now.getMinutes())}:${fixZero(now.getSeconds())}`

  digitalElement.innerHTML = time;
}

const fixZero = (time) => {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);