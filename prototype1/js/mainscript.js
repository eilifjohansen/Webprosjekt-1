


var imageNum=0;
var count=0;
var imageArray=new Array();
var VideoArray=new Array();


//Image array

imageArray[0] = "img/slide.jpg"
imageArray[1] = "img/slide.png"
imageArray[2] = "img/human.jpg"




//Video array
//Example
//http://people.dsv.su.se/~jcoll/bot/seekhypercaster.php?videoId=3769&seek
VideoArray[0]= 0;
VideoArray[1]= 15;
VideoArray[2]= 78;
VideoArray[3]= 253;
VideoArray[4]= 300;


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
	var video = parent.video.document.getElementById("video1");
 	//video.currentTime = seekValue;
	video.currentTime = seekValue;
	//parent.video.document.getElementById("video1").play();
	video.play();
	
 	//load particular slide
	parent.powerpoint.document.getElementById('slideImg').src= imageArray[slideNo];
	
<<<<<<< HEAD
//seek to particular location in video
var video = document.getElementById("defaultVideo");
var isSeeking = video.seeking; //checks if the user is currently seeking

video.currentTime = seekValue;
video.play();
=======
>>>>>>> 6e4b02daf0071c00ee2f291088af5594086f4901
	
	////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////
  //if(str == "1")
  //{
	//load wiki page
		//xmlhttp.open("GET","./BST.txt",true);
	//display slide image
		//document.slideImage.src = "./PPT/presentation1/Slide2.GIF";
	
	//var seekToTime = video.currentTime + seekValue;
	
	//	if(seekToTime < 0 || seekToTime > video.length)
	//	{
	//		return;
	//	}
	//	else{	
	//		video.currentTime = seekValue;
			
			//chat question
			
			
		//	  document.getElementById("hipBotMiddle").innerHTML += "<br>Q> What is Direct Binary Search? <br> A> It is a half-interval search algorithm that finds the position of a specified value. <br>";
			  
			  
	//	}
	//}
	//else 
	//{
		//load page info
			//xmlhttp.open("GET","./framework.php",true);
		
		//display slide image
		//document.slideImage.src = "./PPT/presentation1/Slide3.GIF";
	
	//	video.currentTime = seekValue;
		
		//chat question
		//document.getElementById("hipBotMiddle").innerHTML += "<br>Q> What is a framework? <br> A> A basic structure underlying a system, concept, or text: 'the theoretical framework of political sociology'. <br>"
	//}
xmlhttp.send();
}

//chatbox only input message
//function askQuestion()
//{
//	if(document.getElementById("question").value !== ""){

//	var quest = "<br><br> Q>";
//	quest += document.getElementById("question").value;
//	quest += "<br>";
//	alert(quest);
	
//		document.getElementById("hipBotMiddle").innerHTML += quest;
//		document.getElementById("hipBotMiddle").innerHTML += "A> Sorry! I am not yet trained to answer such questions :(";
//	}
//}


/**************************************************************************************/
//Functions for switching slide and video

//Switches to the next image in the array
function switchImage()
{
	if(imageNum<imageArray.length-1)
	{
		imageNum=imageNum+1;
		if(imageNum<imageArray.length)
		parent.powerpoint.document.getElementById('slideImg').src=imageArray[imageNum];
		
	}
}


//Switches to the previouse image in the array
function prevImage()
{
	if(imageNum>0)
	{
		imageNum=imageNum-1;
		if(imageNum>=0)
		parent.powerpoint.document.getElementById('slideImg').src=imageArray[imageNum];
	}
}


//Switches to the next video in the array
function next_event()
{
	if(count<VideoArray.length-1)
	{
		count+=1;
<<<<<<< HEAD
		var video = parent.video.document.getElementById("defaultVideo");
 		video.currentTime = videoArray[count];
=======
		//parent.video.location.href = VideoArray[count];
		var video = parent.video.document.getElementById("video1");
 		video.currentTime = VideoArray[count];
>>>>>>> 6e4b02daf0071c00ee2f291088af5594086f4901
	}
}


//Switch to the previouse video in the array
function prev_event()
{
	if(count>0)
	{
		count-=1;
		//parent.video.location.href = VideoArray[count];
		var video = parent.video.document.getElementById("video1");
 		video.currentTime = VideoArray[count];
		
	}
}


//NEED TO IMPROVE
//video to power point synchronization
function process()
{
	var video = parent.video.document.getElementById("video1");
	//while(1)
	{
		//var time = parent.video.document.getElementById("video1").currentTime;
		
		if(video.currentTime < 15)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[0];
		}
		else if(video.currentTime < 184)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[1];		
		}
		else if(video.currentTime < 538)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[2];		
		}
		else if(video.currentTime < 578)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[3];		
		}
		else if(video.currentTime < 930)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[4];		
		}
		else if(video.currentTime < 1193)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[5];		
		}
		else if(video.currentTime < 1295)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[6];		
		}
		else if(video.currentTime < 2080)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[7];		
		}								
		else if(video.currentTime < 2480)
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[8];		
		}
		else
		{
			parent.powerpoint.document.getElementById('slideImg').src=imageArray[14];		
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

     
<<<<<<< HEAD
	});
	
	
=======

>>>>>>> 6e4b02daf0071c00ee2f291088af5594086f4901
  }, 1000); 

   

<<<<<<< HEAD
=======
}


>>>>>>> 6e4b02daf0071c00ee2f291088af5594086f4901

