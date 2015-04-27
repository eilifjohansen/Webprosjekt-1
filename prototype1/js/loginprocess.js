//possible improvements: a way so that you can tell the user exactly what's wrong (username or password). Or maybe change span to give the message
//"combination does not exist"
//change alert box to less annoying message


function check(form) { /*function to check userid & password*/
	 /*the following code checkes whether the entered userid and password are matching*/
if(form.userid.value == "student" && form.pswrd.value == "111") {
	window.open("studentpage.html", "_self")/*opens the target page while Id & password matches*/
}
	else {
	 
		if(form.userid.value == "admin" && form.pswrd.value == "222") {
			window.open("adminpage.html", "_self")/*opens the target page while Id & password matches*/
		}

		else {
	 
			if(form.userid.value == "teacher" && form.pswrd.value == "333") {
				window.open("teacherpage.html", "_self")/*opens the target page while Id & password matches*/
			}

			else {
				$("span#errorFeedback").text("Password and user name combination does not exist");
			  
			}
		}
	}
}

