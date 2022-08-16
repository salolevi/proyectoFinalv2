const fileInput = document.getElementById('file-input');
const profilePic = document.getElementById('editable-img');
const imageContainer = document.querySelector('.hover-img__container');
const hoverImage = document.getElementById('hover-img');


function clearInputFile(f){
  if(f.value){
      try{
          f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
      }catch(err){ }
      if(f.value){ //for IE5 ~ IE10
          var form = document.createElement('form'),
              parentNode = f.parentNode, ref = f.nextSibling;
          form.appendChild(f);
          form.reset();
          parentNode.insertBefore(f,ref);
      }
  }
}

clearInputFile(fileInput);

imageContainer.addEventListener('click', (e) => {
  fileInput.click();
})

imageContainer.addEventListener('mouseover', (e) => {
  hoverImage.style.opacity = 0.4;
})
footer.classList.remove('absolute-footer');

imageContainer.addEventListener('mouseout', e => {
  hoverImage.style.opacity =0;
})

fileInput.addEventListener('change', (e)=>{
  let newFile = e.target.files[0];

  if(newFile) {
    let reader = new FileReader();

    reader.addEventListener('load', ()=> {
      profilePic.setAttribute('src', reader.result);
    });

  reader.readAsDataURL(newFile);
  }
});

const birthdayInput = document.querySelector('.datepicker-input');

const textBirthdayInput = document.getElementById("date-textinput");

birthdayInput.addEventListener('change', e => {
  textBirthdayInput.value = e.target.value;
});

textBirthdayInput.addEventListener('change', e => {
  birthdayInput.value = e.target.value;
})