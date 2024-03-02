function moveTTS() {
  window.location = "tts.html";
}

function moveSTT() {
  window.location = "stt.html";
}


//We will use an API (Application Programming Interface)
// API helps us provide services... SPEECH SYNTHESIS API !!!!




//        /*
function speak() {
   document.getElementById("robot").src = "robot.gif";
  // step 1: initialize the API
  var synth=window.speechSynthesis;
  var data = document.getElementById("textArea").value;
 setTimeout(
function(){
  //step 2  converts it into a form that is ready to be spoken !!! Synthesizing
  var sayThis = new SpeechSynthesisUtterance(data);
  //step 3   //this will finally make your system speak out
  synth.speak(sayThis);
   document.getElementById("robot").src = "roboeyesclose.gif";
},2000
 );

}

var speechRec = window.webkitSpeechRecognition;
var recognition = new speechRec();
var said = "";
//     */
function speech() {
 recognition.start();
}
recognition.onresult = function(event){
 console.log(event.results);
 said = event.results[0][0].transcript;
   document.getElementById("saidText").innerHTML = said;

  
}