//You need to make simple quiz.

//Ask the users a few questions (>4), using prompt.
//If the answer is right add 10 points (for every right answers).
//If the answer is wrong or user clicked cancel - you don't add any points.
//When the user will answer all questions, show the result using alert (like: You have 30 points. You answered correctly for 3/10.).


//Some question for example:

//How much will 2+2?
//The sun rises in the east?
//How much will 5 / 0 be?
//What color is the sky?
//What is the correct answer to the ultimate question of life, the universe and all that. (42)

let points = 0;
let correctAnswers = 0;
let questions = 5;


let firstAnswer = +prompt('How much will 2*2');
console.log(firstAnswer);
if ( firstAnswer == 4 ) {
  points += 10;
  correctAnswers +=1;
} 


let secAnswer = prompt('Are you human?');
console.log(secAnswer);
if ( secAnswer === 'yes' || secAnswer === 'Yes' || secAnswer === 'YES') {
  points += 10;
  correctAnswers +=1;
} 


let thirdtAnswer = +prompt('How much will be 100 - 28?');
console.log(thirdtAnswer);
if ( thirdtAnswer == 72 ) {
  points += 10;
  correctAnswers +=1;
} 


let fourAnswer = prompt('Sky is blue?');
console.log(fourAnswer);

if ( fourAnswer === 'yes' || fourAnswer === 'Yes' || fourAnswer === 'YES') {
  points += 10;
  correctAnswers +=1;
} 


let fiveAnswer = prompt('How much will 50*3');
console.log(fiveAnswer);

if ( fiveAnswer == 150 ) {
  points += 10;
  correctAnswers +=1;
}


alert( `You have ${points} points. You answered correctly for ${correctAnswers}/${questions}`);
