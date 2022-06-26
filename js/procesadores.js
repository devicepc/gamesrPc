import { textoCorrecM, textoIncM, questionTiposProc, pregFallasCpu, respCpuFallas, PregCpuFallas3 } from "./variables.js";

// ejercicios de Tipos de procesadores
//  ejercicio 1
 const btnTiposprocejer1 = document.getElementById("btnTipProcej1");
btnTiposprocejer1.addEventListener("click", function(evento){
    document.getElementById("ResTipProc1").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc1").style.color= "green";
   
})
const btnTiposprocejer2 = document.getElementById("btnTipProcej2");
btnTiposprocejer2.addEventListener("click", function(evento){
    document.getElementById("ResTipProc1").innerHTML = textoIncM;
    document.getElementById("ResTipProc1").style.color= "red";
   
})
//  ejercicio 2
const btnTiposprocejer3 = document.getElementById("btnTipProcej3");
btnTiposprocejer3.addEventListener("click", function(evento){
    document.getElementById("ResTipProc2").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc2").style.color= "green";
   
})
const btnTiposprocejer4 = document.getElementById("btnTipProcej4");
btnTiposprocejer4.addEventListener("click", function(evento){
    document.getElementById("ResTipProc2").innerHTML = textoIncM;
    document.getElementById("ResTipProc2").style.color= "red";
   
}) 

//  ejercicio 3
const btnTiposprocejer5 = document.getElementById("btnTipProcej5");
btnTiposprocejer5.addEventListener("click", function(evento){
    document.getElementById("ResTipProc3").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc3").style.color= "green";
   
})
const btnTiposprocejer6 = document.getElementById("btnTipProcej6");
btnTiposprocejer6.addEventListener("click", function(evento){
    document.getElementById("ResTipProc3").innerHTML = textoIncM;
    document.getElementById("ResTipProc3").style.color= "red";
   
})
//  ejercicio 4
const btnTiposprocejer8 = document.getElementById("btnTipProcej8");
btnTiposprocejer8.addEventListener("click", function(evento){
    document.getElementById("ResTipProc4").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc4").style.color= "green"; 
  
   
})
const btnTiposprocejer7 = document.getElementById("btnTipProcej71");
btnTiposprocejer7.addEventListener("click", function(evento){
    document.getElementById("ResTipProc4").innerHTML = textoIncM;
    document.getElementById("ResTipProc4").style.color= "red";  
})
// ejerecicio 5
let btnseror = document.querySelectorAll('.inEj6DifRam');
for (i of btnseror) {
  i.addEventListener('click', function() {
	document.getElementById('ResTipProc5').innerHTML= textoDifInc;
	document.getElementById("ResTipProc5").style.color="red";
  });
}
const btnTiposprocejer9 = document.getElementById("btnTipProcej9");
btnTiposprocejer9.addEventListener("click", function(evento){
    document.getElementById("ResTipProc5").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc5").style.color= "green";  
})
// ejerecicio 6
const btnTiposprocejer10 = document.getElementById("btnTipProcej10");
btnTiposprocejer10.addEventListener("click", function(evento){
    document.getElementById("ResTipProc6").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc6").style.color= "green";  
})
const btnTiposprocejer11 = document.getElementById("btnTipProcej11");
btnTiposprocejer11.addEventListener("click", function(evento){
    document.getElementById("ResTipProc6").innerHTML = textoDifInc;
    document.getElementById("ResTipProc6").style.color= "red";  
})
// ejerecicio 7
const btnTiposprocejer12 = document.getElementById("btnTipProcej13");
btnTiposprocejer12.addEventListener("click", function(evento){
    document.getElementById("ResTipProc7").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc7").style.color= "green";  
})
const btnTiposprocejer13 = document.getElementById("btnTipProcej12");
btnTiposprocejer13.addEventListener("click", function(evento){
    document.getElementById("ResTipProc7").innerHTML = textoDifInc;
    document.getElementById("ResTipProc7").style.color= "red";  
})

// partes de procesador
//  ejercicio 1
const btnPartesprocejer1 = document.getElementById("btnpartProcej7");
btnPartesprocejer1.addEventListener("click", function(evento){
     document.getElementById("RespartesProc1").innerHTML = textoCorrecM;
    document.getElementById("RespartesProc1").style.color= "green";
   
})

let btnPartesprocejer2 = document.querySelectorAll('.inEj1TiposProc');
for (i of btnPartesprocejer2) {
  i.addEventListener('click', function() {
    document.getElementById("RespartesProc1").innerHTML=textoIncM ;
    document.getElementById("RespartesProc1").style.color= "red";
});
}
// Fallas  de procesador
//  ejercicio 1
const btnFallasProcejer1 = document.getElementById("btn1ejer1FallasProc");
btnFallasProcejer1.addEventListener("click", function(evento){
    document.getElementById("resProcFall1").innerHTML = textoCorrecM;
    document.getElementById("resProcFall1").style.color= "green";
   
})
let btnFallasProcejererr1 = document.querySelectorAll('.inEj1FallasProc');
for (i of btnFallasProcejererr1) {
  i.addEventListener('click', function() {
    document.getElementById("resProcFall1").innerHTML=textoIncM ;
    document.getElementById("resProcFall1").style.color= "red";
});
}
//  ejercicio 2
const btnFallasProcejer2 = document.getElementById("btn2ejerFallasProc");
btnFallasProcejer2.addEventListener("click", function(evento){
    document.getElementById("resProcFall2").innerHTML = textoCorrecM;
    document.getElementById("resProcFall2").style.color= "green";
   
})
let btnFallasProcejererr2 = document.querySelectorAll('.inEj2FallasProc');
for (i of btnFallasProcejererr2) {
  i.addEventListener('click', function() {
    document.getElementById("resProcFall2").innerHTML=textoIncM ;
    document.getElementById("resProcFall2").style.color= "red";
});
}
// ejercicio 3

const btnFallasProcejer3 = document.getElementById("btn3ejerFallasProc");
btnFallasProcejer3.addEventListener("click", function(evento){
    document.getElementById("resProcFall3").innerHTML = textoCorrecM;
    document.getElementById("resProcFall3").style.color= "green";
   
})
let btnFallasProcejererr3 = document.querySelectorAll('.inEj3FallasProc');
for (i of btnFallasProcejererr3) {
  i.addEventListener('click', function() {
    document.getElementById("resProcFall3").innerHTML=textoIncM ;
    document.getElementById("resProcFall3").style.color= "red";
});
}
// ejercicio 4

const btnFallasProcejer4 = document.getElementById("btn4ejerFallasProc");
btnFallasProcejer4.addEventListener("click", function(evento){
    document.getElementById("resProcFall4").innerHTML = textoCorrecM;
    document.getElementById("resProcFall4").style.color= "green";
   
})
let btnFallasProcejererr4 = document.querySelectorAll('.inEj4FallasProc');
for (i of btnFallasProcejererr4) {
  i.addEventListener('click', function() {
    document.getElementById("resProcFall4").innerHTML=textoIncM ;
    document.getElementById("resProcFall4").style.color= "red";
});
}



 function init() {
    document.getElementById("ej1TiposProc").textContent=questionTiposProc[0];
    document.getElementById("ej2TiposProc").textContent=questionTiposProc[0];
    document.getElementById("ej1PartesProc").textContent = questionTiposProc[1];
    document.getElementById("ej3TiposProc").textContent = questionTiposProc[2];
    document.getElementById("ej4TiposProc").textContent=questionTiposProc[3];
    document.getElementById("ej5TiposProc").textContent=questionTiposProc[4];
    document.getElementById("ej6TiposProc").textContent = questionTiposProc[5];
    document.getElementById("ej7TiposProc").textContent = questionTiposProc[6];
    document.getElementById("PregCpuFallas1").textContent= pregFallasCpu[0].preguntaUno;
    document.getElementById("btn1ejer1FallasProc").textContent= pregFallasCpu[0].respuestauno;
    document.getElementById("PregCpuFallas2").textContent= pregFallasCpu[1].preguntaDos;
    document.getElementById("PregCpuFallas3").textContent= pregFallasCpu[2].preguntaTres;
    document.getElementById("PregCpuFallas4").textContent= pregFallasCpu[3].preguntaCuatro;
    document.getElementById("btn2ejerFallasProc").textContent= pregFallasCpu[1].respuestados;
    document.getElementById("btn3ejerFallasProc").textContent= pregFallasCpu[2].respuestatres;
    document.getElementById("btn2ejerFallasProc").textContent= pregFallasCpu[1].respuestados;
    document.getElementById("btn3ejerFallasProc").textContent= pregFallasCpu[2].respuestatres;
    document.getElementById("btn4ejerFallasProc").textContent= pregFallasCpu[3].respuestacruatro;
   // document.getElementById("btn4ejerFallasProc").textContent= pregFallasCpu[3].respuestatres;

    

}

 


export{init};

 



