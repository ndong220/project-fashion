 var slideindex=1;
 function SlideShow(){
 	if (slideindex>=3) {
 		slideindex=1;
 	}
 	else
 		slideindex++;
 	//var sl=document.getElementsByClassName("slide").length;
 	var sl =$('.slide').length;
 	for (var i = 1; i<=sl; i++) {
 		//document.getElementByClassName('slide')[i-1].setAttribute("")
 		if (i==slideindex) {

 		$('.slide:nth-child('+i+')').addClass("active");
 	}
/	else//khong phai slide active
 	{
		if ($('.slide:nth-child('+i+')').hasClass("active"))
 			$('.slide:nth-child('+i+')').removeClass("active");
	}
 }


 }
 setInterval(SlideShow,3000);
