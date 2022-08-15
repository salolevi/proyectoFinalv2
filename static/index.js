document.querySelectorAll('.about-btn').forEach((button, index) => {
  button.addEventListener('mouseenter', () => {
    document.querySelectorAll('.about-text')[index].style.opacity = '1';
  })

  button.addEventListener('mouseleave', () => {
    document.querySelectorAll('.about-text')[index].style.opacity = '0';
  })
})