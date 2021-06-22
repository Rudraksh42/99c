var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}

recognition.onresult=function run(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();//Function Call//
}

function speak(){
var synth=window.speechSynthesis;
speak_data= document.getElementById("textbox").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

}

camera=document.getElementById("camera");
Webcam.set({

 width:360,
 height:250,
 image_format: 'jpag',
 jpeg_quality:90

});

