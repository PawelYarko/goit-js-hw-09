// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('#btn-start');
const dateSelector = document.querySelector('#datetime-picker');
const daysTimerEl = document.querySelector('.value[data-days]');
const hoursTimerEl = document.querySelector('.value[data-hours]'); 
const minsTimerEl = document.querySelector('.value[data-minutes]');
const secsTimerEl = document.querySelector('.value[data-seconds]'); 

btnStart.setAttribute('disabled', 'disabled');

const options = {
    enableTime: true,
    time_24hr: true,
    // dateFormat: 'd-H-i-S',
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const startTime = selectedDates[0];
      const currentTime = Date.now();
      let timerId = null;

      if(startTime < currentTime){
        window.alert("Please choose a date in the future"); 
      }
      btnStart.removeAttribute('disabled');
      btnStart.setAttribute('unable', 'unable');

      const timer ={
    start() {
      const startTime = selectedDates[0];
      const INTERVAL = 1000;
      timerId = setInterval(()=>{
        const currentTime = Date.now();
        const deltaTime =  startTime - currentTime;
        const time = convertMs(deltaTime);
        updateClockFace(time);
        if(deltaTime < 1000){
          timer.stop();
        }
        // console.log(`${days}:${hours}:${minutes}:${seconds}`);
      },INTERVAL) 
    }, 
    stop() {
        clearInterval(timerId);  
    },
  };
  timer.stop();  
  btnStart.addEventListener('click', ()=>{
    timer.start();
    btnStart.removeAttribute('unable', 'unable');
    btnStart.setAttribute('disabled', 'disabled');
   });
    },
  };
  

  let date = flatpickr(dateSelector, options);
  dateSelector.addEventListener('input', ()=>{         
  });
  



  function updateClockFace({ days, hours, minutes, seconds }){
    daysTimerEl.textContent = days;
    hoursTimerEl.textContent = hours;
    minsTimerEl.textContent = minutes;
    secsTimerEl.textContent = seconds;
    
  }

  

  function pad (value){
    return String(value).padStart(2 , '0');
  }

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  