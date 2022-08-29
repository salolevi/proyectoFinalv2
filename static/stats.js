fetch('../../get-scores/1/1')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Opciones (Nivel 1)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(255,0,0, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameOneLevelOne');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true
    })
});

fetch('../../get-scores/1/2')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Opciones (Nivel 2)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(0,0,255, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameOneLevelTwo');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true,
    })
  });

  fetch('../../get-scores/1/3')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Opciones (Nivel 3)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(0,255,0, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameOneLevelThree');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true,
    })
})


fetch('../../get-scores/2/1')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Completar (Nivel 1)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(255,0,255, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameTwoLevelOne');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true,
    })
});

fetch('../../get-scores/2/2')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Completar (Nivel 2)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(0,255,255, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameTwoLevelTwo');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true,
    })
  });

  fetch('../../get-scores/2/3')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Juego de Completar (Nivel 3)',
        data: dataGame.scores,
        fill: false,
        borderColor: 'rgba(255,128, 20, .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General',
        data: dataGame.scoresAll,
        fill: false,
        borderColor: 'rgba(120 120 120 / .7)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1
      }
    ]
    };
    const ctx = document.getElementById('statsGameTwoLevelThree');
    const chartGameOne = new Chart(ctx, {
      type: 'line',
      data: info,
      responsive: true,
    })
  })

  fetch('../../get-scores/3/1')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgba(0 0 255 / .5)',
        tension: 0.1,
      },
      {
        label: 'Movimientos',
        data: dataGame.movements,
        fill: false,
        borderColor: 'rgba(255 0 0 / .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Movimientos',
        data: dataGame.movementsAll,
        fill: false,
        borderColor: 'rgba(40 40 40 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      }
    ]
    }
    const ctx = document.getElementById('statsGameThreeLevelOne');
    const chartGameThree = new Chart(ctx, {
      type: 'line',
      data: info,
    })
  })

  fetch('../../get-scores/3/2')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgba(0 255 255 / .5)',
        tension: 0.1,
      },
      {
        label: 'Movimientos',
        data: dataGame.movements,
        fill: false,
        borderColor: 'rgba(255 0 255 / .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Movimientos',
        data: dataGame.movementsAll,
        fill: false,
        borderColor: 'rgba(40 40 40 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      }
    ]
    }
    const ctx = document.getElementById('statsGameThreeLevelTwo');
    const chartGameThree = new Chart(ctx, {
      type: 'line',
      data: info,
    })
  })

  fetch('../../get-scores/3/3')
  .then(res => res.json())
  .then(data => {
    dataGame = data
    const labels = dataGame.dates
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgba(250 47 181 / .5)',
        tension: 0.1,
      },
      {
        label: 'Movimientos',
        data: dataGame.movements,
        fill: false,
        borderColor: 'rgb(49 8 123 /.5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Movimientos',
        data: dataGame.movementsAll,
        fill: false,
        borderColor: 'rgba(40 40 40 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      }
    ]
    }
    const ctx = document.getElementById('statsGameThreeLevelThree');
    const chartGameThree = new Chart(ctx, {
      type: 'line',
      data: info,
    })
  })

fetch('../../get-scores/4/1')
  .then(res => res.json())
  .then(data => {
    dataGame = data;
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgba(250 47 181 / .5)',
        tension: 0.1, 
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
    ]
    }

    const ctx = document.getElementById('statsGameFourLevelOne');
    const chartGameFour = new Chart(ctx, {
      type: 'line',
      data: info
    })
  })

  fetch('../../get-scores/4/2')
  .then(res => res.json())
  .then(data => {
    dataGame = data;
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgb(49 8 123 /.5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
    ]
    }

    const ctx = document.getElementById('statsGameFourLevelTwo');
    const chartGameFour = new Chart(ctx, {
      type: 'line',
      data: info
    })
  })

  fetch('../../get-scores/4/3')
  .then(res => res.json())
  .then(data => {
    dataGame = data;
    const labels = dataGame.dates;
    const info = {
      labels: labels,
      datasets: [{
        label: 'Segundos',
        data: dataGame.times,
        fill: false,
        borderColor: 'rgba(255 126 42 / .5)',
        tension: 0.1,
      },
      {
        label: 'Promedio General de Tiempo',
        data: dataGame.timesAll,
        fill: false,
        borderColor: 'rgba(128 128 128 / .5)',
        borderDash: [4, 3],
        pointStyle: 'line',
        tension: 0.1,
      },
    ]
    }

    const ctx = document.getElementById('statsGameFourLevelThree');
    const chartGameFour = new Chart(ctx, {
      type: 'line',
      data: info
    })
  })

const averageScore = document.querySelectorAll('.average-score');
// Delimitando puntuaciones de juego de dislexia
averageScore.forEach(elem => {
  if (+elem.innerHTML >= 7) elem.style.color = 'green';
  else if (+elem.innerHTML >= 5 && +elem.innerHTML < 7) elem.style.color = 'orange';
  else elem.style.color = 'red';
})

const averageTimeMovement = document.querySelectorAll('.average-time-movement');

averageTimeMovement.forEach(elem => {
  if (+elem.innerHTML<10) elem.style.color = 'green'
  else if (+elem.innerHTML>=10 && +elem.innerHTML<20) elem.style.color = 'orange'
  else elem.style.color = 'red'
})

const tabButtons = document.querySelectorAll('.tablink');

tabButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target !== document.querySelector('.tablink.active')) {
      document.querySelector('.contentStats-container').classList.remove('expanded');
      showMoreBtn.style.display = 'inline-block';
    };
    if (document.querySelector('.active')) document.querySelector('.active').classList.toggle('active');
    btn.classList.toggle('active');
    if (!checkIfExpanded()) {
      document.querySelector('.absolute-footer').style.display = 'flex';
      document.querySelector('.block-footer').style.display = 'none';
    }
  })
})

const dislexiaTabButton = document.querySelector('.dislexia-tab');
dislexiaTabButton.addEventListener('click', e => {
  let tabcontent = document.querySelectorAll('.tab-content').forEach(elem => {
    elem.style.display = 'none';
  });

  document.getElementById('dislexia').style.display = 'grid'
});

const logicOneTab = document.querySelector('.logica1-tab');
logicOneTab.addEventListener('click', e => {
  let tabcontent = document.querySelectorAll('.tab-content').forEach(elem => {
    elem.style.display = 'none';
  });

  document.getElementById('logica1').style.display = 'grid'
});

const logicTwoTab = document.querySelector('.logica2-tab');
logicTwoTab.addEventListener('click', e => {
  let tabcontent = document.querySelectorAll('.tab-content').forEach(elem => {
    elem.style.display = 'none';
  });

  document.getElementById('logica2').style.display = 'grid';
})

const buttonOne = document.querySelector('.btn-1');
buttonOne.addEventListener('click', e => {
  e.target.style.display = 'none';
  document.querySelectorAll('.grid-gameOne').forEach(elem => {elem.style.opacity = '1'});
})

const buttonTwo = document.querySelector('.btn-2');
buttonTwo.addEventListener('click', e => {
  e.target.style.display = 'none';
  document.querySelectorAll('.grid-gameTwo').forEach(elem => {elem.style.opacity = '1'});
})

const buttonThree = document.querySelector('.btn-3');
buttonThree.addEventListener('click', e => {
  e.target.style.display = 'none';
  document.querySelectorAll('.grid-gameThree').forEach(elem => {elem.style.opacity = '1'});
})

const buttonFour = document.querySelector('.btn-4');
buttonFour.addEventListener('click', e => {
  e.target.style.display = 'none';
  document.querySelectorAll('.grid-gameFour').forEach(elem => {elem.style.opacity = '1'});
})

const checkIfExpanded = () => {
  return document.querySelector('.content-container').classList.contains('expanded') ? true : false;
}

const showMoreBtn = document.querySelector('.show-more-btn');
showMoreBtn.addEventListener('mouseenter', () => {
  showMoreBtn.style.animationPlayState = 'running'
})

showMoreBtn.addEventListener('mouseleave', () => {
  showMoreBtn.style.animation = 'none';
  setTimeout(() => {
    showMoreBtn.style.animation = '';
  }, 10);
})

showMoreBtn.addEventListener('click', () => {
  showMoreBtn.style.display = 'none';
  document.querySelector('.contentStats-container').classList.add('expanded');
  document.querySelector('.absolute-footer').style.display = 'none';
  document.querySelector('.block-footer').style.display = 'flex';
})

dislexiaTabButton.click();

if (!checkIfExpanded()) {
  document.querySelector('.absolute-footer').style.display = 'flex';
  document.querySelector('.block-footer').style.display = 'none';
}