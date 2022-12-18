function validateForm() {
	
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var pw = document.getElementById("pw");
	var email = document.getElementById("mail");
	var fname = document.getElementById("fname");
	
    if (fname.value ==""||lname.value == "" || pw.value == "" || email.value == ""){
		
        alert("All fields must be filled out");
        return false;
    } 
	 else alert = function(){};
	return true;
	
}

function volume(){
	
	var play = document.getElementById("music");
	play.volume = 0.1;
	//play.load();
	
}

