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