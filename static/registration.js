const submit = document.querySelector('input[type="submit"]');

const birthdayInput = document.querySelector('.datepicker-input');

const textBirthdayInput = document.getElementById("date-textinput");

const messageContainer = document.querySelector('.msg-container');


var error_msg = document.createElement('DIV');
messageContainer.appendChild(error_msg);
error_msg.classList.add('error-msg');

birthdayInput.addEventListener('change', e => {
  textBirthdayInput.value = e.target.value;
});

textBirthdayInput.addEventListener('change', e => {
  birthdayInput.value = e.target.value;
})

const checkError = () => {
  if (error_msg.innerHTML.trim("").length != 0) {
    error_msg.style.display = 'block';
    error_msg.style.animationPlayState = 'running';
  }
}

const validatePassord = (str) => {
  var pattern  = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")
  if(pattern.test(str) && str.length>=8) {
    return true;
  } else {
    return false;
  }
}

submit.addEventListener('click', (e) => {
  let valuep1 = document.getElementById('user_password').value;
  let valuep2 = document.getElementById('user_passwordc').value;
  let checkbox = document.querySelector('input[type="checkbox"]');
  if (valuep1 != valuep2) {
    e.preventDefault();
    error_msg.innerHTML = "Las claves ingresadas no coinciden";
    checkError();
  } else if (!validatePassord(valuep1)) {
    e.preventDefault();
    let error_msg = document.querySelector('.error-msg');
    error_msg.innerHTML = "La clave debe contener al menos 8 caracteres, una mayuscula y una minuscula";
    checkError();
  }else if(!checkbox.checked) {
    e.preventDefault();
    let error_msg = document.querySelector('.error-msg');
    error_msg.innerHTML = "Debe declarar el consentimiento de sus padres";
    checkError();
  }
})