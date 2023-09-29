// strike button 
var strikeButton = document.querySelector("#strike")
// reset button 
var resetButton = document.querySelector("#reset")
// score tag 
var team1score_tag = document.getElementById("score-team1")
var team2score_tag = document.getElementById("score-team2")
// wicket tag 
 var team1Wicket_tag= document.getElementById("wicket-team1")
 var team2Wicket_tag= document.getElementById("wicket-team2")
// audio variable 
 var strikeAudio = new Audio("http://bit.ly/so-ball-hit")
 var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")
// variable to keep track of game 
 var team1score = 0
 var team2score = 0
 var team1Wicket = 0
 var team2Wicket = 0
 var team1BallsFaced = 0
 var team2BallsFaced = 0
 var turn = 1

 var possibleOutcomes = [0,1,2,3,4,6,"w"];
 strikeButton.addEventListener("click", strikeButtonClicked)
 function strikeButtonClicked(){

     // audio play 

     //pause the previous playing audio
     
     strikeAudio.pause()

     //brimg the time to 0
     strikeAudio.currentTime = 0; 
     strikeAudio.play()

 
     // choosing random value
     var randomness = Math.random();
     var random1 = randomness * possibleOutcomes.length;
     var randomIndex = Math.floor(random1);
     var randomValue = possibleOutcomes[randomIndex] ;

     //pak bating
     if(turn==2){
        team2BallsFaced++;
        var ball = document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`)
        ball.innerHTML = randomValue;

        if(randomValue=="w"){
            team2Wicket++;
        }else{
            team2score+=randomValue;
        }

        if(team2score > team1score || team2Wicket == 2 || team2BallsFaced == 6){
            turn = 3;
            setTimeout(()=>{
                gameOver();

            },100)
        }
        updateScore()
     }


     //india bating
     if(turn==1){
        team1BallsFaced++;
        var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`)
        ball.innerHTML = randomValue;
        // if random element is wicket then increase wicket count by 1 or just add that random value to total score of team-1
        if(randomValue=='w'){
            team1Wicket++;
        }else{
            team1score = team1score + randomValue;
        }
        if(team1BallsFaced == 6 || team1Wicket == 2){
            turn = 2;
        }
        updateScore()

     }
 }
 function updateScore(){
    team1score_tag.innerHTML = team1score;
    team1Wicket_tag.innerHTML = team1Wicket;
    team2score_tag.innerHTML = team2score;
    team2Wicket_tag.innerHTML = team2Wicket;
}

function gameOver(){
    gameOverAudio.play()
   if(team1score>team2score){
       alert("INDIA WINS")
   }else if(team1score<team2score){
       alert("PAK WINS")
   }else{
       alert("MATCH DRAW")
   }
   document.querySelectorAll(".ball").forEach(a=> {
    if(a.innerHTML==""){
        a.innerHTML= "X"
        a.style.backgroundColor="grey"
    }
    
   });
}
resetButton.addEventListener("click", resetFunction)
function resetFunction(){
window.location.reload()
}
   
   


