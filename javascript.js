function enterkey() {
    if (window.event.keyCode == 13) {
         // 엔터키가 눌렸을 때 실행할 내용
         ordered();
    }
}

function ordered(){
    console.log(this);
    var bot_message = document.getElementById('bot-message');
    var input_message = document.getElementById('input-message');

    if ((input_message.value).indexOf('이름') > -1){
        bot_message.innerText = '내 이름은 아리야 >.<';
    }
    else{
        bot_message.innerText = '무슨 말인지 모르겠어 ㅠㅡㅠ';
        animate();
    }

    input_message.innerText = '';
    typing();
}

function animate(){
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

