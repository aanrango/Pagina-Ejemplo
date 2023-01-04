function iniciar(){
    window.addEventListener("storage", mostrar);
    mostrar();
}

function mostrar(){
    var carrito=document.getElementById("carrito");
    var n;
    carrito.innerHTML='<div id="boton"><input type="button" onclick="borrarTodos()" value="borrar todo"></div>'
    for(var i=0;i<localStorage.length;i++){
        var clave=localStorage.key(i);
        var valor=localStorage.getItem(clave);
        if(i==0){
            n=30;
        }
        if(i==1){
            n=50;
        }
        if(i==2){
            n=45;
        }
        carrito.innerHTML+="<article><div>Producto: "+clave+"  Cantidad Comprada: "+valor+"   Valor total: "+valor*n+"</div>"+'<div><input type="button" onclick="borrarItem(\''+clave+'\')" value="borrar item"></div></article';
        //carrito.innerHTML+='<div><input type="button" onclick="borrarItem(\''+clave+'\')" value="borrar item"></div>';
    }    
}
function borrarTodos(){
    if(confirm("Estas seguro que deseas borrar todos los datos?")){
        localStorage.clear();
        mostrar();
    }
}

function borrarItem(clave){
    if(confirm("Estas seguro que deseas borrar el item?")){
        localStorage.removeItem(clave);
        mostrar();
    }
}
window.addEventListener("load", iniciar);