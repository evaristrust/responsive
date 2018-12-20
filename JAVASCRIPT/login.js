window.onload = function(){


	document.getElementById("btn_register").onclick = function(event){

		event.preventDefault(); 
		var login = document.getElementById("login-form");
		// hide the login form and show the register form
		login.classList.remove("show"); 
		login.classList.add("hide");

		showElement("register-form");
	}

	document.getElementById("btn_login").onclick = function(event){

		event.preventDefault();
		var register = document.getElementById("register-form");
		// hide the register form and show the login form 
		register.classList.remove("show"); 
		register.classList.add("hide");

		showElement("login-form");
	}

function showElement(element_id){
	/*
	Show the element whose id is element_id
	*/
		var element = document.getElementById(element_id);
		
		element.classList.remove("hide"); 
		element.classList.add("show")
}
}

/*
Validate the login password
*/

function validate_login(){
var pLogin = document.getElementById("psw_l").value;
if(pLogin==null || pLogin==""){
    alert("Your password should never be empty");
    return false;
} else if(pLogin.length<8){
    alert("Your password should have at least eight characters");
    return false;
} else {
document.location = "index.html";
}
}

/*
Validate the register passwords
*/

function validate_register(){
var pRegister_1 = document.getElementById("pswd_1").value;
var pRegister_2 = document.getElementById("pswd_2").value;

if(pRegister_1==null || pRegister_1==""){
    alert("Your password would never be empty brother!");
    return false;
} else if(pRegister_1.length<8){
    alert("Your password should have at least eight characters");
    return false;
}
else if(pRegister_1!= pRegister_2){
 alert("The password1 and Password2 mismatch");
 return false;
} else {
showElement("login-form");  
}
}
