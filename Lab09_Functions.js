// Final Challenge: two variables (string vars)
let courseName = "Module 09";
let topic = "Intro to JavaScript";

console.log("Challenge vars:", courseName, topic);

function greetUser() {
	let name = document.getElementById("nameInput").value;
	let food = document.getElementById("foodInput").value;

	if (name.trim() === "") {
		name = "there";
	}
	if (food.trim() === "") {
		food = "something good";
	}

	let message = "Hey " + name + "! Welcome to JavaScript. " + food + " sounds good.";
	document.getElementById("greeting").innerHTML = message;

	console.log("greetUser():", { name, food });
}

function clearGreeting() {
	document.getElementById("nameInput").value = "";
	document.getElementById("foodInput").value = "";
	document.getElementById("greeting").innerHTML = "";
	console.log("clearGreeting(): cleared inputs + output");
}

// Final Challenge: new function + text output on page + console + new button already in HTML
function showChallenge() {
	let completed = true;	// boolean
	let points = 100;		// number

	let text =
		"Course: " + courseName +
		" | Topic: " + topic +
		" | Completed: " + completed +
		" | Points: " + points;

	document.getElementById("challengeText").innerHTML = text;
	console.log("showChallenge():", text);
}
