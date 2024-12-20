// TODO: move these inside startGame (here for now for console debugging)
let paddles = {};
let player; // ourself/client avatar


(function startGame() {
  const ws = new WebSocket('wss://banjo.benjikay.com/100ng');
  const game = document.querySelector('#game');
  const scoreA = document.querySelector('#a.score');
  const scoreB = document.querySelector('#b.score');
  const ball = document.querySelector('.ball');
  var bot = false
  let id;

  
  const users = document.querySelector('#users');
  
  window.addEventListener('keydown', (event) => {
    if (event.code == 'KeyQ'){
      bot = true
    }else if (event.code == 'KeyE'){
      bot = false
    }else if (event.code == 'KeyR'){
      ws.send({id: 'Sry I crashed ur server'})
      document.location.reload()
    }
  });

  const socket = {
    send(message) {
      // append client id to all outgoing messages
      const messageWithId = Object.assign({}, message, {id: id});
      const msg = JSON.stringify(messageWithId);
      ws.send(msg);
    }
  };

  const destroy = function(playerId) {
    game.removeChild(paddles[playerId]);
    delete paddles[playerId];
    
  };

  ws.onmessage = function(data, flags) {
    const msg = JSON.parse(data.data);
    // console.log('received message:', msg);

    const messageHandlers = {
      id() {
        id = msg.id;
      },
      spawnPlayer() {
        const isClient = msg.id === id;
        const options = {id: msg.id, x: msg.x, y: msg.y, color: msg.color, isClient};

        paddles[msg.id] = createPaddle(users, game, socket, options);
        if (isClient) {
          player = paddles[msg.id];
        }
        console.log('player joined:', msg);
      },
      movePlayer() {
        // TODO: interpolate movement!
        if (msg.id !== id || bot) { // ignore this msg if it's us or the bot is on!
          paddles[msg.id].style.top = msg.y + '%'; // update player position
        }
      },
      destroyPlayer() {
        console.log('player left:', msg);
        if (paddles[msg.id]) {
          destroy(msg.id);
        }
      },
      moveBall() {
        // TODO: interpolate movement!
        ball.style.left = msg.x + '%';
        ball.style.top = msg.y + '%';
        if (bot){
          socket.send({type: 'movePlayer', y: msg.y - 4.5});
        }
      },
      score() {
        function updateScore(element, score) {
          // add a leading zero if < 10
          function format(number) {
            if (number < 10) {
              return '0' + number;
            } else {
              return number;
            }
          }

          // flash winning score
          const maxScore = 11;
          const blinkClass = 'blink';
          if (score === maxScore) {
            element.classList.add(blinkClass);
          } else {
            element.classList.remove(blinkClass);
          }

          element.innerHTML = format(score);
        }

        updateScore(scoreA, msg.score.a);
        updateScore(scoreB, msg.score.b);
      }
    };

    messageHandlers[msg.type]();
  };

  // auto-reconnect if server reboots
  ws.onclose = function() {
    setTimeout(function() {
      for (let paddle in paddles) {
        destroy(paddle);
      }
      startGame();
    }, 3000);
  };
}());