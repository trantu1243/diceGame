

var s1 = document.querySelector(".img1");
var s2 = document.querySelector(".img2");



    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;

    var sdice1 = "./images/dice" + dice1 + ".png";
    var sdice2 = "./images/dice" + dice2 + ".png";

    rolling();

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



function rolling(){
    
    for(var i=0; i<2; i++)
        start();

        
}

function start(){
    
    setTimeout(changeImages("1"),500);
    setTimeout(changeImages("2"),500);
    setTimeout(changeImages("3"),500);
    setTimeout(changeImages("4"),500);
    setTimeout(changeImages("5"),500);
    setTimeout(changeImages("6"),500);
    
}

function changeImages(number){
    changeImage(s1,"./images/dice"+number+".png");
    changeImage(s2,"./images/dice"+number+".png");
}

function changeImage(s, source){
    s.setAttribute("src",source);
}



