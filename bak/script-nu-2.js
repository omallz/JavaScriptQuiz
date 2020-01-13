var secondsLeft = questions.length * 15; // Number of questions * 15 seconds
function setTime() {
  document.getElementById("secondsremaining").innerHTML =  questions.length * 15 + " seconds"; 
  var timerInterval = setInterval(function() {
    secondsLeft--;
    document.getElementById("secondsremaining").innerHTML = secondsLeft + " seconds"; 

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
	 // alert("Game over!");
	  //window.location.replace("index-nu.html");
    } 
  }, 1000);
}

function startQuiz() {
	//var quizContainer = document.getElementById("quizcontainer");
	//quizContainer.remove();
	//var quizHeading = document.getElementById("quizheading");

	// render question (first one)
	//var question = questions[0];
	
	//quizHeading.innerHTML = questions[0].title;
	//var numOfChoices = questions[0].choices;

	for (i = 0; i < questions.length; i++) {
		
		var li = document.createElement("li");
		var content = document.createTextNode(questions[i].choices);
		var a = document.createElement("a");
		// Push html to page
		a.setAttribute("href", "#");

		a.appendChild(content);
		li.appendChild(a);
		document.getElementById("quizquestions").appendChild(li);

		// Check if currently clicked target matches the answer frome questions.js
		li.addEventListener("click", function(e) {
			var resultMessage = document.getElementById("resultmessage");
			console.log(e.target);
			if (e.target.innerHTML == "strings,booleans,alerts,numbers") // (e.target.innerHTML == questions[i].answer) {
				secondsLeft = secondsLeft + 10;
				console.log(secondsLeft);
				resultMessage.innerHTML = "You are correct, plus 10 seconds!";
 			} else {
				secondsLeft = secondsLeft - 10;
				console.log(secondsLeft);
				resultMessage.innerHTML = "You are wrong, minus 10 seconds!";
 				//set display?
			}
		});
	}
}

/*
Information listed to user
Click Start quiz, takes you to question 1 ; time is equivalernt to 15 seconds times the amount of questions in the questions.js array
If answer selected correct, Add to score and clear the screen and replace with a new questions from the array
if incorrect, advise of this on screen and minus from score
Show score at end, allow to enter initials and save to local storage
allow clear of high scores
*/