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
		   alert("Error wrong password or username")/*displays error message*/
		 }
	  }
    }
}


