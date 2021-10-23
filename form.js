
function validate(){
	error("remove", "")
	let isWarning = false;
	let errorString = ""
	
	
	//check username
	let userCheck = RegExp("^([a-z]|[0-9]){4,12}$");
	
	if (document.getElementById("username").value === ""){
		//update warning red
		errorString = errorString + "Please Enter a <span style='color: red'>Username</span> <br>";
		//error("", "Please Enter a <span style='color: red'>Username</span>");
		//error("", errorString)
		isWarning = true;
	}
	else if(!userCheck.exec(document.getElementById("username").value)){
		//update warning orange
		//error("", "Please Enter a valid <span style='color: orange'>Username</span>");
		errorString = errorString + "Please Enter a valid <span style='color: orange'>Username</span> <br>";
		isWarning = true;
	}
	
	
	//check email
	let emailCheck = RegExp(".*@.*(\\.edu|\\.org|\\.com|\\.net)$");
	
	if (document.getElementById("email").value === ""){
		//update warning red
		//error("", "Please Enter a <span style='color: red'>Email</span>");
		errorString = errorString + "Please Enter a <span style='color: red'>Email</span> <br>";
		isWarning = true;
	}
	else if(!emailCheck.exec(document.getElementById("email").value)){
		//update warning orange
		//error("", "Please Enter a valid <span style='color: orange'>Email</span>");
		errorString = errorString + "Please Enter a <span style='color: orange'>Email</span> <br>";
		isWarning = true;
	}
	
	
	//check phone
	let phoneCheck = RegExp("(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)");
	
	if (document.getElementById("phoneNumber").value === ""){
		//update warning red
		//error("", "Please Enter a <span style='color: red'>Phone Number</span>");
		errorString = errorString + "Please Enter a <span style='color: red'>Phone Number</span> <br>";
		isWarning = true;
	}
	else if(!phoneCheck.exec(document.getElementById("phoneNumber").value)){
		//update warning orange
		//error("", "Please Enter a valid <span style='color: orange'>Phone Number</span>");
		errorString = errorString + "Please Enter a <span style='color: orange'>Phone Number</span> <br>";
		isWarning = true;
	}
	
	
	//check password
	let passCheck = RegExp(".*(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*");
	
	if (document.getElementById("password").value === ""){
		//update warning red
		//error("", "Please Enter a <span style='color: red'>Password</span>");
		errorString = errorString + "Please Enter a <span style='color: red'>Password</span> <br>";
		isWarning = true;
	}
	else if(!passCheck.exec(document.getElementById("password").value)){
		//update warning orange
		//error("", "Please Enter a valid <span style='color: orange'>Password</span>");
		errorString = errorString + "Please Enter a valid <span style='color: orange'>Password</span> <br>";
		isWarning = true;
	}
	
	
	//check Gender
	if(!document.getElementById("female").checked && !document.getElementById("male").checked && !document.getElementById("other").checked){
		//error("", "Please choose a <span style='color: red'>Gender</span>");
		errorString = errorString + "Please choose a <span style='color: red'>Gender</span> <br>";
		isWarning = true;
	}
	
	
	//check Birthday
	if(document.getElementById("month").value === "none" || document.getElementById("day").value === "none" ||document.getElementById("year").value === "none"){
		//error("", "Please Enter a <span style='color: red'>Birthday</span>");
		errorString = errorString + "Please Enter a <span style='color: red'>Birthday</span> <br>";
		isWarning = true;
	}
	
	
	//check music
	if(!document.getElementById("pop").checked && !document.getElementById("hiphop").checked && !document.getElementById("jazz").checked && !document.getElementById("rock").checked && !document.getElementById("classical").checked && !document.getElementById("country").checked){
		//error("", "Please choose a favorite <span style='color: red'>music</span>");
		errorString = errorString + "Please choose a favorite <span style='color: red'>music</span> <br>";
		isWarning = true;
	}

	error("", errorString);
	
	
	//check for password match confpassword
	if (!isWarning){
		if(document.getElementById("password").value !== document.getElementById("cPassword").value){
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
	for (const item of months) {
		let x = document.createElement('option');
		x.textContent = item;
		x.value = item;
		document.getElementById('month').appendChild(x);
	}
}


function days(){
	let days = [];
	for(let i = 1; i <= 31; i++){
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
	for(let i = 1970; i <= 2010; i++){
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
	//let warning = document.getElementById('warning');
	let warning = document.getElementById("warningmessage")

	if (setting === "remove"){
		//if(warning.firstChild != null){
		//while(typeof warning.firstChild !== 'undefined'){
		//	warning.removeChild(warning.firstChild);
		if(warning.innerHTML !== ""){
			warning.innerHTML = "";
		}
	}
	else{
		//let newMessage = document.createElement('p');
		//newMessage.innerHTML = message;
		//warning.appendChild(newMessage);
		warning.innerHTML = message;
	}
}

months();
days();
years();
