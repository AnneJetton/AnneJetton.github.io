
function validate(){
	error("remove", "")
	let isWarning = false;
	
	
	//check username
	let userCheck = RegExp("^([a-z]|[0-9]){4,12}$");
	
	if (document.getElementById("username").value === ""){
		//update warning red
		error("", "Please Enter a <span style='color: red'>Username</span>");
		isWarning = true;
	}
	else if(!userCheck.exec(document.getElementById("username").value)){
		//update warning orange
		error("", "Please Enter a valid <span style='color: orange'>Username</span>");
		isWarning = true;
	}
	
	
	//check email
	let emailCheck = RegExp(".*@.*(\\.edu|\\.org|\\.com|\\.net)&");
	
	if (document.getElementById("email").value === ""){
		//update warning red
		error("", "Please Enter a <span style='color: red'>Email</span>");
		isWarning = true;
	}
	else if(!emailCheck.exec(document.getElementById("email").value)){
		//update warning orange
		error("", "Please Enter a valid <span style='color: orange'>Email</span>");
		isWarning = true;
	}
	
	
	//check phone
	let phoneCheck = RegExp("(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)");
	
	if (document.getElementById("phoneNumber").value === ""){
		//update warning red
		error("", "Please Enter a <span style='color: red'>Phone Number</span>");
		isWarning = true;
	}
	else if(!phoneCheck.exec(document.getElementById("phoneNumber").value)){
		//update warning orange
		error("", "Please Enter a valid <span style='color: orange'>Phone Number</span>");
		isWarning = true;
	}
	
	
	//check password
	let passCheck = RegExp(".*(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*");
	
	if (document.getElementById("password").value === ""){
		//update warning red
		error("", "Please Enter a <span style='color: red'>Password</span>");
		isWarning = true;
	}
	else if(!passCheck.exec(document.getElementById("password").value)){
		//update warning orange
		error("", "Please Enter a valid <span style='color: orange'>Password</span>");
		isWarning = true;
	}
	
	
	//check Gender
	if(!document.getElementById("female").checked && !document.getElementById("male").checked && !document.getElementByID("other").checked){
		error("", "Please choose a <span style='color: red'>Gender</span>");
		isWarning = true;
	}
	
	
	//check Birthday
	if(document.getElementByID("month").value === "" || document.getElementById("day").value === "" ||document.getElementByID("year").value === ""){
		error("", "Please Enter a <span style='color: red'>Birthday</span>");
		isWarning = true;
	}
	
	
	//check music
	if(!document.getElementByID("pop").checked && !document.getElementByID("hiphop").checked && !document.getElementByID("jazz").checked && !document.getElementByID("rock").checked && !document.getElementByID("classical").checked && !document.getElementByID("country").checked){
		error("", "Please choose a favorite <span style='color: red'>music</span>");
		isWarning = true;
	}
	
	
	//check for password match confpassword
	if (!isWarning){
		if(document.getElementByID("password").value !== document.getElementByID("cPassowrd").value){
			alert("Password does not match.");
		}
		else{
			window.location.href = "index.html";
		}
	}
	
}


function months(){
	let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
	//addToSelectElement(document.getElementById('month'), months);
	for (item of months) {
		let x = document.createElement('option');
		x.textContent = item;
		x.value = item;
		document.getElementById('month').appendChild(x);
	}
}


function days(){
	let days = [];
	for(let i = 1; i <= 31, i++){
		days.push(i);
	}
	//addToSelectElement(document.getElementById('day'), days);
	for (item of days) {
		let x = document.createElement('option');
		x.textContent = item;
		x.value = item;
		document.getElementById('day').appendChild(x);
	}
}


function years(){
	let years = [];
	for(let i = 1970; i <= 2010, i++){
		years.push(i);
	}
	//addToSelectElement(document.getElementById('day'), days);
	for (item of years) {
		let x = document.createElement('option');
		x.textContent = item;
		x.value = item;
		document.getElementById('year').appendChild(x);
	}
}


function error(setting, message){
	let warning = document.getElementById('warnings-holder');
	
	if (setting === "remove"){
		if(warning.firstChild != null){
			warning.removeChild(warning.firstChild);
		}
	}
	else{
		let newMessage = document.createElement('p');
		newMessage.innerHTML = message;
		warning.appendChild(newMessage);
	}
}

months();
days();
years();
