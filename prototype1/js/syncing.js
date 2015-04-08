//all the arrays with the predefined values. synchronization happens between media elements based on this values, further down.
//remember to have video/audio formats for different browsers. have 3 different formats in a row on the html page, to display, and then a message if none is able  to be displayed: "Your browser doesnt support these 
//audio formats."

var videoArray[];
var pptArray[];
var transcriptArray[];
//wikipage syncing also? //two dimensional array with coordinates? or just two array. the coordinates on the page.

//in seconds
videoArray = {
	300,
	500,
	2000
};
videoArray[1] = 300;

//actually images not presentations
pptArray = {
	"imagepath/reference/name" //put the name into the right html object instead of the one already there. this changes the image/"slide"

}; 					

pptArray[1] = "imagepath/reference/name";

transcriptArray = {


};






if (2000) { //if the video is at 2000 sec, change the other media content to match that
	
	var el = getElementById("ppt element"); //he had used getElementById and not jquery
	el = pptArray[3]; //"slide2.jpg" 3 matches the videoArray position
	

	transcriptArray[];

}
