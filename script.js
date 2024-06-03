let dino=document.querySelector(".dino")
let curr=document.querySelector(".score")
let score=0
let cross=true;
document.addEventListener("keydown",(eve)=>{
    let key=eve.key
    if (key=="ArrowUp"){
        dino.classList.add("animateDino")
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }
    if(key=="ArrowRight"){
        dino=document.querySelector(".dino")
      let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=dinoX + 112 + "px";
    }
    if(key=="ArrowLeft"){
        dino=document.querySelector(".dino")
      let dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=(dinoX - 112) + "px";
        if(dinoX<10){
            dino.style.left=0;
        }
    }
})
setInterval(() => {
    dino=document.querySelector(".dino")
    let gameover=document.querySelector(".gameinfo")
    let dragon=document.querySelector(".dragon")
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))
    ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue("left"))
    oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue("top"))
    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy)
    if(offsetX<73 && offsetY<52){
        dragon.classList.remove("obstacle")
        gameover.innerHTML="<h1> Game is over - refresh to play again</h1>";
    }
    else if(offsetX<145 && cross){
        score+=100;
        updatesrc(score)
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 10);
        setTimeout(() => {         
            let  aniDur=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue("animation-duration"))
            aniDur=aniDur-0.1;
            dragon.style.animationDuration=aniDur + "s"
        }, 500);
    }
}, 100);
const updatesrc=(score)=>{
    curr.innerHTML="Your score is :" + score
}