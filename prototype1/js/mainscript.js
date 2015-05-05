
var topicNum=0;
var imageNum=0;
var wikiNum=0;
var transcriptNum=0;
var count=0;
var imageArray=new Array(); //bad and old method?
var VideoArray=new Array();
var wikiArray=new Array();
var transcriptArray=new Array();
var topicArray=new Array();

//Topic array
topicArray[0] = "Javascript";
topicArray[1] = "Dataflow Programming";
topicArray[2] = "Regular Expression";
topicArray[3] = "Functional Programming";
topicArray[4] = "Event";
 

//Image array
imageArray[0] = "img/slide1.png"
imageArray[1] = "img/slide2.png"
imageArray[2] = "img/slide3.png"
imageArray[3] = "img/slide4.png"
imageArray[4] = "img/slide5.png"

//Video array
VideoArray[0] = 3;
VideoArray[1] = 8;
VideoArray[2] = 23;
VideoArray[3] = 33;
VideoArray[4] = 58;

//Wiki pages array
wikiArray[0] = "https://no.wikipedia.org/wiki/JavaScript";
wikiArray[1] = "https://en.wikipedia.org/wiki/Dataflow_programming";
wikiArray[2] = "https://en.wikipedia.org/wiki/Regular_expression";
wikiArray[3] = "https://en.wikipedia.org/wiki/Functional_programming";
wikiArray[4] = "https://en.wikipedia.org/wiki/Event_%28computing%29";

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

//TOPIC
function switchTopic()
{
	if(topicNum<topicArray.length-1)
	{
		topicNum=topicNum+1;
		if(topicNum<topicArray.length) 
		//document.getElementById("currentTopicPlace").text=topicArray[topicNum];
	$("span#currentTopicPlace").text(topicArray[topicNum]);
	}
}

	
function prevTopic()
{
	if(topicNum>0)
	{
		topicNum=topicNum-1;
		if(topicNum>=0)
		//document.getElementById("currentTopicPlace").text=topicArray[topicNum];
		$("span#currentTopicPlace").text(topicArray[topicNum]);
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




//function for the menu, changes correctly based on input 
function jumpToTopic(contentNo, seekValue){

	//seek to particular location in video
	var video = document.getElementById("defaultVideo");
 	
	video.currentTime = seekValue;
	
	video.play();
	
 	//load particular content
	document.getElementById('defaultSlide').src= imageArray[contentNo];
	document.getElementById('defaultWiki').src= wikiArray[contentNo];
	document.getElementById('transcript').src= transcriptArray[contentNo];
	document.getElementById('currentTopicPlace').text= topicArray[contentNo];
	$("span#currentTopicPlace").text(topicArray[contentNo]);
}

//--------------------------------------------------------

//NEED TO IMPROVE
//video to power point synchronization
/*function process()
{
	var video = document.getElementById("defaultVideo");
	
	{
	
		
		
		if(video.currentTime < 3)
		{
			document.getElementById('defaultSlide').src=imageArray[0];
			//document.getElementById('defaultWiki').src= wikiArray[0];
			//document.getElementById('transcript').src= transcriptArray[0];
			//document.getElementById('currentTopicPlace').text= topicArray[0];
			$("span#currentTopicPlace").text(topicArray[0]);
			
			
		}
		else if(video.currentTime < 8)
		{
			document.getElementById('defaultSlide').src=imageArray[1];
			//document.getElementById('defaultWiki').src= wikiArray[1];
			//document.getElementById('transcript').src= transcriptArray[1];
			//document.getElementById('currentTopicPlace').text= topicArray[1];
			$("span#currentTopicPlace").text(topicArray[1]);	
			
						
		}
		else if(video.currentTime < 23)
		{
			document.getElementById('defaultSlide').src=imageArray[2];	
			//document.getElementById('defaultWiki').src= wikiArray[2];
			//document.getElementById('transcript').src= transcriptArray[2];
			//document.getElementById('currentTopicPlace').text= topicArray[2];
			$("span#currentTopicPlace").text(topicArray[2]);
			
		}	
		else if(video.currentTime < 33)
		{
			document.getElementById('defaultSlide').src=imageArray[3];
			//document.getElementById('defaultWiki').src= wikiArray[3];
			//document.getElementById('transcript').src= transcriptArray[3];
			//document.getElementById('currentTopicPlace').text= topicArray[3];
			$("span#currentTopicPlace").text(topicArray[3]);	
				
					
		}
		else if(video.currentTime < 58)
		{	
			document.getElementById('defaultSlide').src=imageArray[4];
			
			//callback function?
			//only if change. if refreshes the same constantly
			//preload
			//document.getElementById('defaultWiki').src= wikiArray[4]; inner html instead? 	
			//document.getElementById('transcript').src= transcriptArray[4];
			//document.getElementById('currentTopicPlace').text= topicArray[4];
			$("span#currentTopicPlace").text(topicArray[4]);		 inner html instead? 
				
			
		}
	
	 
	}
}


//if change happened dont do it again til a new chnage happens

function videoToPowerpointSync()

{ 



  var start = new Date().getTime(); 

  var i = 0, limit = 2000000, busy = false; 

  var processor = setInterval(function() 

  { 


    if(!busy) //if video playing?

    { 

      busy = true; 

      
  
      if(!process()) {
		
	  
	  }
		
		

      if(++i == limit) 

      { 

        clearInterval(processor); 

 

      } 

       

      busy = false; 

    } 

     

  }, 1000); 
}
*/