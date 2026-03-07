const img = document.querySelector(".profile-img");
if(img){
document.addEventListener("mousemove",(e)=>{
let x = (window.innerWidth/2 - e.pageX)/35;
let y = (window.innerHeight/2 - e.pageY)/35;
img.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
});
}
