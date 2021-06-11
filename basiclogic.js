function enterkey() {
    if (window.event.keyCode == 13) {
        // 엔터키가 눌렸을 때 실행할 내용
        ordered();
    }
}

function ordered() {
    var input_message = document.getElementById("input-message");
    setBotImage();
    json_check();

    input_message.focus();
}

function brightness(order) {
    var background = document.getElementsByTagName("body")[0];
    var input_message = document.getElementById("input-message");
    var bot_message = document.getElementById("bot-message");

    if (order === "OFF") {
        background.style.backgroundColor = "#000";
        input_message.style.backgroundColor = "#323232";
        input_message.style.color = "#fff";
        bot_message.style.color = "#fff";
    } else {
        background.style.backgroundColor = "#fff";
        input_message.style.backgroundColor = "#fff";
        input_message.style.color = "#000";
        bot_message.style.color = "#000";
    }
}

function setBotImage(name) {
    var target = document.getElementById("bot-image");
    if (!name) {
        target.src = "./bot-image.png";
    } else {
        target.src = "./bot-image-" + name + ".png";
    }
}
