/* exported sendData */

function sendData() {
    //puts form values in variables
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var realm = document.getElementById("realm").value;
	var allClasses = document.getElementsByName('className');
	var className = "";
	var experience;
	for (var i = 0; i < allClasses.length; i++) {
		if (allClasses[i].checked === true) {
			className += allClasses[i].value + " ";
		}
	}
	if (document.getElementById('experience1').checked) {
		experience = document.getElementById("experience1").value;
	} else if (document.getElementById('experience2').checked) {
		experience = document.getElementById("experience2").value;
	} else {
		experience = '';
	}
	var rate = document.getElementById("rate").value;
	var message = document.getElementById("message").value;
	
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'username=' + username + '&email=' + email + '&password=' + password + '&realm=' + realm + '&class=' + className + '&experience=' + experience + '&rate=' + rate + '&message=' + message;
	if (username === '' || email === '') { //if username or email are empty does nothing
		Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please Fill Username and Email'
        })
	} else if (validForm() === false) { //if email is not ok exits function
		return false;
	} else {
		// if data is ok send to ajax.php
		$.ajax({
			type: "POST",
			url: "php/ajax.php",
			data: dataString,
			cache: false,
			success: function(html) {
				Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'New record created successfully'
                })
			}
		});
	}
	return false;
}

//valid email address + only asd_123.asd@domain.com
function validForm() {
	var emailAdr = document.contactForm.email.value;
	var atPos = emailAdr.lastIndexOf("@");
	var dotPos = emailAdr.lastIndexOf(".");
	var count = 0;
	var i;
	for (i = 0; i < emailAdr.length; i++) {
		if (i == atPos || i == dotPos) {
			count++;
			continue;
		}
		var char = emailAdr.charCodeAt(i);
		if (char == 46) {
			if (emailAdr.charCodeAt(i + 1) == 46) continue;
		}
		if (char == 95) {
			if (emailAdr.charCodeAt(i + 1) == 95) continue;
		}
		if (char > 47 && char < 58 || char > 94 && char < 123 || char == 46) {
			count++;
		}
	}

	if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= emailAdr.length || count != emailAdr.length) {
		Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please enter a valid e-mail address'
        })
		return false;
	}
}