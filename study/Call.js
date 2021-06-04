var phone = document.getElementsByClassName('phone')[0];
var calling_display = document.getElementsByClassName('calling-display')[0];
var call_in_display = document.getElementsByClassName('call-in-display')[0];
var call_count = document.getElementById('call-count');
var sec = 0;

function animate(){
    phone.style.animation = 'slidein 0.5s infinite alternate';
}

function animate_off(){
    phone.style.animation = 'none';
}

function increaseTime(){
    sec += 1;
    if (sec == 3){
        end_count();
        hangup();
    }
    else{
        start_count();
    }

    console.log(sec);
    call_count.innerText
    = String("00:" + String(sec >= 10 ? sec : "0" + String(sec)));
}

function start_count(){
    t = setTimeout(increaseTime,1000);
}

function end_count(){
    sec = 0;
    call_count.innerText = "00:00";
    clearTimeout(t);
}

function answer(){
    call_in_display.style.display = 'none';
    calling_display.style.display = 'flex';
    start_count();
    animate_off();
}

function hangup(){
    call_in_display.style.display = 'flex';
    calling_display.style.display = 'none';
    if (t){
        end_count();
    }
    animate();
}
