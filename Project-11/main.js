// Grab values from the submitted form in the URL

// Cleans up and capitalizes the names of the animals

userInput='rock'
const getUserChoice=(userInput)=>{
  userInput = userInput.toLowerCase();
if (userInput == 'rock') {
  return userInput;
}else if (userInput==='paper') {
  return userInput;
}else if (userInput==='scissors') {
  return userInput;
}
else {
  console.log("incorrect choice");
}
}
const getComputerChoice=()=>{
  let num = Math.floor(Math.random()*2);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
const determineWinner=(userChoice, computerChoice)=>{
  if(userChoice==computerChoice){
    return("tie")
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'compute won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'compute won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'compute won';
    } else {
      return 'user won';
    }
  }
}
userChoice=getUserChoice(userInput)
computerChoice=getComputerChoice()
const playGame=()=>{
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
