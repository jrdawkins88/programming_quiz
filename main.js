var prompt = require('prompt-sync')();

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
 	},
 	{
 		text: "What does HTML stand for?",
 		answers: [
 			'Hipster Time Machine Liquid',
 			'Hyper Text Markup Language',
		],
		correct: 1
 	},
 	{
 		text: 'In HTML, What kind of information does the Head element contain ?',
 		answers: [
 			'Thought Bubbles',
 			'Meta Data',
 			'Web Memories',
 			'Hypertext Complexes'
		],
 		correct: 1
 	},
 	{
 		text: 'What is a set of rules, principles, and processes that govern the structure of HTML and CSS documents?',
 		answers: [
 			'Syntax',
 			'Emoji',
 			'bleeps',
 			'bloops'
		],
 		correct: 0
 	},
 ];

 var correct = 0;

 for (var i = 0; i < questions.length; i++) {
 	// Show the question text
 	console.log(questions[i].text);
 	// Show all of the answers
 	for (var j = 0; j < questions[i].answers.length; j++){
 		console.log(questions[i].answers[j]);
 	}
 	// Collect user input
 	var input = prompt();
 	// Determine if input is correct
	if (input === questions[i].answers[questions[i].correct]) {
		correct++;
		console.log("good jerb!");
 	} else {
 		console.log("You are wrong" + '..' + "womp" + '..' + " womp" + "(" + "The Correct answer is " + ":" + " " + questions[i].answers[questions[i].correct] + ")");
 	}
	

}

console.log('You got ' + correct / questions.length * 100 + '%' + ' correct!');
console.log('You are done!');
 