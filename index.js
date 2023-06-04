//dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//result
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player-1 Wins 🏁";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player-2 Wins 🏁";
}

else{
    document.querySelector("h1").innerHTML = "Match Draw";
}