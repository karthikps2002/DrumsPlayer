
function playSound(e){
    const audio=this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=this.document.querySelector(`div[data-key="${e.keyCode}"]`)
   // console.log(audio);
    if (!audio) return;//stop function form running all together
    audio.currentTime=0;//rewind to start
    audio.play();
    key.classList.add("playing");
    //console.log(key);
}

function removetransistion(e){
    if (e.propertyName!=="transform") return ;//skip it if it's not a transform

    //console.log(this);

   this.classList.remove("playing");
}

const keys=document.querySelectorAll('.key');
keys.forEach((key)=>key.addEventListener("transitionend",removetransistion));

window.addEventListener("keydown",playSound)

