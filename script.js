//global variables
let choiceArray= ["paper","rock","scissors"];
let count = 0;


function checkPersonChoice(){
  let input= prompt("Enter: paper, rock or scissors","");
let personChoice = input.toLowerCase();

for(let i= 0;i<choiceArray.length;i++) {
  if (personChoice == choiceArray[i]){
    return choiceArray[i];
  } 
}
console.log(input + " is not an option, try again");

}

function getComputerChoice(){
  let randNum = getRandomInt(3);
  let compChoice = choiceArray[randNum];
  console.log("The computer chose " + compChoice);
  return compChoice;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function playRound(pcChoice, personChoice){
 
let pcScore = 0;
let personScore = 0;
let i = 0;

for(i=0; i<5; i++){
    //tie logic
  if(pcChoice == personChoice){
    console.log("You chose " +  personChoice + ", that's a tie!!");
    pcScore++; personScore++;
  }

//pc win logic
   if (pcChoice == "paper" && personChoice == "rock") { 
   console.log("You chose " + personChoice + ", pc wins!"); 
   pcScore++;
   
   }else if(pcChoice == "rock" && personChoice == "scissors"){
   console.log("You chose " + personChoice + ", pc wins!");
   pcScore++;
   
   }else if(pcChoice == "scissors" && personChoice == "paper")
    { console.log("You chose " + personChoice + ", pc wins!");
	pcScore++;
  }
//player win logic
	 if (personChoice  == "paper" && pcChoice== "rock") { 
	  console.log("You chose " + personChoice + ", player wins!"); 
	  personScore++;
	   } else if (personChoice  == "rock" && pcChoice == "scissors"){ 
	   console.log("You chose " + personChoice + ", player wins!"); 
	   personScore++;
	   } else if(personChoice  == "scissors" && pcChoice == "paper"){ 
	   console.log("You chose " + personChoice + ", player wins!"); 
	   personScore++;
	  }
 
 
  count = count+1;
  console.log("After round " + count + " - PC score = "+ pcScore + ", Player score = "+ personScore );
  console.log("");

  if(i<4){
  personChoice = checkPersonChoice();
  pcChoice= getComputerChoice();
  }

}
console.log("Final Score after round 5: PC score = "+ pcScore + ", Player score = "+ personScore);
 
};

//this initilizes the game
function playGame(){
let value = checkPersonChoice();
let num = getComputerChoice();
playRound(num, value);
}

//calling playing game to start everything
playGame();