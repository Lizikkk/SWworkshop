const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')
const loginBtn = document.getElementById('loginBtn')
const imgBoxes = document.querySelectorAll('.image-box')


closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
});

loginBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
});

const timers = document.querySelectorAll('.timer');

timers.forEach((element, index) => {
  let countdown = Math.floor(Math.random() * 25) + 1;

  const intervalId = setInterval(() => {
    element.innerHTML = countdown
    countdown--;

    if (countdown < 0) {
      clearInterval(intervalId)
      element.innerHTML = 'Timer finished!'
      
      const hiddenBox = imgBoxes[index]
      if(hiddenBox){
      hiddenBox.style.display = 'none'
      }
      
    }
  }, 1000);
});


