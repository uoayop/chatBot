
function DanceAnimate(){
    setTimeout(() => {
        light();
        var target = document.getElementById('bot-image');

        try { 
            target.classList.add("dance");
        } catch (error) {
            
        } finally {
            setTimeout(() => {
                target.className = "";
                setBotMessage('어때?! 멋져?');
            }, 2500);
        }
    }, 1300);
    
}

function light(){
    var background = document.getElementsByTagName('body')[0];
    var lights = ['#ffe6e6', '#ffeecc', '#ffffcc', '#d9ffb3', '#cceeff',
                '#b3c6ff', '#e0ccff', '#ffe6ff'];
    var lightingBool = false;
    var index = 0;

    if (lightingBool == false){ // 타이핑이 진행되지 않았다면 
        lightingBool = true; 
        var liInt = setInterval(lighting,260); // 반복동작 
    } 

    function lighting(){ 
        if (index < lights.length){ // 타이핑될 텍스트 길이만큼 반복 
            // 한글자씩 이어준다. 
            background.style.backgroundColor =  lights[index];
            index++; 
        } else{ 
            clearInterval(liInt); //끝나면 반복종료 
            background.style.backgroundColor = '#FFF';
        }    
    }  
}

function NodAnimate(){
    var target = document.getElementById('bot-image');
    try { 
        target.classList.add("dontknow");
    } catch (error) {
        
    } finally {
        setTimeout(() => {
            target.className = "";
        }, 600);
    }
}

function MoveAnimate(){
    setTimeout(() => {
        var target = document.getElementById('bot-image');
        try { 
            target.classList.add("move");
        } catch (error) {
            
        } finally {
            setTimeout(() => {
                target.style.marginLeft = '2000px';
                target.className = "";
            }, 1000);
        }
    }, 500);
}

function BackAnimate(){
    setTimeout(() => {
        var target = document.getElementById('bot-image');
        try { 
            target.classList.add("back");
        } catch (error) {
            
        } finally {
            setTimeout(() => {
                target.style.marginLeft = '0px';
                target.className = "";
            }, 1000);
        }
    }, 500);
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

