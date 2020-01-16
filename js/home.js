/*exported showGallery, hideGallery, getServer, getFaction, getClass, getTime*/

setTimeout(function() { // popup help box after 3s on homepage
	Swal.fire({
		title: 'HELP',
		html: '<b>Press buttons for:</b><br>z/x/c - small/large/normal font for all paragraphs<br>v/b - red/black - color for all paragraphs<br>r - rotate planet<br>h - show this alert'
	});
}, 3000);

var change = 0;

function changeBtn() { // change onclick attribute of showHideBtn
	if (change === 0) {
		document.getElementById("showHideBtn").setAttribute("onclick", "showGallery()");
		change = 1;
		return;
	}
	if (change === 1) {
		document.getElementById("showHideBtn").setAttribute("onclick", "hideGallery()");
		change = 0;
	}
}

var images = [];

function hideGallery() { //put images in array and delete them
	var list = document.getElementById("showHideGallery");
	var img = list.lastElementChild;
	while (img) {
		images.push(img);
		list.removeChild(img);
		img = list.lastElementChild;
	}
	changeBtn();
}

function showGallery() { // get images from array and append them
	var list = document.getElementById("showHideGallery");
	var img;
	while (images[0]) {
		img = images.pop();
		list.appendChild(img);
	}
	changeBtn();
}

var deg = 1;

function rotatePlanet() { // creates the rotation of the planet
	planet.style.transform = "rotate(" + deg + "deg)";
	deg = (deg + 10) % 360;
}

var isRotating = 0;
var planetRotation;
var planet;

document.addEventListener('keypress', function(pressed) {
	if (pressed.key === 'r' && isRotating === 0) {
		planet = document.getElementById('planet');
		planetRotation = setInterval(rotatePlanet, 20); // set interval to rotate planet
		isRotating = 1;
	} else if (pressed.key === 'r' && isRotating === 1) {
		clearInterval(planetRotation); // clear interval to stop planet
		isRotating = 0;
	}
});

//create audio element
var audioDiv = document.getElementById("audioContainer");
var audioElement = document.createElement("AUDIO");
audioElement.setAttribute("src", "music/loginmusic.mp3");
audioElement.setAttribute("controls", "controls");
audioDiv.appendChild(audioElement);

// create video element
var videoDiv = document.getElementById("videoContainer");
var videoElement = document.createElement("VIDEO");
videoElement.setAttribute("src", "video/wow-trailer.mp4");
videoElement.setAttribute("controls", "controls");
videoDiv.appendChild(videoElement);


function getServer() { //generate random server name
	var servers = ["Mirage Raceway", "Nethergarde Keep", "Pyrewood Village", "Auberdine", "Everlook", "Razorfen", "Lakeshire"];
	var random = parseInt(Math.random() * 10);
	while (random > 6) {
		random = parseInt(Math.random() * 10);
	}
	document.getElementById("serverResult").innerHTML = servers[random];
}

function getFaction() { // generate random faction
	if (parseInt(Math.random() * 10) % 2 === 0) {
		document.getElementById("factionResult").innerHTML = 'Alliance';
	} else {
		document.getElementById("factionResult").innerHTML = 'Horde';
	}
}

function getClass() { // generate random class
	var classes = ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];
	var random = parseInt(Math.random() * 10);
	while (random === 9) {
		random = parseInt(Math.random() * 10);
	}
	document.getElementById("classResult").innerHTML = classes[random];
}

function getTime() { // get values from input and show total play time
	var hoursPerWeek = parseFloat(document.getElementById("hours").value),
		years = parseFloat(document.getElementById("years").value),
		totalTime;
	if (hoursPerWeek === 0 || years === 0) { // if values are 0 -> error
		Swal.fire({
			icon: 'error',
			title: 'Error...',
			text: 'Please enter valid hours and years.'
		});
		return;
	}
	if (Number.isNaN(hoursPerWeek) === true || Number.isNaN(years) === true) { // if values are not numbers -> error
		Swal.fire({
			icon: 'error',
			title: 'Error...',
			text: 'Please enter valid hours and years.'
		});
		return;
	}
	totalTime = 52.14 * years * hoursPerWeek;
	var result = "You've played a total of " + totalTime.toFixed(2) + " hours in the past " + years + " years.";
	document.getElementById("timeResult").innerHTML = result;
}