var count = 6;
/*$("#side_menu").height( $("section").height() );*/

function addTopic(topicNr) {

		var divider = $("<div></div>").addClass("nav_divider");
		var header = $("<h3></h3>").text("Topic " + topicNr +": ");
		var label = $("<span></span>").text("Topic Name: ")
		var field1 = $("<input></input>").addClass("topicInput");
		var field2 = $("<span></span>").text("Video time: ");
		var field3 = $("<input></input>").addClass("topicInput");
		var field4 = $("<span></span>").text("Slide nr: ");
		var field5 = $("<input></input>").addClass("topicInput");
		var field6 = $("<span></span>").text("Transcript nr: ");
		var field7 = $("<input></input>").addClass("topicInput");
		var field8 = $("<span></span>").text("Wikipage link: ");
		var field9 = $("<input></input>").addClass("topicInput");
			
			
		$(".moreFields").append(divider, header, label, field1, field2, field3, field4, field5, field6, field7, field8, field9);   
}


$("input[name=newTopic]").on("click", function(e){
	
		
		var c = count++;
		addTopic(c);
		updateLecture();
/*	$("#side_menu").height( $("section").height() ); */


});



//this section is to dynamically insert the new subject created into the side menu-------------------------------------

function updateLecture(){
	//get lecture name
	//place it into the list with append
	
	var lectureName = $(".lectureName").val(); 
	var newTopic = $("<li></li>").addClass(".subjectList");
	var divider = $("<div></div>").addClass("nav_divider");
	$(".end").append(divider, newTopic); 


}