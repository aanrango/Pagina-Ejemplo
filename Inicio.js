var maximo, mmedio, reproducir, barra, progreso, silenciar, volumen, bucle;

function iniciar(){
    maximo=220;
    mmedio=document.getElementById("medio");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");
    silenciar=document.getElementById("silenciar");
    volumen=document.getElementById("volumen");
    reproducir.addEventListener("click", presionar);
    silenciar.addEventListener("click", sonido);
    barra.addEventListener("click", mover);
    volumen.addEventListener("change", nivel);
}

function presionar(){
    if(!mmedio.paused&&!mmedio.ended){
        mmedio.pause()
        reproducir.value=">";
        clearInterval(bucle);
    }else{
        mmedio.play();
        reproducir.value="||";
        bucle=setInterval(estado, 1000);
    }
}

function estado(){
    if(!mmedio.ended){
        var largo=parseInt(mmedio.currentTime*maximo / mmedio.duration);
        progreso.style.width=largo + "px"; 
    }else{
        progreso.style.width="0px";
        reproducir.value=">";
        clearInterval(bucle);
    }
}

function mover(evento){
    if(!mmedio.paused&& !mmedio.ended){
        var ratonX=evento.offsetX - 2;
        if(ratonX<0){
            ratonX=0;
        }else if(ratonX>maximo){
            ratonX=maximo;
    }
    var tiempo=ratonX*mmedio.duration/maximo;
    mmedio.currentTime=tiempo;
    progreso.style.width=ratonX+"px";
    }
}

function sonido(){
    if(silenciar.value=="Silencio"){
        mmedio.muted=true;
        silenciar.value="Sonido";
    }else{
        mmedio.muted=false;
        silenciar.value="Silencio";
    }
}

function nivel(){
    mmedio.volume=volumen.value;
}

window.addEventListener("load", iniciar);
