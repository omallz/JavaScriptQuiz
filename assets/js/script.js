/* Generate Password Function */
function generatePassword() {

	var numChars = prompt("Enter a number between 8 and 128");
	var numCharsInt = parseInt(numChars);
	var pwTypes = 0;
	var passwordCharArr = []; // container for possible password characters based on your confirm selections
	var availPasswordCharArr = []; // container for the randomly chosen password characters
	
	if (numCharsInt >= 8 && numCharsInt <= 128) {
		var specChar = confirm("Would you like Special Characters in your password?");
			if (specChar) {
				var specCharBool = true;
				var pwTypes = pwTypes + 1;
				passwordCharArr.push("!", "#", "$", "%", "&", "+", "-", "*", "^", "~");
			} else {
				var specCharBool = false;
			}
		var intChar = confirm("Would you like Numbers in your password?");
			if (intChar) {
				var intCharBool = true;
				var pwTypes = pwTypes + 1;
				passwordCharArr.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
			} else {
				var intCharBool = false;
			}
		var lowChar = confirm("Would you like lower case characters in your password?");
			if (lowChar) {
				var lowCharBool = true;
				var pwTypes = pwTypes + 1;
				passwordCharArr.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
			} else {
				var lowCharBool = false;
			}
		var uppChar = confirm("Would you like upper case characters in your password?");
			if (uppChar) {
				var uppCharBool = true;
				var pwTypes = pwTypes + 1;
				passwordCharArr.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
			} else {
				var uppCharBool = false;
			}
			
		if (pwTypes >= 1) {
			for (i=0; i<numCharsInt; i++) {
				var randomValue = passwordCharArr[Math.floor(Math.random() * passwordCharArr.length)]; //gets random characters for the number of characters you wanted your password to be
				availPasswordCharArr.push(randomValue);
			}
			var passwordString = availPasswordCharArr.join(""); // Converts array to string with no comma seperator
			console.log("Total No. of pw types chosen: " + pwTypes);
			console.log(passwordString);
			document.getElementById("password").value = passwordString; // copy value to the text area for copyToClip
		} else {
			alert("Please select a password type to generate a password");
		}
	} else {
		alert("Please enter a number between 8 and 128.");
	}
}

/* Copy To Clipboard Function */
function copyToClip() {
	var textAreaField = document.getElementById("password");

	textAreaField.select()
	textAreaField.setSelectionRange(0,99999);
	document.execCommand("copy");

	if (textAreaField.value) {
		alert("Copied " + textAreaField.value + " to the clipboard");
	} else {
		alert("Generate a password then try again");
	}
}