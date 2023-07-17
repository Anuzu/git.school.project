var search=document.querySelector(".background-dem");
var fend = document.querySelector("#sbb");
a=true;
search.addEventListener("click" , ()=>{
if(a==true){
    fend.style.transition="0.3s ease";
    fend.style.transform="translateX(-510px)";
    a=false
}
else if(a==false){
    fend.style.transition="0.3s ease"
    fend.style.transform="translateX(50px)";
    a=true
}
})



