function movie(t, y, s, q){
    this.t = t;
    this.y = y;
    this.s = s;
    this.q = q;
}

function settings(movie_obj){
    var title = document.getElementById('title');
    var year = document.getElementById('year');
    var still = document.getElementById('still');
    var quotes = document.getElementById('quotes');

    title.innerText = movie_obj.t;
    year.innerText = movie_obj.y;
    still.src = movie_obj.s;
    quotes.innerText = movie_obj.q;
}

function btn_toystory(){
    var toystory = new movie('토이스토리','(2019)','./img/toystory.jpeg', '"무한한 공간 저 너머로 🚀"');
    settings(toystory);
}

function btn_soul(){
    var soul = new movie('소울', '(2020)', './img/soul.jpeg', '"나는 내 삶의 모든 시간을 살아갈거야 🍀"');
    settings(soul);
}

function btn_lalaland(){
    var lalaland = new movie('라라랜드','(2016)', './img/lalaland.jpeg', '"People love what other people are passionate about. ✨"');
    settings(lalaland);
}

function btn_abouttime(){
    var abouttime = new movie('어바웃타임','(2013)','./img/abouttime.jpeg', '" Live life as if there were no second chance. 🕰"');
    settings(abouttime);
}

function btn_singstreet(){
    var singstreet = new movie('싱스트릿','(2016)', './img/singstreet.jpeg', '"절대 적당히 해선 안 돼. 알아들었어? 🥊"');
    settings(singstreet);
}