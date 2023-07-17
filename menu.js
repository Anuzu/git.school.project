var menubox = document.querySelector ("#menubox")
var menuicon= document.querySelector (".background-demoo")
m=true
menuicon.addEventListener("click" , slideMenuBox)
//menu slide design starts here
function slideMenuBox(){
    if(m==true){
        menubox.style.transform="translateY(350vh)";
        menubox.style.transition="0.9s ease"
        m=false

    } else if(m==false){
        menubox.style.transform="translateY(-350vh)";
        menubox.style.transition="0.9s ease"
        m=true
    }
}

//text animation design starts here
