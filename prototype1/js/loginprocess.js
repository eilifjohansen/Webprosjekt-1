var teacherName = "teacher1";
var teacherPass = "password_teacher1";

var studentName = "student1";
var studentPass = "password_student1";

var adminName = "admin1";
var adminPass = "password_admin1";



//name validation and feedback
/*function validateName(){
	var nameField = $("input[name=fname]").val(); 
	console.log("dsad");
	if(nameField == teacherName) {		
		
		return true;
	}
	if(nameField == studentName){
		
		return true;
	}
	
	if(nameField == adminName){
		
		return true;
	}
	$("span#nameFeedback").text("Name doesn't exist.");
	
	var passwordField = $("input[name=lname]").val(); 
	
	if(passwordField == teacherPass) {		
		
		return true;
	}
	if(passwordField == studentPass){
		
		return true;
	}
	
	if(passwordField == adminPass){
		
		return true;
	}
	$("span#passwordFeedback").text("Password doesn't exist.");

	
return false;
} */

/*function validateStudent(){
var nameField = $("input[name=fname]").val(); 
	if (nameField == student1) {
	
	
	}
	if()


}
*/



//password validation and feedback
//function validatePassword (){
	
//}

 //validate studentvalidate teacher admin1
 // reutnr alle disew
  
  function validateName() {
    var nameField = $("input[name=fname]").val(); 
	if(nameField != studentName || nameField != studentName || nameField != studentName){
		$("span#nameFeedback").text("Name doesn't exist.");
		return false;
	}

	return true;
	}
	
validatePassword(){
	var passwordField = $("input[name=lname]").val();
	if(passwordField != studentPass || passwordField != adminPass || passwordField != teacherPass){
		$("span#passwordFeedback").text("Password doesn't exist.");
		return false;
	}
	return true;
}
  
  
 

$("form").on("submit", function(e){
	
	if(!validateForm()) {	//if false
		
		e.preventDefault();		//enter page thats apropriate//stop default behaviour, which is submission	
	
	} 

});
 
 /*if(validateForm() == true) {	//if true
		
		e.preventDefault();		//enter page thats apropriate//stop default behaviour, which is submission	
	
	} */

function validateForm(){ 
	return validateName() && validatePassword(); /*&& validateAdmin(); */
}


//2 variables, hardcode them, feedback if it fails so we can show that during the demonstration aswell
//change the method to POST, and text field to password field


//second student to show how the page might look different for 2 students?


//var enter = document.getElementById(submit knappen);
//event handler


/*javascript for logging in*/

//make into an array?