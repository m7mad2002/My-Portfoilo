//add cllss active to heder on scro ll
let heder = document.querySelector("header")

window.onscroll = function(){
    if (this.scrollY >= 50){
        heder.classList.add("active")
    }else{
        heder.classList.remove("active")
    }
        }
let links = document.getElementById("links");
function Open_colse_manu(){
    links.classList.toggle("active")
}
var icon = document.getElementById("icon");
  icon.onclick = function(){
    let displayImag = document.getElementById("im4g");
   document.body.classList.toggle("drak-theme");
   if(document.body.classList.contains("drak-theme") && displayImag.src.match("icon/dark-modephotopakegrund.png")) {
    
    icon.src = "icon/moon-solid.svg"
     displayImag.src = "icon/litee.png"
       
   
   }else{
    icon.src = "icon/sun-solid.svg"
    displayImag.src = "icon/dark-modephotopakegrund.png"
    
   }
}
function main(){
    alert(" Welcome to my profile thank you for visiting"); 

}
