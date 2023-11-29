

var s1 = document.querySelector(".img1");
var s2 = document.querySelector(".img2");

var ms=200;

var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;

var sdice1 = "./images/dice" + dice1 + ".png";
var sdice2 = "./images/dice" + dice2 + ".png";

rolling();

setTimeout(function(){
    changeImage(s1, sdice1);
    changeImage(s2, sdice2);

    if (dice1 > dice2){
        document.querySelector("h1").textContent = "🚩Player 1 win";
    } 
    else if (dice1 < dice2){
        document.querySelector("h1").textContent = "Player 2 win🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }
}, ms*13)
    



function rolling(){
    
    for(var i=0; i<2; i++)
        start(i);

        
}

function start(i){
    
    setTimeout(function () {changeImages("1")} ,ms + i * ms * 6);
    setTimeout(function () {changeImages("2")} ,2*ms + i * ms * 6);
    setTimeout(function () {changeImages("3")} ,3*ms + i * ms * 6);
    setTimeout(function () {changeImages("4")} ,4*ms + i * ms * 6);
    setTimeout(function () {changeImages("5")} ,5*ms + i * ms * 6);
    setTimeout(function () {changeImages("6")} ,6*ms + i * ms * 6);
    
}

function changeImages(number){
    changeImage(s1,"./images/dice"+number+".png");
    changeImage(s2,"./images/dice"+number+".png");
}

function changeImage(s, source){
    s.setAttribute("src",source);
}




