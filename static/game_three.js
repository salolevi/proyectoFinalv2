// "use strict";

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

const getImageUrl = fileName => {
  return `${window.location.protocol}//${window.location.host}/media/media/${fileName}`
}

const getAudioUrl = fileName => {
  return `${window.location.protocol}//${window.location.host}/media/audio/${fileName}`
}

const pushImageObjects = (destinationArray, wordArray, _type) => {
  for (let word of wordArray) {
    let parts = [];
    let prefix = word.split('.')[0]
    let extension = word.split('.')[1]
    for (let i = 0; i< (+_type[0])**2 ; i++) {
      parts.push(getImageUrl(`${prefix}${i+1}.${extension}`));
    }
  
    destinationArray.push({
      type: _type,
      parts: [...parts],
    })
  }
}

// Images for Reorganizing Game (3)
let images_game_three_level_one = [
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_camioneta1.jpg'),
      getImageUrl('logica_camioneta2.jpg'),
      getImageUrl('logica_camioneta3.jpg'),
      getImageUrl('logica_camioneta4.jpg'),
      getImageUrl('logica_camioneta5.jpg'),
      getImageUrl('logica_camioneta6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_auto1.jpg'),
      getImageUrl('logica_auto2.jpg'),
      getImageUrl('logica_auto3.jpg'),
      getImageUrl('logica_auto4.jpg'),
      getImageUrl('logica_auto5.jpg'),
      getImageUrl('logica_auto6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_jules1.jpg'),
      getImageUrl('logica_jules2.jpg'),
      getImageUrl('logica_jules3.jpg'),
      getImageUrl('logica_jules4.jpg'),
      getImageUrl('logica_jules5.jpg'),
      getImageUrl('logica_jules6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_panda1.jpg'),
      getImageUrl('logica_panda2.jpg'),
      getImageUrl('logica_panda3.jpg'),
      getImageUrl('logica_panda4.jpg'),
      getImageUrl('logica_panda5.jpg'),
      getImageUrl('logica_panda6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_simba1.jpg'),
      getImageUrl('logica_simba2.jpg'),
      getImageUrl('logica_simba3.jpg'),
      getImageUrl('logica_simba4.jpg'),
      getImageUrl('logica_simba5.jpg'),
      getImageUrl('logica_simba6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_ronaldo1.jpg'),
      getImageUrl('logica_ronaldo2.jpg'),
      getImageUrl('logica_ronaldo3.jpg'),
      getImageUrl('logica_ronaldo4.jpg'),
      getImageUrl('logica_ronaldo5.jpg'),
      getImageUrl('logica_ronaldo6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_monumental1.jpg'),
      getImageUrl('logica_monumental2.jpg'),
      getImageUrl('logica_monumental3.jpg'),
      getImageUrl('logica_monumental4.jpg'),
      getImageUrl('logica_monumental5.jpg'),
      getImageUrl('logica_monumental6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_piramide1.jpg'),
      getImageUrl('logica_piramide2.jpg'),
      getImageUrl('logica_piramide3.jpg'),
      getImageUrl('logica_piramide4.jpg'),
      getImageUrl('logica_piramide5.jpg'),
      getImageUrl('logica_piramide6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_manzana1.jpg'),
      getImageUrl('logica_manzana2.jpg'),
      getImageUrl('logica_manzana3.jpg'),
      getImageUrl('logica_manzana4.jpg'),
      getImageUrl('logica_manzana5.jpg'),
      getImageUrl('logica_manzana6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_monalisa1.jpg'),
      getImageUrl('logica_monalisa2.jpg'),
      getImageUrl('logica_monalisa3.jpg'),
      getImageUrl('logica_monalisa4.jpg'),
      getImageUrl('logica_monalisa5.jpg'),
      getImageUrl('logica_monalisa6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_joystick1.jpg'),
      getImageUrl('logica_joystick2.jpg'),
      getImageUrl('logica_joystick3.jpg'),
      getImageUrl('logica_joystick4.jpg'),
      getImageUrl('logica_joystick5.jpg'),
      getImageUrl('logica_joystick6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_banana1.jpg'),
      getImageUrl('logica_banana2.jpg'),
      getImageUrl('logica_banana3.jpg'),
      getImageUrl('logica_banana4.jpg'),
      getImageUrl('logica_banana5.jpg'),
      getImageUrl('logica_banana6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_tigre1.jpg'),
      getImageUrl('logica_tigre2.jpg'),
      getImageUrl('logica_tigre3.jpg'),
      getImageUrl('logica_tigre4.jpg'),
      getImageUrl('logica_tigre5.jpg'),
      getImageUrl('logica_tigre6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_doctor1.jpg'),
      getImageUrl('logica_doctor2.jpg'),
      getImageUrl('logica_doctor3.jpg'),
      getImageUrl('logica_doctor4.jpg'),
      getImageUrl('logica_doctor5.jpg'),
      getImageUrl('logica_doctor6.jpg'),
    ]
  },
  {
    type: '2x3',
    parts: [
      getImageUrl('logica_trex1.jpg'),
      getImageUrl('logica_trex2.jpg'),
      getImageUrl('logica_trex3.jpg'),
      getImageUrl('logica_trex4.jpg'),
      getImageUrl('logica_trex5.jpg'),
      getImageUrl('logica_trex6.jpg'),
    ]
  },
];

let images_game_three_level_two = [];

let images_game_three_level_three = [];

let wordImagesLevelTwo = [
  'logica_messi.jpg',
  'logica_lobo.jpg',
  'logica_guardiola.jpg',
  'logica_genio.jpg',
  'logica_bestia.jpg',
  'logica_styles.jpg',
  'logica_ironman.jpg',
  'logica_escudo.jpg',
  'logica_casa.jpg',
  'logica_rushmore.jpg',
  'logica_gon.png',
  'logica_pokebola.png',
  'logica_pikachu.png',
  'logica_gumball.jpg',
  'logica_einstein.jpg',
];

let wordImagesLevelThree = [
  'logica_gato.jpg',
  'logica_lima.jpg',
  'logica_tierra.jpg',
  'logica_spideykgb.jpg',
  'logica_rubik.jpg',
  'logica_oldman.jpg',
  'logica_astronauta.jpg',
  'logica_tarzan.jpg',
  'logica_triangulo.jpg',
  'logica_pentagono.png',
  'logica_sebastian.png',
  'logica_perfil.jpg',
  'logica_agua.jpg',
  'logica_arbol.jpg',
  'logica_kenai.jpg',
];

pushImageObjects(images_game_three_level_two, wordImagesLevelTwo, '3x3');
pushImageObjects(images_game_three_level_three, wordImagesLevelThree, '3x3');

// Array of symbols for Game 4
let symbols_game_four = [
  {
    symbol: '🦝',
    description: 'raccoon',
  }, 
  {
    symbol:'🐍',
    description: 'snake',
  },
  {
    symbol:'🦷',
    description: 'tooth',
  },
  {
    symbol: '🎄',
    description: 'tree',
  },
  {
    symbol: '🎃', 
    description: 'pumpkin',
  },
  {
    symbol: '🍟',
   description: 'fries',
  },
  {
    symbol: '🥓',
    description: 'bacon',
  },
  {
    symbol: '🏀',
    description: 'basketball',
  },
  {
    symbol: '🎷',
    description: 'sax',
  },
  {
    symbol: '⏰',
    description: 'clock',
  },
  {
    symbol: '🥐',
    description: 'croissant',
  },
  {
    symbol: '🥔',
    description: 'potato',
  },
  {
    symbol: '🛸',
    description: 'spaceship',
  },
  {
    symbol: '🌎',
    description: 'earth',
  },
  {
    symbol: '🐙',
    description: 'octopus',
  },
  {
    symbol: '🦋',
    description: 'butterfly',
  },
  {
    symbol: '⚡',
    description: 'lightning',
  },
  {
    symbol: '👻',
    description: 'snowflake',
  }
];

const games = [
  {
    game: 0,
    background : "../media/media/background_level0.jpg"
  },
  {
    game: 3,
    images_level1: [...images_game_three_level_one],
    images_level2: [...images_game_three_level_two],
    images_level3: [...images_game_three_level_three],
  },
  {
    game: 4,
    symbols: [...symbols_game_four],
    type_level1: '2x4',
    type_level2: '3x4',
    type_level3: '4x4',
  }
]

const wrongAnswerAudio = new Audio('../media/audio/wrong_answer.wav');
const rightAnswerAudio = new Audio('../media/audio/correct_answer.wav');
const hoverAudio = new Audio('../media/audio/hover-option.wav');
const selectAudio = new Audio('../media/audio/select-option.mp3');
const swapAudio = new Audio('../media/audio/swap.wav');

const gameContainer = document.querySelector('.game-container');

let actualGame; //muestra el juego actual
let actualLevel; //muestra el nivel actual en el que se encuentra el juego
let actualImage = 0; // indice global de imagenes para manejar el flujo de los niveles
let gameStarted = false; // variable global que permite que no se instancie mas de un juego a la vez
let draggingElem; // variable que se usa para el elemento que esta siendo arrastrado
let afterElement; // variable que se usa para el elemento en el que se suelta el arrastrado
let rightAnswers = 0;
let wrongAnswers = 0;
let actualInterval; //variable que uso para guardar el id del intervalo
let scoreTimes = []; // array de tiempos en el que se ordena la imagen (se usa para calcular el tiempo promedio)
let movementArray = [];
let max; // Tiempo maximo para ordenar una imagen
let movements = 0;

const csrftoken = getCookie('csrftoken');

const startInterval = (level) => {
  let i;
  if (level == 1) i = 30;
  else if (level == 2) i = 20;
  else i = 15;

  if (actualGame == 2) i += (wrongAnswers*10)
  max = i;
  updateTimer(i);
  actualInterval = setInterval(() => {
    updateTimer(--i);
    if (i<=5 && !document.querySelector('.timer-num').classList.contains('last50')) document.querySelector('.timer-num').classList.add('last50');
    if (i === 0) {
      removeDragEvents();
      const timesUp = document.createElement('p');
      timesUp.classList.add('times-up');
      timesUp.innerText = '¡Tiempo!'
      gameContainer.appendChild(timesUp);
      wrongAnswerAudio.play();
      wrongAnswers++;
      document.querySelector('.timer-num').classList.add('finished');
      clearInterval(actualInterval);
      if (actualGame == 1) {
        document.querySelectorAll('.image-part').forEach(elem => {
          elem.disabled = true;
        })
        setTimeout(() => {
          displayNextOptionsGameThree(actualLevel);
          gameContainer.removeChild(timesUp);
        }, 800);
      } else if (actualGame == 2) {
        scoreTimes.push(max-(+document.querySelector('.timer-num').innerHTML));
        displayGameOver();
      }
    }
  }, 1000);
}

const colorWord = (word) => {
  const colors = ['red', 'green', 'darkblue', 'gold', 'magenta', 'violet', 'orange'];
  colors.shuffle();
  let fragment = document.createDocumentFragment();
  let colorIndex = 0;
  for (let letter of word) {
    if (colorIndex === colors.length -1) colorIndex = 0;
    let newLetter = document.createElement('FONT');
    newLetter.innerHTML = letter;
    newLetter.style.color = colors[colorIndex];
    colorIndex++;
    fragment.appendChild(newLetter);
  }
  return fragment;
}

const sendScore = () => {
  let averageTime = scoreTimes.reduce((acc, curr) => acc+curr, 0)/scoreTimes.length;
  let averageMovements = movementArray.length !== 0 ? movementArray.reduce((acc, curr) => acc+curr)/movementArray.length : 0;
  $.ajax({
    url: `send-score`,
    headers: {'X-CSRFToken': csrftoken},
    mode: 'same-origin',
    method: 'POST',
    data: {
      game: games[actualGame].game,
      level: actualLevel,
      score: rightAnswers,
      avgTime: averageTime,
      avgMovements: averageMovements
    },
    dataType: 'application/json'
  }).done(res => {
    console.log(res);
  });
}

const getImages = (level) => {
  if (level == 1) {
    return games[actualGame].images_level1;
  } else if (level == 2) {
    return games[actualGame].images_level2;
  }
  else if (level == 3) {
    return games[actualGame].images_level3;
  }
}

const addMenuButton = () => {
  const menuButton = document.createElement('button');
  menuButton.classList.add('game-btn');
  menuButton.classList.add('menu-btn');
  menuButton.innerHTML = 'VOLVER AL INICIO';

  gameContainer.appendChild(menuButton);

  menuButton.addEventListener('click', e => {
    clearInterval(actualInterval);
    gameContainer.innerHTML = '';
    gameContainer.style.animation = 'none';
      setTimeout(() => {
        gameContainer.style.webkitAnimation = '';
      }, 10);
      gameContainer.style.display = 'flex';
      movementArray = [];
      resetScores();
      gameStarted = false;
      startGame();
      addButtonAnimations();
  });
}

const returnIndexFromUrl = (url) => {
  let reg = new RegExp('^[0-9]+$');
  let splited = url.split("/");
  let imageName = [...splited[splited.length-1]];
  let filteredName = imageName.filter(char => reg.test(char));
  return filteredName.join('');
}

const fillImage = (level,index) => {
  const images = getImages(level)
  const imageObject = images[index];
  const splitedImages = [...imageObject.parts];
  splitedImages.shuffle();
  document.querySelector('.timer-num').classList.remove('last50');
  document.querySelector('.timer-num').classList.remove('finished');
  const dimensions = {
    rows: +imageObject.type.split('x')[0],
    columns: +imageObject.type.split('x')[1]
  }
  let gameStyles = 'opacity: 1; animation-name: backgroundLevel1; animation-play-state: running;';
  // console.log(splitedImages);
  gameStyles += 'display: grid; align-items: unset; grid-template-columns:';
  for (let i = 0; i<dimensions.columns; i++) {
    gameStyles+= ' 1fr';
  }
  gameStyles+='; grid-template-rows:';

  for (let i = 0; i<dimensions.rows; i++) {
    gameStyles+= ' 1fr';
  }
  gameStyles+=';';
  gameContainer.setAttribute('style',gameStyles);

  let imageFragments = document.createDocumentFragment();
  for (let image of splitedImages) {
    let imagePart = document.createElement('DIV');
    // console.log(image);
    const pos = returnIndexFromUrl(image);
    // console.log(pos);
    imagePart.classList.add('image-part');
    imagePart.classList.add(`image-part${pos}`);
    imagePart.classList.add('draggable');
    imagePart.setAttribute('draggable', 'true');
    imagePart.style.backgroundImage = `url(${image})`;
    imageFragments.appendChild(imagePart);
  }

  gameContainer.appendChild(imageFragments);
  startInterval(level);
}

// const indexFromStyleUrl = (url) => {
//   console.log(url);
//   const arrayUrl = url.split('(');
//   const index = returnIndexFromUrl(arrayUrl);
//   return index;
// }

const checkOrder = () => {
  const images = document.querySelectorAll('.image-part');
  let condition = true;
  images.forEach((image, index) => {
    // console.log(image.classList.contains(`image-part${index+1}`));
    condition = condition && image.classList.contains(`image-part${index+1}`);
  })
  return condition;
}

const resetScores = () => {
  rightAnswers = 0;
  wrongAnswers = 0;
  actualImage = 0;
  scoreTimes = [];
}

const displayLevelPassed = () => {
  movementArray = [];
  setTimeout(() => {
    const audioLevelPassed = new Audio(getAudioUrl('level_completed.wav'));
    gameContainer.removeChild(document.querySelector('.scores-container'));

    if (actualLevel<=2) { // Si quedan niveles por jugar
      actualLevel++;
      // gameContainer.style.display = 'flex';
      // gameContainer.style.flexDirection = 'column';
      // gameContainer.style.alignItems = 'center';
      // gameContainer.style.justifyContent = 'center';
      // gameContainer.innerHTML = `<div class="level-passed">Superaste este nivel!</div><div class="score score-levelpassed">Puntuacion: ${rightAnswers}</div><button class="next-level">Siguiente Nivel</button>`;
      const levelPassedModal = document.createElement('div');
      levelPassedModal.classList.add('modal', 'appear-modal');
      levelPassedModal.innerHTML = `<div class="info-msg">Superaste este nivel!</div><button class="game-btn next-level">Siguiente Nivel</button>`
      audioLevelPassed.play();
      gameContainer.appendChild(levelPassedModal);
      document.querySelector('.next-level').addEventListener('click', () => {
        selectAudio.play();
        resetScores();
        gameContainer.removeChild(levelPassedModal);
        gameContainer.innerHTML = '';
        if (actualGame == 1) renderGameThree(actualLevel);
        else if (actualGame == 2) renderGameFour(actualLevel);
    })
    } else { // De no ser el caso, se termina el juevo
      displayGameCompleted();
    }
    }, 200);
}

const displayGameOver = () => {
  movementArray = [];
  setTimeout(() => {
    // gameContainer.style.display = 'flex';
    // gameContainer.style.flexDirection = 'column';
    // gameContainer.style.alignItems = 'center';
    // gameContainer.style.justifyContent = 'center';
    // gameContainer.innerHTML = `<div class="game-over">¡Vuelve a intentarlo!</div><div class="score">Puntuacion: ${rightAnswers}</div><div class="info-msg">Casi lo logras</div><button class="try-again">Volver a jugar</button>`;
    const audioGameOver = new Audio(getAudioUrl('game_over.wav'))
    audioGameOver.play();
    gameContainer.removeChild(document.querySelector('.scores-container'));
    const gameOverModal = document.createElement('div');
    gameOverModal.classList.add('modal', 'appear-modal');
    gameOverModal.innerHTML = `<div class="info-msg">¡Vuelve a intentarlo!</div><button class="game-btn try-again">Volver a jugar</button>`
    gameContainer.appendChild(gameOverModal);
    document.querySelector('.try-again').addEventListener('click', ()=> {
      selectAudio.play();
      gameContainer.removeChild(gameOverModal);
      gameContainer.innerHTML = '';
      if (actualGame == 1) {
        resetScores();
        renderGameThree(actualLevel);
      }
      else if (actualGame == 2) renderGameFour(actualLevel);
    })
  }, 200);
}

const displayGameCompleted = () => {
  gameContainer.innerHTML = '';
  const gameCompletedModal = document.createElement('div');
  gameCompletedModal.classList.add('modal', 'appear-modal');
  const message = '¡GRACIAS POR JUGAR!';
  const thankYouMessage = document.createElement('p');
  thankYouMessage.appendChild(colorWord(message));
  thankYouMessage.classList.add('gameCompleted-msg');
  gameCompletedModal.appendChild(thankYouMessage);
  gameCompletedModal.innerHTML += `<button class="game-btn menu">VOLVER AL MENU</button>`;
  gameContainer.appendChild(gameCompletedModal);
  document.querySelector('.menu').addEventListener('click', e => {
    selectAudio.play();
    document.querySelector('.menu').style.opacity = '0';
    document.querySelector('.gameCompleted-msg').style.animationPlayState = 'running';
    setTimeout(() => {
      gameCompletedModal.classList.remove('appear-modal');
      gameCompletedModal.classList.add('disappear-modal');
    }, 500);
    setTimeout(() => {
      gameContainer.removeChild(gameCompletedModal);
      gameContainer.style.animation = 'none';
      setTimeout(() => {
        gameContainer.style.webkitAnimation = '';
      }, 10);
      gameContainer.style.display = 'flex';
      movementArray = [];
      resetScores();
      gameStarted = false;
      startGame();
      addButtonAnimations();
    }, 1500)
  });
}

const gameThreePassed = (totalSets, rAnswers) => {
  return (rAnswers/totalSets >= 0.7);
}

const checkScores = (totalSets, rAnswers, wAnswers) => {
  if (actualGame == 1) {
    if (gameThreePassed(totalSets, rightAnswers)) displayLevelPassed();
    else displayGameOver();
  }
}

const displayNextOptionsGameThree = () => {
  if (!document.querySelector('.disable-drag-modal')) gameContainer.removeChild(document.querySelector('.disable-drag-modal'));
  movementArray.push(movements);
  movements = 0;
  scoreTimes.push(max-(+document.querySelector('.timer-num').innerHTML));
  
  actualImage++;
  setTimeout(() => {
    updateScores(rightAnswers);
    if (actualImage < getImages(actualLevel).length) {
        document.querySelectorAll('.image-part').forEach(elem => {
        gameContainer.removeChild(elem);
      })
        fillImage(actualLevel, actualImage);
        addDragEvents();
        addMenuButton();
    } else {
      sendScore();
      checkScores(getImages(actualLevel).length, rightAnswers, wrongAnswers);
    }
  }, 800);
}

// Seccion de funciones de dragEvents

const addDragEvents = () => {
  const draggables = document.querySelectorAll('.image-part');

  const getDragAfterElement = (x, y) => {
    return document.elementFromPoint(x,y)
  }
  
  draggables.forEach(elem => {
    elem.addEventListener('dragstart', (e) => {
      elem.classList.add('dragging');
    })

    elem.addEventListener('drop', e => {
      e.preventDefault();
      e.target.classList.remove('dragging');

    })
    
    elem.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
      document.querySelectorAll('.dragover').forEach(el => {
        el.classList.remove('dragover');
      })

      if (afterElement.classList.contains('image-part') && draggingElem!==afterElement){
        movements++;
        swapAudio.play();
        draggingUrl = styleDragging.backgroundImage;
        // console.log(typeof draggingUrl);
        afterUrl = styleAfterDragging.backgroundImage;
        const beforeIndex = returnIndexFromUrl(draggingUrl);
        const afterIndex = returnIndexFromUrl(afterUrl);
        draggingElem.classList.remove(`image-part${beforeIndex}`);
        draggingElem.classList.add(`image-part${afterIndex}`);
        afterElement.classList.remove(`image-part${afterIndex}`);
        afterElement.classList.add(`image-part${beforeIndex}`);
        // // console.log(`Donde empieza: ${draggingUrl}`);
        // // console.log(`Donde termina: ${afterUrl}`);
        draggingElem.style.backgroundImage = afterUrl;
        afterElement.style.backgroundImage = draggingUrl;
        afterElement.classList.remove('dragover');
        if (checkOrder()) {
          removeDragEvents();
          document.querySelectorAll('.image-part').forEach(elem => {
            elem.disabled = true;
          })
          rightAnswerAudio.play();
          rightAnswers++;
          clearInterval(actualInterval);
          displayNextOptionsGameThree();
        };
      }
    });

    elem.addEventListener('dragleave', e => {
      document.querySelectorAll('.dragover').forEach(el => {
        el.classList.remove('dragover');
      })
    })
  })
  
  gameContainer.addEventListener('dragover', e => {
    e.preventDefault();
    draggingElem = document.querySelector('.dragging');
    afterElement = getDragAfterElement(e.clientX, e.clientY);
    // console.log(afterElement);
    if (afterElement.classList.contains('image-part')) afterElement.classList.add('dragover');

    styleDragging = draggingElem.currentStyle || window.getComputedStyle(draggingElem, false);

    styleAfterDragging = afterElement.currentStyle || window.getComputedStyle(afterElement, false);
  })
}

const removeDragEvents = () => {
  const disableDragModal = document.createElement('div');
  disableDragModal.classList.add('modal' ,'disable-drag-modal');
  gameContainer.appendChild(disableDragModal);
}

const updateTimer = value => {
  document.querySelector('.timer-num').innerHTML = `${value}`;
}

const displayScoresFirst = () => {
  const scoresContainer = document.createElement('DIV');
  scoresContainer.classList.add('scores-container');
  scoresContainer.innerHTML = `<div class='score'>Puntuacion: ${rightAnswers}</div><div class="timer">Tiempo: <span class="timer-num"></span></div>`
  gameContainer.appendChild(scoresContainer);
}

const updateScores = (number) => {
  document.querySelector('.score').innerHTML = `Puntuacion: ${number}`;
}

const renderGameThree = (level) => {
  actualGame = 1;
  shuffleImagesGameThree();
  actualLevel = level;
  displayScoresFirst();
  fillImage(level, actualImage);
  addDragEvents();
  addMenuButton();
}

const shuffleImagesGameThree = () => {
  games[actualGame].images_level1.shuffle();
  games[actualGame].images_level2.shuffle();
  games[actualGame].images_level3.shuffle();
}

const startGame = () => {
  if (gameStarted) return;
  gameStarted = true;
  const welcomeWord = '¡A JUGAR!';
  
  const welcomeContainer = document.createElement('DIV');
  welcomeContainer.appendChild(colorWord(welcomeWord));
  welcomeContainer.classList.add('welcome-msg');
  gameContainer.appendChild(welcomeContainer);
  
  let startButtonOne = document.createElement('BUTTON');
  let startButtonTwo = document.createElement('BUTTON');
  startButtonOne.innerHTML = 'ORDENA LA IMAGEN';
  startButtonTwo.innerHTML = 'JUEGO DE MEMORIA';
  startButtonOne.classList.add('start');
  startButtonTwo.classList.add('start');
  startButtonTwo.classList.add('start-two');
  gameContainer.appendChild(startButtonOne);
  gameContainer.appendChild(startButtonTwo);
  startButtonOne.addEventListener('click', () => {
    selectAudio.play();
    gameContainer.innerHTML = '';
    gameContainer.style.animationName = 'backgroundLevel1';
    gameContainer.style.animationPlayState = 'running';
    setTimeout(() => {
      renderGameThree(1);
    }, 1050)
  });
  startButtonTwo.addEventListener('click', e => {
    gameContainer.innerHTML = ''
    gameContainer.style.animationName = 'backgroundLevel1';
    gameContainer.style.animationPlayState = 'running';
    setTimeout(() => {
      renderGameFour(1);
    }, 1050);
  })
}

const addButtonAnimations = () => {
  const startButtonOne = document.querySelector('.start');
  if (startButtonOne !== null) {
  
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

const checkSize = () => {
  if (window.innerWidth < 768) {
    const mess = document.querySelector('.msg-container');
    mess.classList.add('error-msg');
    mess.setAttribute('style', 'display:block; width: unset;')
    mess.innerHTML = 'De momento, este juego solo puede ser visualizado con un iPad en adelante!';
    gameContainer.style.opacity = '0';
  } else {
    gameContainer.style.opacity = '1';
    if (document.querySelector('.error-msg')) document.querySelector('.error-msg').style.display = 'none';
    if (!gameStarted) {
      startGame();
      addButtonAnimations();
      gameStarted = true;
    }
  }
}
checkSize();


window.addEventListener('resize', () => {
  checkSize();
})
