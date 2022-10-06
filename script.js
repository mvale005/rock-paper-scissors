//global variables
let choiceArray= ["paper","rock","scissors"];
let pcScore = 0;
let personScore = 0;

// I'm putting the selector and createElement up here so it doesn't only shows your current choice and not a full list
let scoreBoxLeft = document.querySelector(".score-box-left");
let personChoiceDisplay = document.createElement("p");

//same for the computer choice
let scoreBoxRight = document.querySelector(".score-box-right");
let compChoiceDisplay = document.createElement("p");


//three button click events that will fire off personChoice method which returns
// the button the user selected
let rockBtn = document.getElementById("btn-rock");
 rockBtn.addEventListener('click',playRound);
 
let paperBtn = document.getElementById("btn-paper");
paperBtn.addEventListener('click',playRound);

let scissorsBtn = document.getElementById("btn-scissors");
scissorsBtn.addEventListener('click',playRound);

function playRound(e){

  if(pcScore==5 || personScore==5){
    if(pcScore>personScore){
      console.log("computer wins the title");
    }else if(personScore>pcScore){
      console.log("player wins the title");}
      else {console.log("wow, it was tie")}

    }

  
  let userValue = e.target.innerText.toLowerCase();
  upDateBoxLeft(userValue);
  let pcValue = getComputerChoice();      

  //check to see who won or if it's a tie

  let isTie = checkForTie(userValue,pcValue);
  if(isTie==true){
    pcScore++;personScore++;
    console.log("You both picked " +  userValue+ ", that's a tie!!");
    console.log("PC "+ pcScore + " person " + personScore)
    
  return;}

    let pcWon = didPCWin(userValue,pcValue);
    
    if (pcWon==true){pcScore++;
      console.log("Computer wins! pc "+ pcScore + " person " + personScore);console.log("");
      
    }else {personScore++;
      console.log("Player wins! pc " + pcScore + " person " + personScore);console.log("");
      }
}


function upDateBoxLeft(personChoice){
  console.log("Player chose " + personChoice);
  personChoiceDisplay.textContent = "";
  personChoiceDisplay.textContent += personChoice +"--" + " " + "score: "+ personScore;
  scoreBoxLeft.append(personChoiceDisplay);

}

function getComputerChoice(){
  let randNum = getRandomInt(3);
  let compChoice = choiceArray[randNum];
  console.log("Computer chose " + compChoice);
  upDateBoxRight(compChoice);
  return compChoice;
}

function upDateBoxRight(compChoice){

  compChoiceDisplay.textContent = "";
  compChoiceDisplay.textContent += compChoice +"--" + " " + "score: "+ pcScore;
  scoreBoxRight.appendChild(compChoiceDisplay);

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkForTie(pcChoice,personChoice){
  
  if(pcChoice == personChoice){
    
    console.log("");
    return true;
  
  }
}



function didPCWin(personChoice, pcChoice)
{
   let isTie = checkForTie(personChoice,pcChoice);

  if(isTie==true) return;
  if (pcChoice == "paper" && personChoice == "rock") return true;
  else if(pcChoice == "rock" && personChoice == "scissors") return true;
  else if (pcChoice == "scissors" && personChoice == "paper") return true;
  else return false;
  
  
  
}


 
 
//   count = count+1;
//   console.log("After round " + count + " - PC score = "+ pcScore + ", Player score = "+ personScore );
//   console.log("");

  // if(i<4){
  // personChoice = checkPersonChoice();
  // pcChoice= getComputerChoice();
  // }


//console.log("Final Score after round 5: PC score = "+ pcScore + ", Player score = "+ personScore);
 
// }
// }


