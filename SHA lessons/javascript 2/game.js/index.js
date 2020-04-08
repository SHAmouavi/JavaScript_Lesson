var totalClicks = 0;
var score1 = 0; 
var score2 = 0;
var score1Text = document.getElementById("score1");
var score2Text = document.getElementById("score2");
document.addEventListener('keydown', function(event) {
    //Left Key pressed
    if (event.keyCode == 37) {
        score1++; // same as score1 = score1 + 1
        totalClicks++;
        score1Text.innerHTML = score1;
        checkScore();
    }
    //Right key pressed
    else if (event.keyCode == 39) {
        score2++; // same as score1 = score1 + 1
        totalClicks++;
        score2Text.innerHTML = score2;
        checkScore();
    }
}, true);
function checkScore(){
    console.log(totalClicks);
    if(score1 > score2){
        score1Text.style.color = "green";
        score2Text.style.color = "red";
    } else {
        score2Text.style.color = "green";
        score1Text.style.color = "red";
    }
    if(totalClicks > 100){
        if(score1 > score2){
            alert("player 1 wins");
        } else {
            alert("player 2 wins");
        }
        totalClicks=0;
        score1 = 0;
        score2=0;
    }
}