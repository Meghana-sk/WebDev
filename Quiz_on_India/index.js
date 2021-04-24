var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.yellow("Do you know India better? Try the following quiz"));
console.log("*5 questions\n*you get +2 points for correct answer");
console.log(chalk.bold.green("-1 point if you get it incorrect"));
console.log("Lets BEGIN!!! ")
var userName = readlineSync.question(chalk.bgBlueBright("What is your name?\n"));

console.log(chalk.bgRed("Welcome",userName, "to the quiz on INDIA"))
console.log("*****************************************************")
var score = 0
var Leaderboard = [{name : "Nithin",Score :10},
                  {name : "Akanksha",Score : 8},
                  {name : "Raghavan",Score : 7}]

function play(question,answer,explanation){
  var userAnswer = readlineSync.question(question+"\n");
  if(answer === userAnswer){
    console.log(chalk.green("correct"));
    score = score + 2;
  }else{
    console.log(chalk.red("incorrect"))
    score = score - 1;
  }
  console.log(chalk.bgBlue.bold(explanation));
  console.log(chalk.bgRed("Your current score ",score),"\n","**************************************************")
}

var QuestionOne = {
  question : "Which Indian city is the capital of two states?\n a.Chennai \n b.Mumbai \n c.Chandigarh \n d.Kolkata \n enter [a..d]",
  answer : "c",
  explanation : "explanation : Chandigarh is the capital of states Punjab and Haryana"
}
var QuestionTwo = {
  question :"With how many countries India shares its border?\n a.6 \n b.7 \n c.9 \n d.10 \n enter [a..d]",
  answer : "b",
  explanation : "explanation : India shares borders with China, Pakistan, Bhutan, Myanmar, Afghanistan, Nepal and Bangladesh."
}
var QuestionThree = {
  question :"Which of these is not a river of India?\n a.Ganga \n b.Mekong \n c.Yamuna \n d.Chenab \n enter [a..d]",
  answer : "b",
  explanation : "explanation : The Mekong which is the world's twelfth longest river and the seventh longest in Asia begins on the Tibetan Plateau and runs through China, Myanmar, Thailand, Laos, Cambodia, and Vietnam before emptying into the South China Sea."
}

var QuestionFour = {
  question :"Which Indian city hosted first Kabaddi World Cup?\n a.Mumbai \n b.Chennai \n c.Benagluru \n d.Kolkata \n enter [a..d]",
  answer : "a",
  explanation : "explanation : 1st World Cup of Kabaddi was organised in 2004 at Mumbai (India), India won the First World Cup by beating Iran in the finals."
}

var QuestionFive = {
  question :"Which Indian president nicknamed as 'Missile Man' ?\n a.Kocheril Raman Narayanan \n b.Sarvepalli RadhaKrishnan \n c.Ram Nath Kovind \n d.A.P.J Abdul Kalam \n enter [a..d]",
  answer : "d",
  explanation : "explanation : India's Missile Man APJ Abdul Kalam. Kalam was the 11th president of India and known as the 'People's President' who was loved by most citizens"
}


var questionnaire = [QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive]

for(var i = 0;i < questionnaire.length;i++){
  play(questionnaire[i].question,questionnaire[i].answer,questionnaire[i].explanation);
}

console.log(chalk.bgBlue("Your final score : ",score),"\n")
var currentPlayer = {name : userName, Score : score}
Leaderboard.push(currentPlayer);
var temp = {};
for(var j = 0; j < Leaderboard.length - 1; j++){
  for(var k = j+1;k <  Leaderboard.length; k++){
    
  if( Leaderboard[j].Score  < Leaderboard[k].Score ){
    temp = Leaderboard[j];           
    Leaderboard[j] = Leaderboard[k];
    Leaderboard[k] = temp; 
  }
  }
}
console.log(chalk.bgRed("Leaderboard"))
for(var k = 0;k <  Leaderboard.length; k++){
  console.log(Leaderboard[k].name," : ",Leaderboard[k].Score,"\n")
}
console.log(chalk.underline.bgBlue("Thanks for playing!Feedbacks and suggestions are always welcome!Kindly share screenshots of your scores to @Meghana14sk on twitter"))