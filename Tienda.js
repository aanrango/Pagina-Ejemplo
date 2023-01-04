function comprar1(){
    var cantidad=document.getElementById("cantidad1").value;
    localStorage.setItem("GTA V", cantidad);
    document.getElementById("cantidad1").value="";
}

function comprar2(){
    var cantidad=document.getElementById("cantidad2").value;
    localStorage.setItem("God of War", cantidad);
    document.getElementById("cantidad2").value="";
}

function comprar3(){
    var cantidad=document.getElementById("cantidad3").value;
    localStorage.setItem("Uncharted", cantidad);
    document.getElementById("cantidad3").value="";
}