function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
  liftoffButton.addEventListener("click",function liftoffButtonClick()
{ 
    paragraph.innerHTML = "Houston, we have liftoff!";
});
abortMission.addEventListener("mouseover", function abortRed (){
   
    document.body.style.backgroundColor = "red";
});  
abortMission.addEventListener("mouseout", function abortRed (){
   
    document.body.style.backgroundColor = "";
});  
abortMission.addEventListener("click",function aborted (){
   let abort = window.confirm("Are you sure you want to abort the mission?");
   if (abort == true) 
   {
       paragraph.innerHTML = "Mission aborted! Space shuttle returning home"; 
    }
    
    
        
    
    
});
}

window.addEventListener("load", init);
