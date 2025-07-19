const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
function updateClock(){
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

const hourdeg = (h % 12) * 30 + m * 0.5;
const minutedeg = m * 6 + s * 0.1;
const secondDeg = s * 6;
hour.style.transform = `rotate(${hourdeg}deg)`;
minute.style.transform = `rotate(${minutedeg}deg)`;
seconds.style.transform = `rotate(${secondDeg}deg)`;  

}
setInterval(updateClock, );
updateClock()

