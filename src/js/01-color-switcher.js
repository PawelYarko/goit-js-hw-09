
  const body = document.querySelector('body');
  const buttonStart = document.querySelector('.btn-start');
  const buttonStop = document.querySelector('.btn-stop');
  let intervalId = null;

  buttonStart.addEventListener('click', onButtonStartClick);
  buttonStop.addEventListener('click', onButtonStopClick);

  function onButtonStartClick(){
    buttonStart.setAttribute('disabled', 'disabled');
    intervalId = setInterval((     
    )=>{
        body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },1000);

  }

  function onButtonStopClick(){
    clearInterval(intervalId);
    buttonStart.removeAttribute('disabled');     
  }

