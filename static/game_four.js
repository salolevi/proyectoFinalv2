const getSymbols = () => {
  return [...games[actualGame].symbols];
}

const getGridDimensions = level => {
  if (level == 1) return games[actualGame].type_level1
  else if (level == 2) return games[actualGame].type_level2
  else if (level == 3) return games[actualGame].type_level3
  else {
    displayError();
  }
}

// Funcion que verifica si las cartas son iguales, de no serlo las da vuelta, de serlo da vuelta todas las que no hayan sido adivinadas.
// Si todas estan adivinadas, ejecuta el paso de nivel
const checkCards = () => {
  const cards = document.querySelectorAll('.descubierto:not(.guessed)');

  if (cards.length !== 2) return;
  const card1 = cards[0];
  const card2 = cards[1];

  if (card1.getAttribute('symbol') === card2.getAttribute('symbol')) {
    card1.classList.add('guessed');
    card2.classList.add('guessed');
  }
  removeDragEvents();
  if (allGuessed()) {// Evento cuando se adivinan todas
    scoreTimes.push(max-(+document.querySelector('.timer-num').innerHTML));
    clearInterval(actualInterval);
    sendScore();
    displayLevelPassed();
  } else { //Se vuelven a dar vuelta las cartas si no es el caso
    setTimeout(() => {
      rotateCards();
      document.querySelector('.guessed')
    }, 500);
  }
}

const allGuessed = () => {
  const guessedCards = document.querySelectorAll('.guessed');
  const allCards = document.querySelectorAll('.element');

  return guessedCards.length === allCards.length;
}

const rotateCards = () => {
  const ungessedCards = document.querySelectorAll('.descubierto:not(.guessed)');

  if (document.querySelector('.disable-drag-modal')) gameContainer.removeChild(document.querySelector('.disable-drag-modal'));

  ungessedCards.forEach(elem => {
    elem.classList.remove('descubierto');
  })
}

const addRotateEvents = () => {
  document.querySelectorAll('.element').forEach(elem => {
    elem.addEventListener('click', e => {
      e.target.classList.add('descubierto');
      checkCards();
    })
  })
}

const shuffleElements = level => {
  const symbols = getSymbols();
  symbols.shuffle();
  const [rows, columns] = getGridDimensions(level).split('x').map(str => +str);
  symbols.length = (rows*columns)/2;
  const duplicatedSymbols = [...symbols, ...symbols];
  console.log(duplicatedSymbols);
  duplicatedSymbols.shuffle();
 
  let rowString = '';
  for (let i = 0; i<rows; i++) {
    rowString+= ' 1fr';
  }
  let columnString = '';
  for (let i = 0; i< columns; i++) {
    columnString+= ' 1fr';
  }
  
  let styleStr = gameContainer.getAttribute('style');
  styleStr += `display:grid; grid-template-columns:${columnString}; grid-template-rows: ${rowString}`;
  console.log(styleStr);
  gameContainer.setAttribute('style', styleStr);
  let fragment = document.createDocumentFragment();
  duplicatedSymbols.forEach(symbolObject => {
    const { symbol, description } = symbolObject;
    const element = document.createElement('div');
    const content = document.createElement('div');
    element.classList.add('element');
    content.classList.add('element__content');
    content.innerHTML = symbol;
    element.setAttribute('symbol', description);
    element.appendChild(content);
    fragment.appendChild(element);
  });
  gameContainer.appendChild(fragment);
  startInterval(level);
}

const renderGameFour = level => {
  actualGame = 2;
  actualLevel = level;
  displayScoresFirst();
  shuffleElements(level);
  addRotateEvents();
  addMenuButton();
}

// document.querySelector('.start-two').addEventListener('click', e => {
//   gameContainer.innerHTML = ''
//   gameContainer.style.animationName = 'backgroundLevel1';
//   gameContainer.style.animationPlayState = 'running';
//   setTimeout(() => {
//     renderGameFour(1);
//   }, 1050);
// })



