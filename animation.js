function DanceAnimate() {
  setTimeout(() => {
    light();
    var target = document.getElementById("bot-image");

    try {
      target.classList.add("dance");
    } catch (error) {
    } finally {
      setTimeout(() => {
        target.className = "";
        typing("어때?! 멋져?");
      }, 2500);
    }
  }, 1300);
}

function light() {
  var background = document.getElementsByTagName("body")[0];
  var lights = [
    "#ffe6e6",
    "#ffeecc",
    "#ffffcc",
    "#d9ffb3",
    "#cceeff",
    "#b3c6ff",
    "#e0ccff",
    "#ffe6ff",
  ];
  var lightingBool = false;
  var index = 0;

  if (lightingBool == false) {
    // 타이핑이 진행되지 않았다면
    lightingBool = true;
    var liInt = setInterval(lighting, 260); // 반복동작
  }

  function lighting() {
    if (index < lights.length) {
      // 타이핑될 텍스트 길이만큼 반복
      // 한글자씩 이어준다.
      background.style.backgroundColor = lights[index];
      index++;
    } else {
      clearInterval(liInt); //끝나면 반복종료
      background.style.backgroundColor = "#FFF";
    }
  }
}

function Animate(class_name) {
  var target = document.getElementById("bot-image");
  try {
    target.classList.add(class_name);
  } catch (error) {
  } finally {
    setTimeout(() => {
      target.className = "";
    }, 600);
  }
}

function MoveAnimate() {
  setTimeout(() => {
    var target = document.getElementById("bot-image");
    try {
      target.classList.add("goaway");
    } catch (error) {
    } finally {
      setTimeout(() => {
        target.style.opacity = "0";
        target.className = "";
      }, 1000);
    }
  }, 500);
}

function BackAnimate() {
  setTimeout(() => {
    var target = document.getElementById("bot-image");
    target.style.opacity = "1";
    try {
      target.classList.add("comeback");
    } catch (error) {
    } finally {
      setTimeout(() => {
        target.className = "";
        //   target.style.marginLeft = "0px";
      }, 1100);
    }
  }, 500);
}

function typing(str) {
  var bot_message = document.getElementById("bot-message");
  var typewriter = new Typewriter(bot_message, {
    loop: false,
    cursor: "",
  });

  typewriter.deleteAll().typeString(str).start();
}
