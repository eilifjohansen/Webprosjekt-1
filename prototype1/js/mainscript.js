
var imageNum=0;
var count=0;
var imageArray=new Array();
var VideoArray=new Array();


//Image array

imageArray[0] = "img/slide.PNG"
imageArray[1] = "img/slide.JPG"
imageArray[2] = "img/gamedev.PNG"




//Video array
VideoArray[0]= 0;
VideoArray[1]= 2;
VideoArray[2]= 4;



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


//NEED TO IMPROVE
//video to power point synchronization
function process()
{
	var video = document.getElementById("defaultVideo");
	//while(1)
	{
		//var time = parent.video.document.getElementById("video1").currentTime;
		
		if(video.currentTime < 2)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[0];
		}
		else if(video.currentTime < 4)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[1];		
		}
		else if(video.currentTime < 6)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[2];		
		}
		else if(video.currentTime < 578)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[3];		
		}
		else if(video.currentTime < 930)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[4];		
		}
		else if(video.currentTime < 1193)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[5];		
		}
		else if(video.currentTime < 1295)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[6];		
		}
		else if(video.currentTime < 2080)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[7];		
		}								
		else if(video.currentTime < 2480)
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[8];		
		}
		else
		{
			parent.powerpoint.document.getElementById('defaultSlide').src=imageArray[14];		
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

