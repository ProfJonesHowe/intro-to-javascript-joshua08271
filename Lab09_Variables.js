// Using let
let name = "JJ";
let age = 20;
let isStudent = true;

// NEW variables (string + number + boolean)
let favoriteGame = "War Thunder";
let hoursPlayed = 120;
let likesCoffee = false;

document.getElementById("demo1").innerHTML =
	"Name: " + name +
	"<br>Age: " + age +
	"<br>Student: " + isStudent;

var city = "Albany";			// Function-scoped
let state = "NY";			// Block-scoped
const country = "USA";		// Cannot be reassigned

document.getElementById("demo2").innerHTML =
	"Location: " + city + ", " + state + ", " + country;

// NEW output paragraph
document.getElementById("demo3").innerHTML =
	"Favorite Game: " + favoriteGame +
	"<br>Hours Played: " + hoursPlayed +
	"<br>Likes Coffee: " + likesCoffee;
