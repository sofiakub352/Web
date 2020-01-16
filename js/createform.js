var form = document.getElementById("contactForm");
var br = [];
var spanText = [];
                                                        //creates the form inputs
var labelUser = document.createElement("label");
labelUser.innerText = "Username";
labelUser.setAttribute("for", "username");
form.appendChild(labelUser);
var inputUser = document.createElement("input");
inputUser.type = "text";
inputUser.id = "username";
inputUser.name = "username";
inputUser.placeholder = "Your username..";
form.appendChild(inputUser);

var labelEmail = document.createElement("label");
labelEmail.innerText = "Email";
labelEmail.setAttribute("for", "email");
form.appendChild(labelEmail);
var inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Your email..";
form.appendChild(inputEmail);

var labelPass = document.createElement("label");
labelPass.innerText = "Password";
labelPass.setAttribute("for", "password");
form.appendChild(labelPass);
var inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.id = "password";
inputPass.name = "password";
inputPass.placeholder = "Your secret..";
form.appendChild(inputPass);

var labelRealm = document.createElement("label");
labelRealm.innerText = "Realm";
labelRealm.setAttribute("for", "realm");
form.appendChild(labelRealm);
var selectRealm = document.createElement("select");
selectRealm.id = "realm";
selectRealm.name = "realm";
form.appendChild(selectRealm);
var optionRealmList = [{                            //Creates object for select options
	value: "mirage-raceway",
	inner: "Mirage Raceway"
}, {
	value: "nethergarde-keep",
	inner: "Nethergarde Keep"
}, {
	value: "pyrewood-village",
	inner: "Pyrewood Village"
}, {
	value: "auberdine",
	inner: "Auberdine"
}, {
	value: "everlook",
	inner: "Everlook"
}, {
	value: "razorfen",
	inner: "Razorfen"
}, {
	value: "lakeshire",
	inner: "Lakeshire"
}];
var realm = document.getElementById("realm");
var optionRealm = [];
for (var i = 0; i < optionRealmList.length; i++) {
	optionRealm[i] = document.createElement("option");
	optionRealm[i].appendChild(document.createTextNode(optionRealmList[i].inner));
	optionRealm[i].value = optionRealmList[i].value;
	realm.appendChild(optionRealm[i]);
}

var labelClass = document.createElement("label");
labelClass.innerText = "Class";
form.appendChild(labelClass);
var classValueList = ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];
var checkboxClass = [];
for (var i = 0; i < classValueList.length; i++) {
	br.push(document.createElement("BR"));
	form.appendChild(br[br.length - 1]);
	checkboxClass[i] = document.createElement("input");
	checkboxClass[i].type = "checkbox";
	checkboxClass[i].name = "className";
	checkboxClass[i].value = classValueList[i];
	form.appendChild(checkboxClass[i]);
	spanText.push(document.createElement("SPAN"));
	spanText[spanText.length - 1].innerText = classValueList[i];
	form.appendChild(spanText[spanText.length - 1]);
}

br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);
var labelRadio = document.createElement("label");
labelRadio.innerText = "Experience";
labelRadio.setAttribute("for", "experience");
form.appendChild(labelRadio);
br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);
var inputRadio1 = document.createElement("input");
inputRadio1.type = "radio";
inputRadio1.id = "experience1";
inputRadio1.name = "experience";
inputRadio1.value = "New player";
inputRadio1.checked = "true";
form.appendChild(inputRadio1);
spanText.push(document.createElement("SPAN"));
spanText[spanText.length - 1].innerText = "New player";
form.appendChild(spanText[spanText.length - 1]);
br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);
var inputRadio2 = document.createElement("input");
inputRadio2.type = "radio";
inputRadio2.id = "experience2";
inputRadio2.name = "experience";
inputRadio2.value = "Old player";
form.appendChild(inputRadio2);
spanText.push(document.createElement("SPAN"));
spanText[spanText.length - 1].innerText = "Old player";
form.appendChild(spanText[spanText.length - 1]);
br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);

var labelRate = document.createElement("label");
labelRate.innerText = "Rate";
labelRate.setAttribute("for", "rate");
form.appendChild(labelRate);
br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);
spanText.push(document.createElement("SPAN"));
spanText[spanText.length - 1].innerText = "0 ";
form.appendChild(spanText[spanText.length - 1]);
var inputRate = document.createElement("input");
inputRate.type = "range";
inputRate.id = "rate";
inputRate.name = "rate";
inputRate.min = "0";
inputRate.max = "10";
form.appendChild(inputRate);
spanText.push(document.createElement("SPAN"));
spanText[spanText.length - 1].innerText = " 10";
form.appendChild(spanText[spanText.length - 1]);

br.push(document.createElement("BR"));
form.appendChild(br[br.length - 1]);
var labelMessage = document.createElement("label");
labelMessage.innerText = "Message";
labelMessage.setAttribute("for", "message");
form.appendChild(labelMessage);
var inputRate = document.createElement("TEXTAREA");
inputRate.id = "message";
inputRate.name = "message";
inputRate.placeholder = "Write something..";
inputRate.style = "height:100px";
form.appendChild(inputRate);

var inputSubmit = document.createElement("INPUT");
inputSubmit.type = "button";
inputSubmit.id = "submit";
inputSubmit.setAttribute("onclick", "sendData()");
inputSubmit.value = "Submit";
form.appendChild(inputSubmit);