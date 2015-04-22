$(function(){


var imageNum=0;
var count=0;
var imageArray = [];
var videoArray = [];
var wikiArray = [];

//Image array
imageArray[0] = "img/slide.jpg"
imageArray[1] = "img/slide.PNG"
	
//Video Array
videoArray[0]= 0;
videoArray[1]= 110;
videoArray[2]= 422;
videoArray[3]= 710;
videoArray[4]= 763;
videoArray[5]= 780;
videoArray[6]= 1061;

//arrays for more of out media content. f. ex wikipages, audio transcript. synced the same way as the video to powerpoint?
wikiArray[0] = "https://no.wikipedia.org/wiki/JavaScript"; //path 
wikiArray[1] = "https://no.wikipedia.org/wiki/Vegard";
//etc, etc	
	

	
//for seeking to a particular location in video
function loadXMLDoc(slideNo, seekValue)

//for playing particular portion in video
//function loadXMLDoc(slideNo, startValue, endValue)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //document.getElementById("hipWIKI").innerHTML=xmlhttp.responseText;
    }
  }
	
	
//seek to particular location in video
var video = document.getElementById("defaultVideo");
var isSeeking = video.seeking; //checks if the user is currently seeking

video.currentTime = seekValue;
video.play();
	
	
//load particular slide
document.getElementById("defaultSlide").src = imageArray[slideNo];

xmlhttp.send();
}

	
//SLIDE SWITCHING	---------------------------------
//Switches to the next image in the array
function switchImage() //the actual replacing on the page (html) next
{
	if(imageNum < imageArray.length-1)
	{
		imageNum=imageNum+1;
		if(imageNum < imageArray.length)
			document.getElementById("").src = imageArray[imageNum];
		
	}
}

//Switches to the previous image in the array
function prevImage()  //actual switching on page, previous
{
	if(imageNum > 0)
	{
		imageNum = imageNum-1;
		if(imageNum >= 0)
		document.getElementById("defaultSlide").src = imageArray[imageNum];
	}
}

//VIDEO SWITCHING	----------------------------------
//Switches to the next video in the array
function next_event()
{
	if(count < videoArray.length-1)
	{
		count+=1;
		var video = parent.video.document.getElementById("defaultVideo");
 		video.currentTime = videoArray[count];
	}
}


//Switch to the previous video in the array
function prev_event()
{
	if(count > 0)
	{
		count-=1;
		var video = document.getElementById("defaultVideo");
 		video.currentTime = videoArray[count];
		
	}
}

//NEED TO IMPROVE
//video to power point synchronization
function process()
{
	var video = document.getElementById("defaultVideo");
	//while(1)
	{
		//var time = parent.video.document.getElementById("video1").currentTime;
		
		if(video.currentTime < 3)
		{
			document.getElementById("defaultSlide").src=imageArray[0];
			//add line here for all the other media content? similar to line above?
		}
		else if(video.currentTime < 6)
		{
			document.getElementById("defaultSlide").src=imageArray[1];		
		}
		else if(video.currentTime < 538)
		{
			document.getElementById("defaultSlide").src=imageArray[2];		
		}
		else if(video.currentTime < 578)
		{
			document.getElementById("defaultSlide").src=imageArray[3];		
		}
		else if(video.currentTime < 930)
		{
			document.getElementById("defaultSlide").src=imageArray[4];		
		}
		else if(video.currentTime < 1193)
		{
			document.getElementById("defaultSlide").src=imageArray[5];		
		}
		else if(video.currentTime < 1295)
		{
			document.getElementById("defaultSlide").src=imageArray[6];		
		}
		else if(video.currentTime < 2080)
		{
			document.getElementById("defaultSlide").src=imageArray[7];		
		}								
		else if(video.currentTime < 2480)
		{
			document.getElementById("defaultSlide").src=imageArray[8];		
		}
		else
		{
			document.getElementById("defaultSlide").src=imageArray[14];		
		}
	}
}


function videoToPowerpointSync()

{ 

//  var result2 = document.getElementById('result2'); 

  var start = new Date().getTime(); 

  var i = 0, limit = 2000000, busy = false; 

  var processor = setInterval(function() 

  { 

    if(!busy) 

    { 

      busy = true; 

       

//      result2.value =  'time=' +  

  //      (new Date().getTime() - start) + ' [i=' + i + ']'; 

       

      process(); 

       

      if(++i == limit) 

      { 

        clearInterval(processor); 

 

  //      result2.value = 'time=' +  

//          (new Date().getTime() - start) + ' [done]'; 

      } 

       

      busy = false; 

    } 

     
	});
	
	
  }, 1000); 
}



