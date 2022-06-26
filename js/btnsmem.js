
import { textoCorrecM, textoIncM, questionTiposRam, questionPartesRam, PregDifRam, PregFallasRam } from "./variables.js";

const btnMem1 = document.querySelector("#btnejer1Ram");
// Agregar listener
btnMem1.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res1ram").innerHTML =textoCorrecM;
    document.getElementById("Res1ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem2 = document.querySelector("#btnejer2Ram");
// Agregar listener
btnMem2.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res1ram").innerHTML =textoIncM;
    document.getElementById("Res1ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem3 = document.querySelector("#btnejer3Ram");
// Agregar listener
btnMem3.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res2ram").innerHTML =textoCorrecM;
    document.getElementById("Res2ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem4 = document.querySelector("#btnejer4Ram");
// Agregar listener
btnMem4.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res2ram").innerHTML =textoIncM;
    document.getElementById("Res2ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem5 = document.querySelector("#btnejer5Ram");
// Agregar listener
btnMem5.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res3ram").innerHTML =textoCorrecM;
    document.getElementById("Res3ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});
const btnMem6 = document.querySelector("#btnejer6Ram");
// Agregar listener
btnMem6.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res3ram").innerHTML =textoIncM;
    document.getElementById("Res3ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

// EJERCICIO 4
const btnMem7 = document.querySelector("#btnejer8Ram");
// Agregar listener
btnMem7.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res4ram").innerHTML =textoCorrecM;
    document.getElementById("Res4ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

let btns = document.querySelectorAll('.inEj4RAM');
for (i of btns) {
  i.addEventListener('click', function() {
	document.getElementById('Res4ram').innerHTML= textoIncM;
	document.getElementById("Res4ram").style.color="red";
  });
}

// funcion crear preguntas
function initPregRam() {
    document.getElementById("ej1TiposRam").textContent=questionTiposRam[0];
    document.getElementById("ej2TiposRam").textContent=questionTiposRam[0];
    document.getElementById("ej3TiposRam").textContent=questionTiposRam[0];
    document.getElementById("ej4TiposRam").textContent=questionTiposRam[1];
        document.getElementById("ej1PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej2PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej3PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej4PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej5PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej6PartesRam").textContent=questionPartesRam[0];
        document.getElementById("ej7PartesRam").textContent=questionPartesRam[0];
  
        document.getElementById("PregDifram1").textContent=PregDifRam[0];
        document.getElementById("PregDifram2").textContent=PregDifRam[1];
         document.getElementById("PregDifram3").textContent=PregDifRam[2];
        document.getElementById("PregDifram4").textContent=PregDifRam[3];
        document.getElementById("PregDifram5").textContent=PregDifRam[4];
        document.getElementById("PregDifram6").textContent=PregDifRam[5];
        document.getElementById("PregDifram7").textContent=PregDifRam[6];
        document.getElementById("PregDifram8").textContent=PregDifRam[7];
        document.getElementById("PregDifram9").textContent=PregDifRam[8];
       document.getElementById("PregDifram10").textContent=PregDifRam[9];
       document.getElementById("PregDifram11").textContent=PregDifRam[10];
       document.getElementById("PregDifram12").textContent=PregDifRam[11];
       document.getElementById("PregDifram13").textContent=PregDifRam[12];

       document.getElementById("PregFallasram1").textContent=PregFallasRam[0];
       document.getElementById("PregFallasram2").textContent=PregFallasRam[1];
        document.getElementById("PregFallasram3").textContent=PregFallasRam[2];
       document.getElementById("PregFallasram4").textContent=PregFallasRam[3];
       document.getElementById("PregFallasram5").textContent=PregFallasRam[4];
       document.getElementById("PregFallasram6").textContent=PregFallasRam[5];
       document.getElementById("PregFallasram7").textContent=PregFallasRam[6];
      
    
}


export{initPregRam};

