// let text = document.getElementById("txt");
// let submitBtn = document.getElementById("submit");
// let audioMessage;

// submitBtn.addEventListener("click", function(){
//     audioMessage.text = text.value;
//     window.speechSynthesis.speak(audioMessage);
// });

// window.onload = () =>{
//     if("speechSynthesis" in window){
//         audioMessage = new SpeechSynthesisUtterance();
//     }
//     else{
//         alert("Speech Synthesis is not supported");
//     }
// }


let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[1];

    voices.forEach((voice, i) =>
    (voiceSelect.options[i] = new option(voice.name, i)));
};

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
