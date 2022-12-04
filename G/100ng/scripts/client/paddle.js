const createPaddle = function(users, game, socket, options) {
  const user = document.createElement('div');

  const paddle = document.createElement('div');
  paddle.style.left = options.x + '%';
  paddle.style.top = options.y + '%';
  paddle.classList.add('paddle');
  paddle.style.backgroundColor = options.color;
  game.appendChild(paddle);

  user.name = document.createElement('p');
  user.name.innerHTML = '--' + options.id;
  user.paddle = document.createElement('div');
  user.paddle.classList.add('paddle');
  user.paddle.style.backgroundColor = options.color;
  users.appendChild(user);
  user.appendChild(user.paddle);
  user.appendChild(user.name);

  // add mouse controls if this paddle is the one we (the player) are to control
  if (options.isClient) {
    let startY = 0;

    game.addEventListener('mousemove', function movePaddle(event) {
      let newY = event.clientY - startY;
      const maxY = game.offsetHeight - paddle.offsetHeight;
      newY = newY < 0 ? 0 : newY > maxY ? maxY : newY;
      paddle.style.top = newY;

      if (newY === 0) {
        startY = event.clientY;
      } else if (newY === maxY) {
        startY = event.clientY - maxY;
      }

      const percent = (newY / game.offsetHeight) * 100;
      // TODO: throttle movement!
      socket.send({type: 'movePlayer', y: percent});
    });
  }

  return paddle;
};