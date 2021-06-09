function enterkey() {
    if (window.event.keyCode == 13) {
         // 엔터키가 눌렸을 때 실행할 내용
         ordered();
    }
}

function ordered(){
    var input_message = document.getElementById('input-message');
    setBotImage();

    if ((input_message.value).indexOf('이름') > -1){
        setBotMessage('내 이름은 아리야 >.<');
        setBotImage('happy');
    }
    else if ((input_message.value).indexOf('안녕') > -1){
        setBotMessage('반가워!');
    }
    else if ((input_message.value).indexOf('눈부셔') > -1){
        setBotMessage('앗! 불 꺼줄게~!');
        brightness('OFF');
    }
    else if ((input_message.value).indexOf('어두워') > -1){
        setBotMessage('그래?! 불 켜줄게~!');
        brightness('ON');
    }
    else if ((input_message.value).indexOf('춤') > -1){
        setBotMessage('난 우울할 땐 힙합을 춰!');
        setBotImage('dance');
        DanceAnimate();
    }
    else if ((input_message.value.indexOf('멋져') > -1)){
        setBotMessage('헤헤 고마워~~ 🖤');
        setBotImage('happy');
    }
    else if ((input_message.value.indexOf('저리가') > -1)){
        setBotMessage('끙,, 알겠어,,');
        MoveAnimate();
        setBotImage('sad');
    }
    else if ((input_message.value.indexOf('돌아와') > -1)){
        setBotMessage('나 불렀어 ?!');
        BackAnimate();
        setBotImage('happy');
    }
    else{
        setBotMessage('무슨 말인지 모르겠어 ㅠㅡㅠ');
        setBotImage('sad');
        NodAnimate();
    }

    input_message.innerText = "";
    typing();
}

function setBotMessage(msg){
    var bot_message = document.getElementById('bot-message');
    bot_message.innerText = msg;
}

function brightness(order){
    var background = document.getElementsByTagName('body')[0];
    var input_message = document.getElementById('input-message');
    var bot_message = document.getElementById('bot-message');

    if (order === 'OFF'){
        background.style.backgroundColor = '#000';
        input_message.style.backgroundColor = '#323232';
        input_message.style.color = '#fff';
        bot_message.style.color = '#fff'
    }
    else{
        background.style.backgroundColor = '#fff';
        input_message.style.backgroundColor = '#fff';
        input_message.style.color = '#000';
        bot_message.style.color = '#000'
    }
}

function setBotImage(name){
    var target = document.getElementById('bot-image');
    if (name == null){
        target.src = './bot-image.png'; 
    }
    else{
        target.src = './bot-image-' + name + '.png'; 
    }
}
