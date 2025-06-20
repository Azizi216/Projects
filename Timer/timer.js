let timer = null;
let starttime = 0;
let elepstime = 0;
let isRunning = false;
const display = document.getElementById("innerdiv");

function start(){
  if(!isRunning){
    starttime = Date.now()-elepstime;
  }
  console.log(starttime)
  timer = setInterval(update, 10)
  isRunning = true;


}

function stop(){
  if(isRunning){
    clearInterval(timer);
    elepstime = Date.now() - starttime;
    isRunning = false;

  }

}
function Reset(){
  clearInterval(timer);
  starttime = 0;
  elepstime =  0;
  isRunning = false;
  display.textContent = "00:00:00:00";



}

function update() {
  const currentTime = Date.now()
  elepstime = currentTime - starttime;
  let hour = Math.floor(elepstime / (1000 * 60 * 60));
  let minuets = Math.floor(elepstime /(1000 * 60)% 60);
  let seconds = Math.floor (elepstime / 1000 % 60);
  let MilisSeconds = Math.floor(elepstime % 1000 / 10) ;
  hour = (hour < 10) ? "0" + hour : hour;
  minuets = (minuets < 10) ? "0" + minuets : minuets;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  display.textContent = `${hour}: ${minuets}: ${seconds}: ${MilisSeconds}` 
}

