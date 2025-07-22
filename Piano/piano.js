const pianokeys = document.querySelectorAll(".piano-keys .key");
const soundValum = document.querySelector(".volume-slider input")
const keyscheckbox = document.querySelector(".keyscheck input")
let allkeys = [],
audio = new Audio("tunes/a.wav");
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
 
  const clickedkey = document.querySelector(`[data-key = "${key}"]`);
  clickedkey.classList.add("active");
  setTimeout(() =>{
    clickedkey.classList.remove("active")
  }, 150);
}
pianokeys.forEach(key =>{
  allkeys.push(key.dataset.key);
  key.addEventListener("click", () =>playTune(key.dataset.key))
  
});
const showHideKeys = (e) =>{
  pianokeys.forEach(key => key.classList.toggle("hide"))
}
const handdleVolume = (e) =>{
  audio.volume = e.target.value;
}
const pressedKey = (e) => {
 if(allkeys.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown",pressedKey);
soundValum.addEventListener("input", handdleVolume);
keyscheckbox.addEventListener("click", showHideKeys);