const footer = document.querySelector('footer');

const burgerContainer = document.querySelector('.burger-container');

burgerContainer.addEventListener('click', (event) => {
  burgerContainer.classList.toggle('open');
  if (burgerContainer.classList.contains('open')) {
    document.querySelector('.dropdown-menu').style.transform = 'translateY(0)';
  } else {
    document.querySelector('.dropdown-menu').style.transform = 'translateY(-500px)';

  }
})

var errorDiv = document.querySelector('.error-msg') !== null ? document.querySelector('.error-msg') : undefined;

if (errorDiv!== undefined) {
  errorDiv.style.animationPlayState = 'paused';
  const message = errorDiv.innerHTML.trim("");

  if (message.length != 0) {
    if(errorDiv.classList.contains('safe')) {
      errorDiv.style.backgroundColor = 'green'
    }
    errorDiv.style.display = 'block';
    errorDiv.style.animationPlayState = 'running';
  }
}