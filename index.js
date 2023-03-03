var btn = document.querySelector(".button");
btn.style.color="white";
btn.style.backgroundColor="yellow";
btn.style.transition=" 1s ease-in-out";

btn.addEventListener("mouseover", function() {  
  btn.style.backgroundImage="linear-gradient(to left, #6E54EC, #CB52F8, #FC5EFF, #F1A7C5)" ;
 btn.style.transition=" all 1s ease-in-out";
  this.textContent = "Party Time!";
  
})
btn.addEventListener("mouseout", function() {
  btn.style.backgroundImage="linear-gradient(to right, #6E54EC, #CB52F8, #FC5EFF, #F1A7C5)" ;
  btn.style.transition=" all 1s ease-in-out";
 
btn.style.transition=" 1s ease-in";
  this.textContent = "Set Time";
})
 

function clock(){
  var hours=document.getElementById("h");
  var minutes=document.getElementById("m");
  var seconds=document.getElementById("s");
  var am=document.getElementById("a");
  
  
  var time= new Date();
var a=time.getHours();
var b=time.getMinutes();
var c=time.getSeconds();
var d = time.getHours() >= 12 ? "PM" : "AM";
 

hours.innerHTML=a;
minutes.innerHTML=b;
seconds.innerHTML=c;
am.innerHTML=d;

}
 setInterval(clock,1000);


 function Makediv(){
  var s=document.getElementById("get-details");
  s.style.visibility="visible";

  


   var invalue1=document.getElementById("wakeUpTimeSelector");
   var invalue2=document.getElementById("LunchTime");
   var invalue3=document.getElementById("NapeTime");
   var invalue4=document.getElementById("NightTime");
   var value1=invalue1.options[invalue1.selectedIndex].text;
   var value2=invalue2.options[invalue2.selectedIndex].text;
   var value3=invalue3.options[invalue3.selectedIndex].text;
   var value4=invalue4.options[invalue4.selectedIndex].text;
   document.getElementById("l1").innerHTML="Wake up time :-"+ " "+value1;
   document.getElementById("l2").innerHTML="lunch TIme :-"+ " "+value2;
   document.getElementById("l3").innerHTML="Nape Time :-"+ " "+value3;
   document.getElementById("l4").innerHTML="Night Time :-"+ " "+value4;
  
 }



 function settime(){
  var j=document.getElementById("LunchTime").value;
  var e=document.getElementById("NapeTime").value;
  var w=document.getElementById("NightTime").value;
  var i=document.getElementById("wakeUpTimeSelector").value;
  var hourr=new Date().getHours();
  
  if(i==hourr){
    document.getElementById("fram-pic").style.backgroundImage="url(./Component 30 – 1.jpg)";
    document.getElementById("name").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";   
    document.getElementById("text1").innerHTML="GOOD MORNING!! WAKE UP !!";

  }else if(j==hourr){
    document.getElementById("fram-pic").style.backgroundImage="url(./LunchImg.png)";
    document.getElementById("name").innerHTML="Let's Have Lunch !!";   
    document.getElementById("text1").innerHTML="GOOD AFTERNOO !! TAKE SOME SLEEP";
    
  }else if(e==hourr){
    document.getElementById("fram-pic").style.backgroundImage="url(./NapImg.png)";
    document.getElementById("name").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"; 
    document.getElementById("text1").innerHTML="GOOD EVENING";
  }
  else if(w==hourr){
    document.getElementById("fram-pic").style.backgroundImage="url(./NightImg.png)";
    document.getElementById("name").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("text1").innerHTML="GOOD NIGHT!!";
  }
  Makediv();

 }


 