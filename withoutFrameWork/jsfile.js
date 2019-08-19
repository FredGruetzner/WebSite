
function email() {
  window.open('mailto:fred.gruetzner@gmail.com');
}

function gitHub() {
  //return window.location.href = "https://github.com/FredGruetzner?tab=repositories";
  window.open("https://github.com/FredGruetzner?tab=repositories");
}

function linkedIn() {
  window.open("https://www.linkedin.com/in/frederick-gruetzner");
  //return window.open("https://www.linkedin.com/in/frederick-gruetzner");
}

function showDate() {
	var time = new Date();
	document.getElementById("date").innerHTML = time;
}

function passWord() {
	var pass = new Array ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
				"K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
	var select = Math.floor(Math.random()* 52);
	document.getElementById("pword").innerHTML = pass[select];
}