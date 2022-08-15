document.querySelectorAll('.about-btn').forEach((button, index) => {
  button.addEventListener('mouseenter', () => {
    document.querySelectorAll('.about-text')[index].style.opacity = '1';
  })

  button.addEventListener('mouseleave', () => {
    document.querySelectorAll('.about-text')[index].style.opacity = '0';
  })
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth<=860) 
    document.querySelectorAll('.about-text').forEach(elem => {
      elem.style.display = 'none';
    })
})