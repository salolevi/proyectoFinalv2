Array.prototype.shuffle = function() {
  let currentIndex = this.length, randomIndex;

  while (currentIndex!=0) {
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex--;

    [this[currentIndex], this[randomIndex]] = [
      this[randomIndex], this[currentIndex]];
  }
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


let words_game1_level1 = [
  ['plan', 'pan', 'dan'],
  ['zato', 'zapato', 'zatapo'],
  ['omigo', 'amigo', 'amibo'],
  ['mesa', 'meza', 'nesa'],
  ['raton', 'naton', 'ralon'],
  ['peso', 'qeso', 'sepo'],
  ['dala', 'pala', 'papala'],
  ['saqo', 'sapo', 'sato'],
  ['cielo', 'ciolo', 'mielo'],
  ['labron', 'ladron', 'badron'],
  ['gato', 'bato', 'gatato'],
  ['buzo', 'duzo', 'buco'],
  ['linbo', 'dilon', 'lindo'],
  ['nanta', 'manta', 'mamanta'],
  ['arbol', 'armol', 'ardol']
]

const CORRECT_WORDS1 = [
  'plan',
  'zapato',
  'amigo',
  'mesa',
  'raton',
  'peso',
  'pala',
  'sapo',
  'cielo',
  'ladron',
  'gato',
  'buzo',
  'lindo',
  'manta',
  'arbol'
];

let words_game1_level2 = [
  ['dificil', 'dififil', 'dificicil'],
  ['tamén', 'tamdién', 'también'],
  ['tanque', 'tante', 'tanpue'],
  ['abuela', 'atuela', 'aduela'],
  ['maranja', 'naranja', 'naranga'],
  ['cormina', 'corbina', 'cortina'],
  ['coramon', 'corazon', 'corarazon'],
  ['alante', 'adelante', 'amelante'],
  ['estuela', 'ascuela', 'escuela'],
  ['malamar', 'camalar', 'calamar'],
  ['juguete', 'jubete', 'jujete'],
  ['colegio', 'cogelio', 'coleqio'],
  ['tuerto', 'tuerco', 'turto'],
  ['ciego', 'siego', 'gieco'],
  ['cocido', 'tocido', 'codido']
];

const CORRECT_WORDS2 = [
  'dificil',
  'también',
  'tanque',
  'abuela',
  'naranja',
  'cortina',
  'corazon',
  'adelante',
  'escuela',
  'calamar',
  'juguete',
  'colegio',
  'tuerto',
  'ciego',
  'cocido'
];

let words_game1_level3 = [
  ['cabalaza', 'calabaza', 'calaza'],
  ['botadillo', 'bocadilillo', 'bocadillo'],
  ['ordenamor', 'ordenadodor','ordenador'],
  ['cocodrilo', 'trotodrilo', 'crocodilo'],
  ['boligrafo', 'goligrafo', 'boliligrafo'],
  ['avioneta', 'avioteta', 'avioneneta'],
  ['encendedor', 'endencedor', 'encendededor'],
  ['desodorante', 'besoborante', 'dedosorante'],
  ['cavalera', 'cavalelera', 'calavera'],
  ['musculosa', 'nusculosa', 'cusmulosa'],
  ['cargador', 'carqador', 'carbador'],
  ['ternotanbe', 'termotanque', 'tertanque'],
  ['buitarra', 'guirra', 'guitarra'],
  ['magueta', 'maqueta', 'tamueqa'],
  ['cobrili', 'colilibri', 'colibri']
]

const CORRECT_WORDS3 = [
  'calabaza',
  'bocadillo',
  'ordenador',
  'cocodrilo',
  'boligrafo',
  'avioneta',
  'encendedor',
  'desodorante',
  'calavera',
  'musculosa',
  'cargador',
  'termotanque',
  'guitarra',
  'maqueta',
  'colibri'
];

let words_game2_level1 = [
  // 'bombero',
  // 'canasta',
  // 'arcoiris',
  'mapa',
  'luna',
  'regla',
  'pelota',
  'perro',
  'libro',
  'caja',
  'lapiz',
  'botas',
  'taza'
];

let words_game2_level2 = [
  'bombero',
  'canasta',
  'gorra',
  'doctor', 
  'celular',
  'botines',
  'helado',
  'enchufe',
  'igloo',
  'caballo'
]

let words_game2_level3 = [
  'arcoiris',
  'armario',
  'diamante',
  'carpeta',
  'entrenador',
  'bateria',
  'millonario',
  'mochila',
  'esquimal',
  'caramelo'
];

//Mezclo las palabras
words_game1_level1.shuffle();
words_game1_level1.forEach(elem => {elem.shuffle()});

words_game1_level2.shuffle();
words_game1_level2.forEach(elem => {elem.shuffle()});

words_game1_level3.shuffle();
words_game1_level3.forEach(elem => {elem.shuffle()});


words_game2_level1.shuffle();
words_game2_level2.shuffle();
words_game2_level3.shuffle();

const games = [
  {
    game: 0,
    background : "../media/media/background_level0.jpg"
  },
  {
    game : 1,
    background : "../media/media/background_level1.jpg",
    words_1 : words_game1_level1,
    words_2: words_game1_level2,
    words_3: words_game1_level3,
    correctWords1: CORRECT_WORDS1,
    correctWords2: CORRECT_WORDS2,
    correctWords3: CORRECT_WORDS3
  },
  {
    game : 2,
    background : "../media/media/background_level2.png",
    words_1 : words_game2_level1,
    words_2: words_game2_level2,
    words_3: words_game2_level3
  },
];

const wrongAnswerAudio = new Audio('../media/audio/wrong_answer.wav');
const rightAnswerAudio = new Audio('../media/audio/correct_answer.wav');
const hoverAudio = new Audio('../media/audio/hover-option.wav');
const selectAudio = new Audio('../media/audio/select-option.mp3');

const gameContainer = document.querySelector('.game-container');
const wordsButtonContainer = document.createElement('DIV');
const gameInfoContainer = document.createElement('DIV');
let AUDIO_WORD;


let attempts = 5;
let rightAnswers  = 0;
let wrongAnswers = 0;
let actualGame;
let actualLevel;
let setOfWords = 0;
let correctWord;
let assignedKeyEvents = false;

// Cookie CSRF
const csrftoken = getCookie('csrftoken');

const getWords = difficulty => {
    if (difficulty == 1) return games[actualGame].words_1;
    else if (difficulty == 2) return games[actualGame].words_2;
    else return games[actualGame].words_3;
}

const getCorrectWord = (level, set) => {
  const words = getWords(level);
  let correctWords;
  if (level == 1) correctWords = games[actualGame].correctWords1
  else if (level == 2) correctWords = games[actualGame].correctWords2
  else correctWords = games[actualGame].correctWords3
  for (word of correctWords) {
    for (arrayWords of words[set]) {
      if (arrayWords.includes(word)) {
        return word;
      }
    }
  }
  
}

const getAudio = (word) => {
  return new Audio(`../media/audio/${word.replace('é', 'e')}_audio.mp3`);
}

const displayGameCompleted = () => {
  gameContainer.innerHTML = '';
  const gameCompletedDiv = document.createElement('DIV');
  gameCompletedDiv.classList.add('gameCompleted-msg')
  gameCompletedDiv.appendChild(colorWord('¡Gracias por jugar!'));
  gameContainer.appendChild(gameCompletedDiv);
  gameContainer.innerHTML += `<button class="menu">VOLVER AL MENU</button>`;
  const menuBtn = document.querySelector('.menu');
  menuBtn.addEventListener('click', () => {
    resetScores();
    gameContainer.innerHTML = '';
    gameContainer.style.animation = 'none';
    setTimeout(() => {
      gameContainer.style.webkitAnimation = '';
      // gameContainer.style.animationPlayState = 'running';
    }, 10);
    words_game1_level1.shuffle();
    words_game2_level1.shuffle();
    words_game1_level3.shuffle();
    words_game2_level1.shuffle();
    startGame();
    addButtonAnimations();
  })
}

const displayGameOver = () => {
  setTimeout(() => {
    const gameOverModal = document.createElement('div');
    gameContainer.innerHTML = '';
    gameOverModal.classList.add('modal', 'appear-modal');
    gameOverModal.innerHTML = `<div class="game-over">¡Vuelve a intentarlo!</div><div class="score">Puntuacion: ${rightAnswers}</div><div class="info-msg">Casi lo logras</div><button class="try-again">Volver a jugar</button>`;
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.justifyContent = 'center';
    gameContainer.appendChild(gameOverModal);
    document.querySelector('.try-again').addEventListener('click', ()=> {
      gameContainer.removeChild(gameOverModal);
      let words = getWords(actualLevel);
      words.shuffle();
      resetScores();
      if (actualGame == 1) renderGameOne(actualLevel);
      else if (actualGame == 2) renderGameTwo(actualLevel);
    })
  }, 800)
}

const displayLevelPassed = () => {
  const audioLevelPassed = new Audio(`../media/audio/level_completed.wav`);

  if (actualLevel<=2) { // Si quedan niveles por jugar
    gameContainer.innerHTML = '';
    const levelPassedModal = document.createElement('div');
    levelPassedModal.classList.add('modal', 'appear-modal');
    levelPassedModal.innerHTML = `<div class="level-passed">Superaste este nivel!</div><div class="score score-levelpassed">Puntuacion: ${rightAnswers}</div><button class="next-level">Siguiente Nivel</button>`;
    gameContainer.appendChild(levelPassedModal);
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.justifyContent = 'center';
    audioLevelPassed.play();
    document.querySelector('.next-level').addEventListener('click', () => {
      gameContainer.removeChild(levelPassedModal);
      resetScores();
    actualLevel++;
    if (actualGame == 1) renderGameOne(actualLevel);
    else if (actualGame == 2) renderGameTwo(actualLevel);
  })
  } else { // De no ser el caso, se termina el juevo
    displayGameCompleted();
  }
}

// Asigno Eventos a las opciones

const disableButtons = () => {
  if (document.querySelector('.options') === null) return -1;
  let buttons = document.querySelectorAll('.options *').forEach((elem) => {
    elem.disabled = true;
  })
}

const allInputsAreComplete = () => {
  let complete = true;
  document.querySelectorAll('.letra').forEach(elem => {
    complete = complete & elem.value !== '' ? true : false;
  });

  return complete;
}

const disableLetters = () => {
  if (document.querySelector('.letras') === null) return -1;
  document.querySelectorAll('.letra').forEach(elem => elem.disabled = true);
}

const gameOnePassed = (totalSets, rAnswers, wAnswers) => {
  return (rAnswers/totalSets >= 0.7 && validAttempts(attempts))
}

const gameTwoPassed = (totalSets, rAnswers, wAnswers) => {
  return (rAnswers/totalSets >= 0.7)
}

const validAttempts = (numAttempts) => {
  return numAttempts > 0 ? true : false;
}

const getHighScore = async (gameID, levelID) => {
  let response = await fetch(`get-data/${gameID}/${levelID}`);
  return response.json();
}

const assignEvents = () => {
  document.querySelectorAll('.options *').forEach(element => {
    words = getWords(actualLevel);
    element.addEventListener('click', (event) => {
    disableButtons();
    if (event.target.innerHTML == correctWord) {
      rightAnswerAudio.play();
      rightAnswers++;
      event.target.classList.toggle('correcto');
    } else {
      attempts--;
      wrongAnswerAudio.play();
      wrongAnswers++;
      event.target.classList.toggle('incorrecto');
    }
    if (!validAttempts(attempts)) {;
      sendAndCheckScore(words.length, rightAnswers, wrongAnswers);
    }
      displayNextOptions();
      displayScores(actualGame,actualLevel);
    })
  })
}

const assignKeyEvents = () => {
  assignedKeyEvents = true;
  document.body.addEventListener('keydown', (ev) => {
    let actual = ev.target;
    let isLetter = /^[a-zA-Z]/.test(ev.key);

    if (actual.classList.contains('letra-empty') && isLetter){
      let emptyLettersCount = document.querySelectorAll('.letra-empty').length;
      if (actual.value.length === Number(actual.getAttribute('maxlength'))) {
        let actualClass = [...actual.classList[actual.classList.length - 1]];
        let actualIndex = Number(actualClass[actualClass.length -1]);
        if (emptyLettersCount !== actualIndex ) {
          let siguiente = document.querySelector(`.empty${actualIndex + 1}`)
          siguiente.focus();
        } else if (emptyLettersCount === actualIndex && allInputsAreComplete()){
          disableLetters();
          let elem = document.activeElement;
          elem.style.animation = 'none';
          let word = '';
            document.querySelectorAll('.letra').forEach(box => {
            word+=box.value;
          });
          checkWord(word);
        }
      }
    }
  });
}

const showRecord = () => {
  let record = document.createElement('P');
  record.classList.add('new-record')
  record.innerHTML = '¡Nuevo Récord!'
  gameContainer.appendChild(record);
}

// Funcion que resetea los parametros de puntuacion
const resetScores = () => {
  setOfWords = 0;
  attempts = 5;
  rightAnswers = 0;
  wrongAnswers = 0;
}

const sendScore = () => {
  $.ajax({
    url: `send-score`,
    headers: {'X-CSRFToken': csrftoken},
    mode: 'same-origin',
    method: 'POST',
    data: {
      game: actualGame,
      level: actualLevel,
      score: rightAnswers
    },
    dataType: 'application/json'
  }).then(res => {
    console.log(res);
  });
}

const sendAndCheckScore = async (totalSets, rAnswers, wAnswers) => {
  sendScore();
  if (actualGame == 1) {
    if (gameOnePassed(totalSets, rAnswers, wAnswers)) {
      setTimeout(() => {
        displayLevelPassed();
      }, 500)
    } else displayGameOver();
  } else if (actualGame == 2) {
    if (gameTwoPassed(totalSets, rAnswers, wAnswers)) {
      setTimeout(() => {
        displayLevelPassed();
      }, 500)
    } else displayGameOver();
  }
}

const displayScoresFirst =  (gameID, levelID) => {
  gameInfoContainer.style.display = 'flex';
  gameContainer.style.flexDirection = 'row';
  gameContainer.style.justifyContent = 'end';
  gameInfoContainer.innerHTML = `<div class='attempts ${gameID == 1 ? '' : 'attempts-game2'}'>Intentos:${attempts}</div><div class='score'>Puntuacion: ${rightAnswers}</div>`;
  gameInfoContainer.classList.add('game-info');
  gameContainer.appendChild(gameInfoContainer);
  wordsButtonContainer.style.animationPlayState = 'running';
  

}
// Funcion que mestra la puntuacion del jugador
const displayScores = (gameID, levelID)=> {
  document.querySelector('.attempts').innerHTML = `Intentos: ${attempts}`;
  document.querySelector('.score').innerHTML = `Puntuacion: ${rightAnswers}`;
}

const checkOptionsSize = () => {
  let width = 40;
  let options = document.querySelectorAll('.option');
  options.forEach(elem => {
    width += (elem.clientWidth + 10);
  });
  let isBigger = width>=gameContainer.clientWidth ? true : false;
  if (isBigger) options.forEach(elem => {elem.style.fontSize = '1.5em'});
}
// Funcion que actualiza los botones
const displayOptions = (level, index) => {
  wordsButtonContainer.innerHTML = ``;
  words = getWords(level)[index];
    words.forEach(word => {
    wordsButtonContainer.innerHTML+=`<button class="option">${word}</button>`;
  });
  wordsButtonContainer.style.animationPlayState = 'running';
}

const displayNextOptions = () => {

  setTimeout(() => {
    setOfWords++; //Paso a la siguiente tanda de palabras
    if (setOfWords < 15) { //Mientras que sigan habiendo mas tandas...
    displayOptions(actualLevel, setOfWords);
    checkOptionsSize();
    correctWord = getCorrectWord(actualLevel, setOfWords);
    AUDIO_WORD = getAudio(correctWord); // Defino la palabra correcta del nivel
    assignEvents();
    } else if (setOfWords>=15){
      //de no se ser el caso, se pasa al siguiente nivel
      sendAndCheckScore(15 /*Deberia de ser el length, hasta que tenga el tercer set sera hardocdeado */, rightAnswers, wrongAnswers);
      setOfWords = 0;
    }
  }, 1000)
  
}

const checkLettersWidth = () => {
  let width = 0;
  document.querySelectorAll('.letra').forEach((letra, index, arr) => {
    if (arr[index+1]) {
      width+= letra.clientWidth+16;
    } else {
      width+=letra.clientWidth
    }
  })

  if (width < gameContainer.clientWidth) return;
  document.querySelector('.letras').classList.add('small-gap');
}

// Funcion que muestra las palabras
const displayUncompleteWord = (index) => {
  //Limpio el contenedor del nivel anterior
  if (document.querySelector('.center-image')!== null) gameContainer.removeChild(document.querySelector('.center-image'));
  wordsButtonContainer.innerHTML = '';
  wordsButtonContainer.classList.add('letras');


  // Selecciono la palabra que le pasamos por parametro
  let word = getWords(actualLevel)[index];
  //La spliteo
  let arrayWord =  [...word];

  //Array para guardar los indices aleatorios que seran de las letras adivinadas
  let randomIndexes = [];

  // Bucle que asegura que haya letras para adivinar
  if (actualLevel === 1) {
    while (randomIndexes.length !== 2){
      randomIndexes = [];
        arrayWord.forEach((elem, index) => {
        let random = Math.random();
        if (random <= 0.35) {
          randomIndexes.push(index);
        }
      })
    } 
  } else if (actualLevel === 2) {
    while (randomIndexes.length <=2 || randomIndexes.length > 3){
      randomIndexes = [];
        arrayWord.forEach((elem, index) => {
        let random = Math.random();
        if (random <= 0.35) {
          randomIndexes.push(index);
        }
      })
    } 
  } else if (actualLevel === 3) {
    while (randomIndexes.length <= 2 || randomIndexes.length>4){
      randomIndexes = [];
        arrayWord.forEach((elem, index) => {
        let random = Math.random();
        if (random <= 0.35) {
          randomIndexes.push(index);
        }
      })
    }
  }
  let i = 0;
  
  // Creacion de las letras a adivinar y no adivinadas
  for (let index = 0; index<arrayWord.length; index++) {
    let letra = document.createElement('input');
    letra.type = 'text';
    letra.setAttribute('maxlength', 1);
    letra.classList.add('letra');
    if (randomIndexes.includes(index)) {
      letra.classList.add('letra-empty');
      letra.classList.add(`empty${++i}`);
    }
    else {
      letra.setAttribute('value', arrayWord[index]);
      letra.setAttribute('readonly', 'readonly');
      letra.classList.add('focus-none');
    } 
    wordsButtonContainer.appendChild(letra);
  }

  gameContainer.appendChild(wordsButtonContainer);
  document.querySelector('.letras').classList.remove('small-gap');
  checkLettersWidth();
}

const displayNextUncompleteWord = () => {
  setTimeout(() => {
    setOfWords++;
    if (setOfWords < getWords(actualLevel).length) { // Si hay mas palabras, se muesyta la siguiente
      displayUncompleteWord(setOfWords);
      document.querySelector('.empty1').focus();
      displayScores(actualGame, actualLevel);
      displayImage(setOfWords);
    } else { // De no ser el caso, se envia la puntuacion y se chequea si se cumplen las condiciones para pasar de nivel
      sendAndCheckScore(getWords(actualLevel).length, rightAnswers, wrongAnswers);
    }
  }, 1000);
}

const colorWord = (word) => {
  const colors = ['lightseagreen', 'green', 'blue', 'yellow', 'pink', 'violet', 'orange'];
  colors.shuffle();
  let fragment = document.createDocumentFragment();
  let colorIndex = 0;
  for (letter of word) {
    if (colorIndex === colors.length -1) colorIndex = 0;
    let newLetter = document.createElement('FONT');
    newLetter.innerHTML = letter;
    newLetter.style.color = colors[colorIndex];
    colorIndex++;
    fragment.appendChild(newLetter);
  }
  return fragment;
}

const startGame = () => {
  const welcomeWord = '¡A JUGAR!';
  resetScores();
  const welcomeContainer = document.createElement('DIV');
  welcomeContainer.appendChild(colorWord(welcomeWord));
  welcomeContainer.classList.add('welcome-msg');
  gameContainer.appendChild(welcomeContainer);
  let startButtonOne = document.createElement('BUTTON');
  let startButtonTwo = document.createElement('BUTTON');
  startButtonOne.innerHTML = 'JUEGO DE OPCIONES';
  startButtonTwo.innerHTML = 'COMPLETA LA PALABRA';
  startButtonOne.classList.add('start');
  startButtonTwo.classList.add('start');
  startButtonTwo.classList.add('start-two');
  gameContainer.appendChild(startButtonOne);
  gameContainer.appendChild(startButtonTwo);
  startButtonOne.addEventListener('click', (ev) => {
    selectAudio.play();
    ev.target.style.display = 'none';
    gameContainer.style.animationName = 'backgroundLevel1';
    gameContainer.style.animationPlayState = 'running';
    gameContainer.removeChild(startButtonTwo);
    gameContainer.removeChild(welcomeContainer);
    setTimeout(() => {
      renderGameOne(1);
    }, 1050)
  });
  startButtonTwo.addEventListener('click', (ev) => {
    selectAudio.play();
    ev.target.style.display = 'none';
    gameContainer.style.animationName = 'backgroundLevel2';
    gameContainer.style.animationPlayState = 'running';
    gameContainer.removeChild(startButtonOne);
    gameContainer.removeChild(welcomeContainer);
    setTimeout(() => {
      renderGameTwo(1);
    }, 1050)
  })
}

// Funcion que renderiza el nivel 1
const renderGameOne = (level) => {
  actualGame = 1;
  actualLevel = level;
  correctWord = getCorrectWord(actualLevel, setOfWords);
  AUDIO_WORD = getAudio(correctWord);
  const audioButton = document.createElement('BUTTON');

  audioButton.classList.add('reproduce-btn')

  wordsButtonContainer.classList.add('options');
  displayScoresFirst(actualGame, actualLevel);
  displayOptions(actualLevel, setOfWords);
  gameContainer.appendChild(wordsButtonContainer);
  checkOptionsSize();
  gameContainer.appendChild(audioButton);
  audioButton.addEventListener('click', () => {
      AUDIO_WORD.play();
  })
  assignEvents();
}
let gameStarted = false;

//Funcion que renderiza imagenes
const displayImage = (index) => {
  let word = getWords(actualLevel)[index]
  let image = document.createElement('IMG');
  image.setAttribute('src', `../../media/media/${word}.png`);
  image.classList.add('center-image');
  gameContainer.appendChild(image);
}

const checkWord = (_word) => {
  attempts--;
  if (_word.toLowerCase() === getWords(actualLevel)[setOfWords]) {
    rightAnswers++;
    rightAnswerAudio.play();
    if (!validAttempts(attempts)) sendAndCheckScore(getWords(actualLevel).length, rightAnswers, wrongAnswers);
    else {
      displayNextUncompleteWord();
      displayScores(actualGame, actualLevel);
    }
  }
  else {
    wrongAnswerAudio.play();
    wrongAnswers++;
    gameContainer.innerHTML = '<div class="incor-msg">¡Vuelve a Intentarlo!</div>';
    if (validAttempts(attempts)) {
      setTimeout(() => {
        gameContainer.innerHTML = '';
        displayUncompleteWord(setOfWords);
        document.querySelector('.empty1').focus();
        displayImage(setOfWords);
        displayScoresFirst(actualGame, actualLevel);
      }, 1000);
    } else {
      sendAndCheckScore(getWords(actualLevel).length, rightAnswers, wrongAnswers);
    }
  }
}

const setAttempts = num => {
  attempts = num;
}

// Funcion que renderiza el nivel 2
const renderGameTwo = (level) => {
  actualGame = 2;
  actualLevel = level;
  displayUncompleteWord(setOfWords);
  setAttempts(getWords(level).length);
  document.querySelector('.empty1').focus();
  displayImage(setOfWords);
  displayScoresFirst(actualGame, level);
  //Agregado el evento que se desencadena cuando se apreta una letra
  if (!assignedKeyEvents) assignKeyEvents();
}

const checkSize = () => {
  if (window.innerWidth < 768) {
    if (document.querySelector('.incorrectScreen-message') === null) {
      const mess = document.createElement('P');
      mess.classList.add('incorrectScreen-message');
      mess.innerHTML = 'De momento, este juego solo puede ser visualizado con un iPad en adelante!';
      document.body.appendChild(mess);
    } 
    document.querySelector('.block-footer').style.display = 'none';
    document.querySelector('.absolute-footer').style.display = 'flex';
  } else {
    document.querySelector('.block-footer').style.display = 'flex';
    document.querySelector('.absolute-footer').style.display = 'none';
    if (document.querySelector('.incorrectScreen-message') !== null) document.body.removeChild(document.querySelector('.incorrectScreen-message')); 
    if (!gameStarted) {
      startGame();
      gameStarted = true;
    }
  }
}
checkSize();


window.addEventListener('resize', () => {
  checkSize();
})



// Eventos boton de Jugar

const addButtonAnimations = () => {
  const startButtonOne = document.querySelector('.start');
  if (startButtonOne !== null) {
  const initialColor = window.getComputedStyle(startButtonOne , null).getPropertyValue('border-color');
  
  const startButtonResetColors = () => {
    startButtonOne.style.border = '5px solid black';
  }
  startButtonOne.addEventListener('mouseenter', ()=> {
    hoverAudio.play();
    startButtonOne.style.animationPlayState = 'running';
  })
  
  startButtonOne.addEventListener('mouseleave', ()=> {
    startButtonOne.style.animation = 'none'
    setTimeout(function() {
      startButtonOne.style.webkitAnimation = '';
  }, 10);
  
  });
  }
  
  const startButtonTwo = document.querySelector('.start-two');
  if (startButtonTwo !== null) {
  startButtonTwo.addEventListener('mouseenter', ()=> {
    hoverAudio.play();
    startButtonTwo.style.animationPlayState = 'running';
  })
  
  startButtonTwo.addEventListener('mouseleave', ()=> {
    startButtonTwo.style.animation = 'none'
    setTimeout(function() {
      startButtonTwo.style.webkitAnimation = '';
  }, 10);
  
  });
  }
}

addButtonAnimations();

// renderLevel(1,1)
// Eventos al clickear los botones
