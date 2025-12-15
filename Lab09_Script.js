// Output in different ways
document.getElementById("demo").innerHTML = "This is written in JavaScript!";
console.log("Loaded index.html -> wrote to #demo");

// If you hate popups, comment this out
alert("Hello! Open the console too.");

function showOutputLink() {
	document.getElementById("demo").innerHTML = '<a href="output.html">Next Demo</a>';
	console.log("Button clicked -> inserted link to output.html");
}
