
function addTopic() {

		var divider = $("<div></div>").addClass("nav_divider");
		var header = $("<h3></h3>").addClass("headerField");
		/*var label = $("<span></span>").text("Topic Name: ");
		var field1 = $("<input></input>");
		var field2 = $("<span></span>").text("Video time: ");
		var field3 = $("<input></input>");
		var field4 = $("<span></span>").text("Slide nr: ");
		var field5 = $("<input></input>");
		var field6 = $("<span></span>").text("Transcript nr: ");
		var field7 = $("<input></input>");
		var field8 = $("<span></span>").text("Wikipage nr: ");*/
	
			



		
				/*<input type="text" placeholder="" title="Time of occurrence in seconds" value=""> </input>,
				<span>Video time:</span>,
				<input type="text" placeholder=""  title="Time of occurrence in seconds" value=""> </input>,
				<span>Slide nr: </span>,
				<input type="text"> </input>,
				<span>Transcript nr:</span>		,	
				<input type="text"> </input>,	
				<span>Wikipage nr: </span>,
				<input type="text"> </input>
				</div>");*/
		/*var ting = $("form").clone();*/
		$(".moreFields").after(divider, header); /*, header, label, field1, field1, field2, field3, field4, field5, field6, field7, field8*/      // Insert new elements after 
}


$("input").on("click", function(e){
	

	
	addTopic();




});