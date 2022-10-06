//global variables
let choiceArray = ["paper", "rock", "scissors"];
let pcScore = 0;
let personScore = 0;


// I'm putting the selector and createElement up here so it doesn't only shows your current choice and not a full list

let scoreBoxLeft = document.querySelector(".score-box-left");
let personChoiceDisplay = document.createElement("p");

//same for the computer choice
let scoreBoxRight = document.querySelector(".score-box-right");
let compChoiceDisplay = document.createElement("p");

//middle scoreboard to display how the games going

let scoreBoxMiddle = document.querySelector(".score-box-middle");
let middleBoxDisplay = document.createElement("p");


//three button click events that will fire off personChoice method which returns
// the button the user selected

let rockBtn = document.getElementById("btn-rock");
rockBtn.addEventListener('click', playRound);

let paperBtn = document.getElementById("btn-paper");
paperBtn.addEventListener('click', playRound);

let scissorsBtn = document.getElementById("btn-scissors");
scissorsBtn.addEventListener('click', playRound);

function playRound(e) {
  middleBoxDisplay.style.textAlign = "center";
  middleBoxDisplay.style.color = "black";
  let userValue = e.target.innerText.toLowerCase();
  let pcValue = getComputerChoice();

  //check to see who won or if it's a tie

  let isTie = checkForTie(userValue, pcValue);
  if (userValue == pcValue) {
    if(pcScore ==5 || personScore ==5){
    overallWinner(userValue,pcValue);
    return;
    }else {
    pcScore++; personScore++;
    middleBoxDisplay.textContent = " -- Tie -- ";
    
    scoreBoxMiddle.append(middleBoxDisplay);
    upDateBoxLeft(userValue.toUpperCase());
    upDateBoxRight(pcValue.toUpperCase());
    return;
  }
}

  let pcWon = didPCWin(userValue, pcValue);

  if (pcWon == true) {
    pcScore++;
    middleBoxDisplay.textContent = " -- Computer wins -- ";
     scoreBoxMiddle.append(middleBoxDisplay);

  } else {
    personScore++;
    middleBoxDisplay.textContent = " -- Player wins  -- ";
    scoreBoxMiddle.append(middleBoxDisplay);
  }
  if (overallWinner(userValue, pcValue) == true) {
    pcScore = 0; personScore = 0;

  } else {
    upDateBoxLeft(userValue.toUpperCase());
    upDateBoxRight(pcValue.toUpperCase());
  }
}

function overallWinner(userValue, pcValue) {
  if (pcScore >= 5 || personScore >= 5) {
    if (pcScore > personScore) {
        upDateBoxRight(pcValue);
        middleBoxDisplay.innerHTML = "Computer was first to 5" + "<br> <br>"  + "Computer wins, Game Over";
        middleBoxDisplay.style.color = "red";
        scoreBoxMiddle.append(middleBoxDisplay);

      return true;
 
    } else if (personScore > pcScore) {
      upDateBoxLeft(userValue);
      middleBoxDisplay.style.color = "green";
      middleBoxDisplay.innerHTML = "Player was first to 5" + "<br> <br>" + "Player wins, Game Over";
      scoreBoxMiddle.append(middleBoxDisplay);
      return true;

    }
    else {
      upDateBoxRight(pcValue);
      upDateBoxLeft(userValue);
      return true;
    }
  }
  return false;

}

function upDateBoxLeft(personChoice) {
  personChoiceDisplay.textContent = "";
  personChoiceDisplay.textContent += personChoice + " --" + " " + "Score: " + personScore;
  scoreBoxLeft.append(personChoiceDisplay);
}

function getComputerChoice() {
  let randNum = getRandomInt(3);
  let compChoice = choiceArray[randNum];
  //upDateBoxRight(compChoice);
  return compChoice;
}

function upDateBoxRight(compChoice) {
  compChoiceDisplay.textContent = "";
  compChoiceDisplay.textContent += compChoice + " --" + " " + "Score: " + pcScore;
  scoreBoxRight.appendChild(compChoiceDisplay);

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkForTie(pcChoice, personChoice) {

  if (pcChoice == personChoice) {
    return true;
  }
}

function didPCWin(personChoice, pcChoice) {
  let isTie = checkForTie(personChoice, pcChoice);

  if (isTie == true) return;
  if (pcChoice == "paper" && personChoice == "rock") return true;
  else if (pcChoice == "rock" && personChoice == "scissors") return true;
  else if (pcChoice == "scissors" && personChoice == "paper") return true;
  else return false;
}




