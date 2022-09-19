let button=document.getElementById("btnBol");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=1; i<=500; i++){
        if(i%3==0 && i%5==0){
            document.write(i+"<br>");
        }
    }
});
