function showInnerHTML() {
	document.getElementById("output1").innerHTML = "innerHTML updated!";
	console.log("showInnerHTML() ran");
}

function useDocumentWrite() {
	document.write("document.write() ran. Refresh the page to go back.");
}

function showAlert() {
	alert("Alert fired!");
	console.log("showAlert() ran");
}

function showConsole() {
	console.log("This message is in the console.");
}

// NEW function for the NEW button
function showDateTime() {
	let now = new Date();
	document.getElementById("output2").innerHTML = "Right now: " + now.toString();
	console.log("showDateTime(): " + now.toISOString());
}
