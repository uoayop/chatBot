function enterkey() {
    if (window.event.keyCode == 13) {
         // 엔터키가 눌렸을 때 실행할 내용
         ordered();
    }
}

function ordered(){
    var input_message = document.getElementById('input-message');
    
    if ((input_message.value).indexOf('이름') > -1){
        setBotMessage('내 이름은 아리야 >.<');
    }
    else if ((input_message.value).indexOf('눈부셔') > -1){
        setBotMessage('앗! 불 꺼줄게~!');
        brightness('OFF');
    }
    else if ((input_message.value).indexOf('어두워') > -1){
        setBotMessage('그래?! 불 켜줄게~!');
        brightness('ON');
    }
    else{
        setBotMessage('무슨 말인지 모르겠어 ㅠㅡㅠ');
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

function NodAnimate(){
    var target = document.getElementById('bot-image');
    if (target.classList.contains('dontknow')){
        target.classList.remove("dontknow");
    }
    target.classList.add("dontknow");
}

function typing(){
    var bot_message = document.getElementById('bot-message');
    
    var typingBool = false;
    var index=0; 
    var target = bot_message.innerText.split(""); // 타이핑될 텍스트를 가져와서 한글자씩 자른다.
    bot_message.innerText = '';

    var temp = '';

    if (typingBool == false){ // 타이핑이 진행되지 않았다면 
        typingBool = true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 

    function typing(){ 
        if (index < target.length){ // 타이핑될 텍스트 길이만큼 반복 
            temp += target[index]; // 한글자씩 이어준다. 
            bot_message.innerText = temp;
            index++; 
        } else{ 
            clearInterval(tyInt); //끝나면 반복종료 
        }    
    }  

}

