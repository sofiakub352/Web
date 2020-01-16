var allPar = document.getElementsByTagName("p"),
	i;
for (i = 0; i < allPar.length; i++) {
	allPar[i].style.fontSize = localStorage.getItem("fontSize"); // get last font size change
	allPar[i].style.color = localStorage.getItem("fontColor"); // get last font color change
}

// change size/color for paragraphs
document.addEventListener('keypress', function(pressed) {
	if (pressed.key === 'z') {
		for (i = 0; i < allPar.length; i++) {
			allPar[i].style.fontSize = "10px"; // resize for all p
			localStorage.setItem("fontSize", "10px"); // remmeber size
		}
	}
	if (pressed.key === 'x') {
		for (i = 0; i < allPar.length; i++) {
			allPar[i].style.fontSize = "18px";
			localStorage.setItem("fontSize", "18px");
		}
	}
	if (pressed.key === 'c') {
		for (i = 0; i < allPar.length; i++) {
			allPar[i].style.fontSize = "initial";
			localStorage.setItem("fontSize", "initial");
		}
	}
	if (pressed.key === 'v') {
		for (i = 0; i < allPar.length; i++) {
			allPar[i].style.color = "red";
			localStorage.setItem("fontColor", "red");
		}
	}
	if (pressed.key === 'b') {
		for (i = 0; i < allPar.length; i++) {
			allPar[i].style.color = "black";
			localStorage.setItem("fontColor", "black");
		}
	}
	if (pressed.key === 'h') { // press h for help
		Swal.fire({
			title: 'HELP',
			html: '<b>Press buttons for:</b><br>z/x/c - small/large/normal font for all paragraphs<br>v/b - red/black - color for all paragraphs<br>r - rotate planet<br>h - show this alert'
		});
	}
});