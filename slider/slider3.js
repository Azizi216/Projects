const seasonHolder = document.querySelector(".seasonHolder")
const season = document.querySelectorAll(".seasonHolder > div");
const images = document.querySelectorAll(".img-holder > div");
const upbtn = document.querySelector(".arrowUp");
const btndown = document.querySelector(".arrowdown");
let current = 0;
function showslider(index){
  season.forEach(season => season.classList.remove("active"));
  images.forEach(img => img.classList.remove("active"));
  season[index].classList.add("active");
  images[index].classList.add("active");
}
btndown.addEventListener("click", () =>{
  current = (current + 1) % season.length;
  showslider(current);
  
});
upbtn.addEventListener("click", () =>{
  current = (current -1 +season.length) % season.length;
  showslider(current);
  seasonHolder.style.transform = `trasnlateY(${offset}%)`
});