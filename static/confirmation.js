errorDiv = document.querySelector('.error-msg');

const redirect_page = (link) => {
  let timOu = setTimeout(() => {
    window.location.replace(link);
    window.clearTimeout();
  }, 4000);
};

if (errorDiv.classList.contains('safe')) {
  redirect_page('/');
} else {
  redirect_page('members/log-in');
}