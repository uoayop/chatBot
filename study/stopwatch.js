var time = document.getElementById('time');
var startTime, timer;
var now, diff;

function start(){
    if (!startTime){
        startTime = new Date().getTime();
    }
    
    timer = window.setTimeout(increment, 10);
}

function increment(){
    now = new Date().getTime();
    diff = new Date(now - startTime);

    var min = diff.getMinutes();
    var sec = diff.getSeconds();
    var mili = Math.floor(diff.getMilliseconds() / 10);

    time.innerText = zero(min) + ":" + zero(sec) + ":" + zero(mili);
    
    start();
}

function stop(){
    clearTimeout(timer);
}

function init(){
    stop();
    time.innerText = "00:00:00";
    startTime = null;
}

function zero(num){
    return (num < 10? '0' + num : '' + num);
}