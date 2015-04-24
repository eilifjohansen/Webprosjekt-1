var imageNum=0;
var wikiNum=0;
var transcriptNum=0;
var count=0;
var imageArray=new Array(); //bad and old method?
var VideoArray=new Array();
var wikiArray=new Array();
var transcriptArray=new Array();


//Image array
imageArray[0] = "img/slide1.PNG"
imageArray[1] = "img/slide2.PNG"
imageArray[2] = "img/slide3.PNG"
imageArray[3] = "img/slide4.PNG"
imageArray[4] = "img/slide5.PNG"

//Video array
VideoArray[0] = 0;
VideoArray[1] = 8;
VideoArray[2] = 23;
VideoArray[3] = 33;
VideoArray[4] = 58;

//Wiki pages array
wikiArray[0] = "https://no.wikipedia.org/wiki/JavaScript";
wikiArray[1] = "http://en.wikipedia.org/wiki/Dataflow_programming";
wikiArray[2] = "http://en.wikipedia.org/wiki/Regular_expression";
wikiArray[3] = "http://en.wikipedia.org/wiki/Functional_programming";
wikiArray[4] = "http://en.wikipedia.org/wiki/Event_%28computing%29";

//Audio transcript array
transcriptArray[0] = "audio_transcript/transcript1.txt";
transcriptArray[1] = "audio_transcript/transcript2.txt";
transcriptArray[2] = "audio_transcript/transcript3.txt";
transcriptArray[3] = "audio_transcript/transcript4.txt";
transcriptArray[4] = "audio_transcript/transcript5.txt";


//Switches to the next image in the array
function switchImage()
{
	if(imageNum<imageArray.length-1)
	{
		imageNum=imageNum+1;
		if(imageNum<imageArray.length) 
		document.getElementById('defaultSlide').src=imageArray[imageNum];
		
	}
}


//Switches to the previous image in the array
function prevImage()
{
	if(imageNum>0)
	{
		imageNum=imageNum-1;
		if(imageNum>=0)
		document.getElementById('defaultSlide').src=imageArray[imageNum];
	}
}


//Switches to the next video in the array
function next_event()
{
	if(count<VideoArray.length-1)
	{
		count+=1;
		//parent.video.location.href = VideoArray[count];
		var video = document.getElementById("defaultVideo");
 		video.currentTime = VideoArray[count];
	}
}


//Switch to the previous video in the array
function prev_event()
{
	if(count>0)
	{
		count-=1;
		//parent.video.location.href = VideoArray[count];
		var video = document.getElementById("defaultVideo");
 		video.currentTime = VideoArray[count];
		
	}
}

//Switches to the next wikipage in the array
function switchWiki()
{
	if(wikiNum<wikiArray.length-1)
	{
		wikiNum=wikiNum+1;
		if(wikiNum<wikiArray.length) 
		document.getElementById('defaultWiki').src=wikiArray[wikiNum];
		
	}
}


//Switches to the previous wikipage in the array
function prevWiki()
{
	if(wikiNum>0)
	{
		wikiNum=wikiNum-1;
		if(wikiNum>=0)
		document.getElementById('defaultWiki').src=wikiArray[wikiNum];
	}
}

//Switches to the next transcript line in the array
function switchTranscript()
{
	if(transcriptNum<transcriptArray.length-1)
	{
		transcriptNum=transcriptNum+1;
		if(transcriptNum<transcriptArray.length) 
		document.getElementById('transcript').src=transcriptArray[transcriptNum];
		
	}
}


//Switches to the previous transcript line in the array
function prevTranscript()
{
	if(transcriptNum>0)
	{
		transcriptNum=transcriptNum-1;
		if(transcriptNum>=0)
		document.getElementById('transcript').src=transcriptArray[transcriptNum];
	}
}





function jumpToTopic(contentNo, seekValue){

  //seek to particular location in video
	var video = document.getElementById("defaultVideo");
 	//video.currentTime = seekValue;
	video.currentTime = seekValue;
	//parent.video.document.getElementById("video1").play();
	video.play();
	
 	//load particular slide
	document.getElementById('defaultSlide').src= imageArray[contentNo];
	document.getElementById('defaultWiki').src= wikiArray[contentNo];
	document.getElementById('transcript').src= transcriptArray[contentNo];


}


