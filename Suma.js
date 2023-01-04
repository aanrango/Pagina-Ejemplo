function comprobarSuma(){
    var filas1=document.getElementById("filas1").value;
    var filas2=document.getElementById("filas2").value;
    var columnas1=document.getElementById("columnas1").value;
    var columnas2=document.getElementById("columnas2").value;
    if(parseInt(filas1)==parseInt(filas2) && parseInt(columnas1)==parseInt(columnas2)){
        generarSuma();                
    }
    else{
        alert("Las matrices no son de la misma dimensión!");
    }
}

function añadirElemento(elemento){
    var matriz=document.getElementsByClassName("matriz");
    var elemento1=elemento.cloneNode(true);
    elemento.classList.add("primera");
    elemento1.classList.add("segunda");
    matriz[0].appendChild(elemento);
    matriz[1].appendChild(elemento1);
}

function generarSuma(){
    var filas1=document.getElementById("filas1").value;            
    var columnas1=document.getElementById("columnas1").value;            
    var filas2=document.getElementById("filas2").value;            
    var columnas2=document.getElementById("columnas2").value;            
    var matriz=document.getElementsByClassName("matriz");
    for(var i=0;i<filas1;i++){
        for(var j=0;j<columnas1;j++){
            var elemento=document.createElement("input");
            elemento.type="number";
            añadirElemento(elemento);                                    
        }
    }
    matriz[0].style.display="grid";
    matriz[0].style.gridTemplateRows=`repeat(${filas1},1fr)`;
    matriz[0].style.gridTemplateColumns=`repeat(${columnas1},1fr)`;
    matriz[1].style.display="grid";
    matriz[1].style.gridTemplateRows=`repeat(${filas2},1fr)`;
    matriz[1].style.gridTemplateColumns=`repeat(${columnas2},1fr)`;
    matriz[2].style.display="grid";
    matriz[2].style.gridTemplateRows=`repeat(${filas1},1fr)`;
    matriz[2].style.gridTemplateColumns=`repeat(${columnas1},1fr)`;
}

function sumar(){
    var primera=document.getElementsByClassName("primera");
    var segunda=document.getElementsByClassName("segunda");
    var matriz=document.getElementById("resultado");
    matriz.innerHTML="";
    for(var i=0;i<primera.length;i++){
        var resultado=document.createElement("input");
        resultado.type="number";
        resultado.value=parseInt(primera[i].value)+parseInt(segunda[i].value);
        matriz.appendChild(resultado);
    }
}

function restar(){
    var primera=document.getElementsByClassName("primera");
    var segunda=document.getElementsByClassName("segunda");
    var matriz=document.getElementById("resultado");
    matriz.innerHTML="";
    for(var i=0;i<primera.length;i++){
        var resultado=document.createElement("input");
        resultado.type="number";
        resultado.value=parseInt(primera[i].value)-parseInt(segunda[i].value);
        matriz.appendChild(resultado);
    }
}