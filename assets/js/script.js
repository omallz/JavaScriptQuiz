var question = questions[0];
var title = questions[0].title;
var choices = questions[0].choices;
var secondsLeft = questions.length * 15; // Number of questions * 15 seconds

function startQuiz() {
	//var quizContainer = document.getElementById("quizcontainer");
	//quizContainer.remove();
	var quizHeading = document.getElementById("quizheading");
	quizHeading.innerHTML = title;

	for (i = 0; i < choices.length; i++) {
		// Define the elements to create
		var li = document.createElement("li");
		var content = document.createTextNode(choices[i]);
		var a = document.createElement("a");

		// Push elements to page
		a.setAttribute("href", "#");
		a.appendChild(content);
		li.appendChild(a);
		document.getElementById("quizquestions").appendChild(li);

		// Check if currently clicked target matches the answer from questions.js, needs refactor
		li.addEventListener("click", function(e) {
			var resultMessage = document.getElementById("resultmessage");
			if (e.target.innerHTML == questions[0].answer) {
				// Add to score and run function(??) to move to next question
				secondsLeft = secondsLeft + 10;
				resultMessage.innerHTML = "You are correct, plus 10 seconds!";
				nextQuestion();
			} else {
				// Subtract from score and return failure
				secondsLeft = secondsLeft - 10;
				resultMessage.innerHTML = "You are wrong, minus 10 seconds!";
			}
		});
	}
}

// Sets time based on user clicking correct/incorrect answer
function setTime() {
	document.getElementById("secondsremaining").innerHTML =  questions.length * 15 + " seconds"; 
	var timerInterval = setInterval(function() {
		secondsLeft--;
		document.getElementById("secondsremaining").innerHTML = secondsLeft + " seconds"; 

		if(secondsLeft <= 0) {
			clearInterval(timerInterval);
			alert("Game over!");
			window.location.replace("index.html");
		} 
	}, 1000);
}

// display the next question
function nextQuestion() {

	nextQuestions = questions[+1];
	nextTitle = questions[+1].title;
	nextChoices = questions[+1].choices;

	console.log(nextTitle);
	console.log(nextChoices);

	// index = questions.indexOf(questions);
	// nextItem = questions[index + 1];
	// console.log(nextItem);
}
nextQuestion();

/*

function questionCount() {
	for (j=0;j=questions.length;j++) {
		choices[i] = choices[i] + 1;
		console.log(question);
	}
} 

*/
