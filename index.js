var rand1 = Math.floor(Math.random()*6)+1;
var randimgsrc1= "./diceimg/" + rand1 + ".jpg";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randimgsrc1);

var rand2 = Math.floor(Math.random()*6)+1;
var randimgsrc2= "./diceimg/" + rand2 + ".jpg";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randimgsrc2);

if(rand1>rand2){
    document.querySelector("h1").innerHTML="Player ONE Won";
    document.querySelectorAll(".pl")[0].style.color = "#0858a2";
    document.querySelectorAll(".dice")[0].style.backgroundColor="aliceblue";
}
else if(rand1 == rand2){
    document.querySelector("h1").innerHTML="DRAW!!";
    document.querySelectorAll(".pl").forEach(element => element.style.color = "#740f0d");
    document.querySelector("body").style.backgroundColor="black";
}
else{
    document.querySelector("h1").innerHTML="Player TWO Won";
    document.querySelectorAll(".pl")[1].style.color = "#0858a2";
    document.querySelectorAll(".dice")[1].style.backgroundColor="aliceblue";
}