const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');



const startGame = () => {
  pipe.classList.add('pipe-animation');
  start.style.display = 'none';
  

}

const restartGame = () => {
  gameOver.style.display = 'none';
  pipe.style.left = '';
  pipe.style.right = '0';
  mario.src = './src/img/mario.gif';
  mario.style.width = '150px';
  mario.style.bottom = '0';
  
  
    
  
  
}

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');

  }, 800);
}

const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px', ' ')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      pipe.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './src/img/game-over.png';
      mario.style.width = '80px';
      mario.style.marginLeft = '50px';
      

      
      setTimeout('location.reload()',5000);
    
      
      
    }
  }, 10);
}

loop() 

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === ' '); {
      jump();
    }
  })
  
  document.addEventListener('touchstart', e => {
    if (e.touches.length); {
      jump();
    }
  })
  
  document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === 'Enter'); {
      startGame();
    }
  })
