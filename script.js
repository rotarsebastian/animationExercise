let char = document.querySelector("img.me");
let shakeButton = document.querySelector("#shake");
let fadeInButton = document.querySelector("#fadeIn");
let fadeOutButton = document.querySelector("#fadeOut");
let pulseButton = document.querySelector("#pulse");
let flashButton = document.querySelector("#flash");
let mirrorButton = document.querySelector("#mirror");
let hitButton = document.querySelector("#hit");
let hangButton = document.querySelector("#hang");
let drawnButton = document.querySelector("#drawn");
let extendButton = document.querySelector("#extend");
let scale = document.querySelector("scale");
let aud = document.querySelector("audio");


shakeButton.addEventListener('click', doShake)
fadeInButton.addEventListener('click', dofadeIn)
fadeOutButton.addEventListener('click', dofadeOut)
pulseButton.addEventListener('click', doPulse)
flashButton.addEventListener('click', doFlash)
mirrorButton.addEventListener('click', doMirror)
hitButton.addEventListener('click', doHit)
hangButton.addEventListener('click', doHang)
drawnButton.addEventListener('click', doDrawn)
extendButton.addEventListener('click', doExtend)


function doShake(){
    
    char.classList.toggle("shakeCSS");
}
function dofadeIn(){
    
    char.classList.toggle("fadeInCSS");
}

function doPulse(){
    
    char.classList.toggle("pulseCSS");
}

function doFlash(){
    
    char.classList.toggle("flashCSS");
}

function doMirror(){
    
    char.classList.toggle("mirrorCSS");
}

function doHit(){
    
    char.classList.toggle("hitCSS");
}

function doHang(){
    
    char.classList.toggle("hangCSS");
}
function doDrawn(){
    
    char.classList.toggle("drawnCSS");
}
function doExtend(){
    
    char.classList.toggle("extendCSS");
    char.addEventListener("animationend", audioPlay);
}

function audioPlay(){
    aud.play();
    aud.addEventListener('ended', scaleHero)
}

function scaleHero(){
    console.log("Hero was called")
    char.classList.toggle("scaleCSS");
    char.addEventListener("animationend", dofadeOut);
    
}

function dofadeOut(){
    console.log("Scale is done")
    char.classList.toggle("fadeOutCSS");
    aud.pause();
    char.classList.remove("scaleCSS");
    char.classList.remove("extendCSS");
    
}
