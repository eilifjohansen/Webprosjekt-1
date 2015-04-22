var imageNum=0;
var count=0;
var imageArray=new Array();
var VideoArray=new Array();


//Image array

imageArray[0] = "BrentSlides/Bild1.PNG"
imageArray[1] = "BrentSlides/Bild2.PNG"
imageArray[2] = "BrentSlides/Bild3.PNG"
imageArray[3] = "BrentSlides/Bild4.PNG"
imageArray[4] = "BrentSlides/Bild5.PNG"
imageArray[5] = "BrentSlides/Bild6.PNG"
imageArray[6] = "BrentSlides/Bild7.PNG"
imageArray[7] = "BrentSlides/Bild8.PNG"
imageArray[8] = "BrentSlides/Bild9.PNG"
imageArray[9] = "BrentSlides/Bild10.PNG"
imageArray[10] = "BrentSlides/Bild11.PNG"
imageArray[11] = "BrentSlides/Bild12.PNG"
imageArray[12] = "BrentSlides/Bild13.PNG"
imageArray[13] = "BrentSlides/Bild14.PNG"
imageArray[14] = "BrentSlides/Bild15.PNG"
imageArray[15] = "BrentSlides/Bild16.PNG"
imageArray[16] = "BrentSlides/Bild17.PNG"
imageArray[17] = "BrentSlides/Bild18.PNG"
imageArray[18] = "BrentSlides/Bild19.PNG"
imageArray[19] = "BrentSlides/Bild20.PNG"
imageArray[20] = "BrentSlides/Bild21.PNG"
imageArray[21] = "BrentSlides/Bild22.PNG"
imageArray[22] = "BrentSlides/Bild23.PNG"


//Video array
//Example
//http://people.dsv.su.se/~jcoll/bot/seekhypercaster.php?videoId=3769&seek
VideoArray[0]= 0;
VideoArray[1]= 15;
VideoArray[2]= 78;
VideoArray[3]= 253;
VideoArray[4]= 300;
VideoArray[5]= 303;
VideoArray[6]= 630;
VideoArray[7]= 855;
VideoArray[8]= 1172;
VideoArray[9]= 1175;
VideoArray[10]= 1294;
VideoArray[11]= 1565;
VideoArray[12]= 1711;
VideoArray[13]= 1745;
VideoArray[14]= 2140;

VideoArray[15]= 2253;
VideoArray[16]= 2255;
VideoArray[17]= 2880;
VideoArray[18]= 3325;
VideoArray[19]= 3614;
VideoArray[20]= 3729;

VideoArray[21]= 3872;
VideoArray[22]= 3968;

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
		//parent.video.location.href = VideoArray[count];
		var video = parent.video.document.getElementById("video1");
 		video.currentTime = VideoArray[count];
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

     

  }, 1000); 

   

}