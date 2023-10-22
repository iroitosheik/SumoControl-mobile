var socket = io('http://localhost:3000');
socket.on('data', function (data) {
    log(data);
});

var alerted = false;

socket.on('battery', function (data) {
    var element = document.getElementById("battery_num");
    element.innerHTML = data.toString() + '%';

    var progress = document.getElementById("battery-value");
    progress.setAttribute("value", data);

});


/////////////////////////////////////:
  
//   $(document).ready(function() {
//   var moveLeft = function() {
//     console.log('Moving left!');
//     socket.emit('keydown', 'left');
//   };

//   var moveRight = function() {
//     console.log('Moving right!');
//     function right();
//   };

//   $('body').keydown(function(e) {
//     switch (e.keyCode) {
//       case 37:
//         moveLeft();
//         break;
//       case 39:
//         moveRight();
//         break;
//     }
//   });
  
//   $('#left-btn').click(moveLeft);
  
//   $('#right-btn').click(moveRight);
// });
  
///////////Mobile logs//////////////
function log(msg) {
  const container = document.getElementById("log");
  container.textContent = `${msg} \n${container.textContent}`;
}

///////////Mobile control//////////////

function startup() {
  const left = document.getElementById("left-btn");
  left.addEventListener("touchstart", leftStart);
  left.addEventListener("touchend", leftEnd);
  left.addEventListener("mousedown", leftStart);
  left.addEventListener("mouseup", leftEnd);
  log("⬅️ 👍");
  const right = document.getElementById("right-btn");
  right.addEventListener("touchstart", rightStart);
  right.addEventListener("touchend", rightEnd);
  right.addEventListener("mousedown", rightStart);
  right.addEventListener("mouseup", rightEnd);
  log("➡️ 👍");
  const up = document.getElementById("up-btn");
  up.addEventListener("touchstart", upStart);
  up.addEventListener("touchend", upEnd);
  up.addEventListener("mousedown", upStart);
  up.addEventListener("mouseup", upEnd);
  log("⬆️ 👍");
  const down = document.getElementById("down-btn");
  down.addEventListener("touchstart", downStart);
  down.addEventListener("touchend", downEnd);
  down.addEventListener("mousedown", downStart);
  down.addEventListener("mouseup", downEnd);
  log("⬇️ 👍");
}

document.addEventListener("DOMContentLoaded", startup);

function leftStart() {
    log('⬅️');
    socket.emit('keydown', 'left');}
function leftEnd() {
    log('⏹');
    socket.emit('keyup', 'left');}

function rightStart() {
    log('➡️');
    socket.emit('keydown', 'right');}
function rightEnd() {
    log('⏹');
    socket.emit('keyup', 'right');}

function upStart() {
    log('⬆️');
    socket.emit('keydown', 'forward');}
function upEnd() {
    log('⏹');
    socket.emit('keyup', 'forward');}

function downStart() {
    log('⬇️');
    socket.emit('keydown', 'backward');}
function downEnd() {
    log('⏹');
    socket.emit('keyup', 'backward');}


///////////////////////////////////////

/// TOOLBOX moves
function jsJumpFunction() {
    log("⤴️");
    socket.emit('action', 'jump');
}

function jsLongJumpFunction() {
    log("⏭");
    socket.emit('action', 'longJump');
}

function jsSpinFunction() {
    log("🤪");
    socket.emit('action', 'spin');
}

function jsSlowShakeFunction() {
    log("🧐");
    socket.emit('action', 'slowshake');
}

function jsMetronomeFunction() {
    log("😤");
    socket.emit('action', 'metronome');
}

function postureStanding() {
    log("😤");
    socket.emit('action', 'standing');
}

function postureJumper() {
    log("😤");
    socket.emit('action', 'jumper');
}

function postureKicker() {
    log("😤");
    socket.emit('action', 'kicker');
}

function tap() {
    log("😤");
    socket.emit('action', 'tap');
}

function ondulation() {
    log("😤");
    socket.emit('action', 'ondulation');
}

function spinJump() {
    log("🤘😎🤚");
    socket.emit('action', 'spinjump');
}

function spinToPosture() {
    log("😤");
    socket.emit('action', 'spintoposture');
}

function spiral() {
    log("😤");
    socket.emit('action', 'spiral');
}

function slalom() {
    log("😤");
    socket.emit('action', 'slalom');
}


/// MOVE with keyboard
document.onkeydown = function (e) {
    switch (e.keyCode) {
    case 69:
        socket.emit('action', 'spinjump');
        break;
    case 16:
        socket.emit('action', 'tap');
        break;
    case 27:
        socket.emit('action', 'stop');
        break;
    case 32:
        socket.emit('action', 'jump');
        break;
    case 37:
        socket.emit('keydown', 'left');
        break;
    case 38:
        socket.emit('keydown', 'forward');
        break;
    case 39:
        socket.emit('keydown', 'right');
        break;
    case 40:
        socket.emit('keydown', 'backward');
        break;
    }
};

document.onkeyup = function (e) {
    switch (e.keyCode) {
    case 37:
        socket.emit('keyup', 'left');
        break;
    case 38:
        socket.emit('keyup', 'forward');
        break;
    case 39:
        socket.emit('keyup', 'right');
        break;
    case 40:
        socket.emit('keyup', 'backward');
        break;
    }
};
