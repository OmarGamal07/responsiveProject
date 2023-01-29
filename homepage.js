function opennav() {
  document.getElementById("bar").style.display='none';
  document.getElementById("closebtn").style.display='block';
  document.getElementById("toggleone").style.display = "block";
  document.getElementById("toggletwo").style.display = "block";
  document.getElementById("togglethree").style.display = "block";
}
function closeNav(){

  document.getElementById("bar").style.display='block';
  document.getElementById("closebtn").style.display='none';
  document.getElementById("toggleone").style.display = "none";
  document.getElementById("toggletwo").style.display = "none";
  document.getElementById("togglethree").style.display = "none";
}

let ourServices=0,successCase=0,ourDoctors=0,happyPatient=0;
const myInterval =setInterval(function () {
  if(ourDoctors>525)
  {
    myStopFunction();
  }
  ourServices++;
  successCase+=2;
  ourDoctors+=3;
  happyPatient+=4;
  document.getElementById("numberourService").textContent=parseInt(ourServices);
  document.getElementById("numberourSUCCESS").textContent=parseInt(successCase);
  document.getElementById("numberourDOCTORS").textContent=parseInt(ourDoctors);
  document.getElementById("numberourPATIENTS").textContent=parseInt(happyPatient);
}, 30);
function myStopFunction() {
  clearInterval(myInterval);
}