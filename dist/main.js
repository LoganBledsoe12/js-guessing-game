function* guessingGame() {
// 	console.log(yield game.say('Hey there!'));
// 	console.log(yield game.say('Woah', 'This is cool'));
// 	console.log(yield game.ask('Woah', 'This is cool'));
// 	console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
// 	console.log(yield game.say('That\'s all folks!', 'THE END'));

// math.ceil(math.random()*100)

var userNumber;
var random= Math.ceil(Math.random()*100);
var chante = true;

console.log (Math.ceil(Math.random()*100));
do{

console.log(yield game.say('We are going to play a little game, get ready!'));
userNumber = yield game.ask('Try picking a number between 1-100');
console.log (userNumber) ; userNumber=parseInt(userNumber);
}

while(
 	userNumber<1 || userNumber>100 
)	
	console.log (userNumber) ; userNumber=parseInt(userNumber);

while(chante){
	userNumber=yield game.ask('Try picking a number between 1-100');
	userNumber=parseInt(userNumber);

	if (random > userNumber){
		console.log(yield game.say('Your number is too low'));

	}
	else if (random < userNumber){
		console.log(yield game.say('Your number is too high'));
	}
	else if (random===userNumber){
		console.log(yield game.say('Congrats, you got it!'));
		chante = false;
	}


}
	console.log(yield game.say('GAME OVER!'));






























}






