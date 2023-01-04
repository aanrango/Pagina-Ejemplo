function filasSegunda(){
    var columnas = document.getElementById("columnas");
    var filas2 = document.getElementById("filas2");
    filas2.setAttribute("value", ""+columnas.value);
}

function validacion(){
    var columnas = parseInt(document.getElementById("columnas").value);
    var filas2 = parseInt(document.getElementById("filas2").value);
    var elemento = document.querySelector("section");
    var elemento2 = document.querySelector("aside");
    if(columnas == filas2){
        agregarInput();
    }else{
        alert("Las dimensiones de las matrices son incorrectas");
        elemento.innerHTML="";
        elemento2.innerHTML="";
    }
}
function agregarInput(){
    var elemento = document.querySelector("section");
    elemento.innerHTML="";
    var elemento2 = document.querySelector("aside");
    elemento2.innerHTML="";
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    var filas2 = parseInt(document.getElementById("filas2").value);
    var columnas2 = parseInt(document.getElementById("columnas2").value);
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 1</h4>");
        for(var i=0; i<filas; i++){
            for(var j = 0; j<columnas; j++){
                elemento.insertAdjacentHTML("beforeend", "<input>");
            }
            elemento.insertAdjacentHTML("beforeend" , "<br>");
        }
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 2</h4>");
        for(var i=0; i<filas2; i++){
            for(var j = 0; j<columnas2; j++){
                elemento.insertAdjacentHTML("beforeend", "<input>");
            }
            elemento.insertAdjacentHTML("beforeend" , "<br>");
        }
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<button onclick='multiplicacionMatriz()'>Multiplicar</button>");
    
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function multiplicacionMatriz(){
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    var filas2 = parseInt(document.getElementById("filas2").value);
    var columnas2 = parseInt(document.getElementById("columnas2").value);
    var matriz1 = createArray(filas, columnas);
    var matriz2 = createArray(filas2, columnas2);
    var respuestaMatriz= createArray(filas, columnas2);
    console.log(columnas+" "+filas2);
    var lista = document.querySelectorAll("section > input");
    var cont = 0;
    for(var i=0; i< filas;i++){
        for(var j=0; j< columnas; j++){
            var elemento = parseInt(lista[cont].value);
            matriz1[i][j]=elemento;
            cont++;
        }
    } 
    for(var i=0; i< filas2;i++){
        for(var j=0; j< columnas2; j++){
            var elemento = parseInt(lista[cont].value);
            matriz2[i][j]=elemento;
            cont++;
        }
    } 
    for(var i=0; i< filas;i++){
        for(var j=0; j< columnas2; j++){
             respuestaMatriz[i][j]= 0;
            for(var k=0; k<columnas; k++){
                 respuestaMatriz[i][j]+=matriz1[i][k]*matriz2[k][j];
            }
        }
    } 
    verMatriz(respuestaMatriz, filas, columnas2);
    return respuestaMatriz;
}

function verMatriz(matriz, filas, columnas){
    var elemento = document.querySelector("aside");
    elemento.innerHTML="";
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>RESULTADO</h4>");
    for(var i=0; i<filas; i++){
        for(var j = 0; j<columnas; j++){
            var newInput = document.createElement("input");
            var newBr = document.createElement("br");
            newInput.setAttribute("value", ""+matriz[i][j]);
            elemento.appendChild(newInput);
        }
        elemento.appendChild(newBr);
    }
}
