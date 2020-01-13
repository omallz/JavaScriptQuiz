function startQuiz() {

	var secondsLeft = questions.length * 15; // Number of questions * 15 seconds
	var timerInterval = setInterval(function() {
		document.getElementById("secondsremaining").innerHTML =  questions.length*15 + " seconds"; 
		secondsLeft--;
		document.getElementById("secondsremaining").innerHTML = secondsLeft + " seconds"; 
	
		if(secondsLeft === 0) {
		  clearInterval(timerInterval);
		  //alert("Time over!");
		  //window.location.replace("index.html");
		  
		} 
	  }, 1000);



	//var quizContainer = document.getElementById("quizcontainer");
	var quizHeading = document.getElementById("quizheading");
	quizHeading.innerHTML = questions[0].title;
	//quizContainer.remove();
	var numOfQuestions = questions[0].choices;
	var correctAnswer = questions[0].answer;
	
	for (i = 0; i < numOfQuestions.length; i++) {
		var li = document.createElement("li");
		var content = document.createTextNode(numOfQuestions[i]);
		var a = document.createElement("a");

		a.setAttribute("href", "#");
		a.appendChild(content);
		li.appendChild(a);
		document.getElementById("quizquestions").appendChild(li);

		li.addEventListener("click", function(e) {
			console.log(e.target);
			if (e.target.innerHTML == "strings") {
				alert("yup");
			} else {
				alert("nope");
				var secondsLeft = secondsLeft - 10;
				//set display?
			}
		});
	}
	console.log(correctAnswer);
}	

function checkAnswers() {
	//check if answer is correct
		
}

/* this gets back all the questions, which i dont need atm
function startQuiz() {
	var quizContainer = document.getElementById("quizcontainer");
	var quizHeading = document.getElementById("quizheading");
	quizHeading.innerHTML = questions[0].title;
	quizContainer.innerHTML = "Please select an answer from the following:";
	
	for (i=0;i<questions.length; i++) {

		var numOfQuestions = questions[i].choices;
		var correctAnswer = questions[i].answer;
		
		for (z = 0; z < numOfQuestions.length; z++) {
			var li = document.createElement("li");
			var content = document.createTextNode(numOfQuestions[z]);
			var a = document.createElement("a");
			a.setAttribute("href", "#");
			a.appendChild(content);
			li.appendChild(a);
			document.getElementById("quizquestions").appendChild(li);
		}
		console.log(correctAnswer);
	}
}
*/

/*

Information listed to user
Click Start quiz, takes you to question 1 ; time counts from 15 seconds times the amount of questions
If answer selected correct, proceed to next question. Add to score
if incorrect, say incorrect. Minus from score
Show score at end, allow to enter initials and save to local storage
allow clear of high scores


*/

