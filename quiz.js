var prompt = require('prompt-sync')();

// var firstName = prompt ('What is your first name?');

// console.log('Bye' + firstName + '!'); 

// var answer;
// var correct = 10;
// var times = 0;

// while (answer !== correct) {
// 	answer = parseInt(prompt('What is your guess?'));
// 	times++;
// 	console.log(answer);
// 	if (answer > correct) {
// 		console.log('Lower!');
// 	} else if (answer < correct) {
// 		console.log('Higher');
// 	} else {
// 		console.log(times);
// 	}
// }

var questions = [
	{ 
 		text: "What does CSS stand for?",
 		answers: [
 			'Cuter Super Slugs',
 			'Crazy Science Sneakers',
 			'Cascading Style Sleeves',
 			'Cascading Style Sheets'
 		],
 		correct: 3
 	},
 	{
 		text: 'Which of the following is the child slector?',
 		answers: [
 			'+',
 			'>'
		],
 		correct: 1
 	}
 ];
 
 var answer;

// Loop over each question object.
 for (var i = 0; i < questions.length; i++) {
 	// Log out the question.
 	console.log(questions[i].text);
 	// Loop over each of the question's answers
 	for (var j = 0; j < questions[i].answers.length; j++) {
 		console.log(questions[i].answers[j])
 	}

 	answer = prompt('Enter your answer: ');

 	// determine if the answer entered is the correct answer
 }

 // give user their score