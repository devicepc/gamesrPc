import {moveRam, movePlaca, moveFte, moveProc} from "./moves.js"
import { init} from "./procesadores.js";
import { initPregRam} from "./btnsmem.js";
import{textoCorrecM, textoIncM} from "./variables.js"

// Ejercicio 1 botones

function cambiar (){
    document.getElementById("Resultado1").innerHTML ="ESTAS EN LO CORRECTO, recuerda siempre ponerlo en 600 o 750";

}
document.getElementById("button1ejer1").onclick = function(){
    cambiar();
    cambiocolorResultok();
    
}
function cambiarF (){
    document.getElementById("Resultado1").innerHTML ="Prueba nuevamente";

}
document.getElementById("button2ejer1").onclick = function(){
    cambiarF();
    cambiocolorResult();
    
}
document.getElementById("button3ejer1").onclick = function(){
    cambiarF();
    cambiocolorResult();
    
}

function cambiocolorResult(){
    document.getElementById("Resultado1").style.color= "red";
}
function cambiocolorResultok(){
    document.getElementById("Resultado1").style.color= "green";
}

// fin de ejercicio 1 botones
// Ejercicio 2 botones

const btntest2 = document.getElementById( "button2ejer2");
btntest2.addEventListener("click", function(event){
    document.getElementById("Resultado2").innerHTML ="ESTAS EN LO CORRECTO, recuerda siempre ponerlo en 20V";
    document.getElementById("Resultado2").style.color= "green";
    
})
let btns = document.querySelectorAll('.inEj2Tes');
for (i of btns) {
  i.addEventListener('click', function() {
    document.getElementById("Resultado2").innerHTML="Prueba nuevamente";
    document.getElementById("Resultado2").style.color= "red";
    
  });
}

// fin de ejercicio 2 botones
// Ejercicio 3 botones

const btntest3 = document.getElementById("btntest3");
btntest3.addEventListener("click", function(event){
    document.getElementById("Resultado3").innerHTML ="ESTAS EN LO CORRECTO, recuerda Si da un valor distinto de 0 el cable esta ok";
    document.getElementById("Resultado3").style.color= "green";

})
let btnej3s = document.querySelectorAll('.inEj3Tes');
for (i of btnej3s) {
  i.addEventListener('click', function() {
    document.getElementById("Resultado3").innerHTML="Prueba nuevamente";
    document.getElementById("Resultado3").style.color= "red";
  });
}

// fin de ejercicio 3 botones

// Ejercicio 4 botones

const btntest4 = document.getElementById("btntest4");
btntest4.addEventListener("click", function(event){
    document.getElementById("Resultado4").innerHTML ="ESTAS EN LO CORRECTO, recuerda Si da un valor distinto de 0 el cable esta ok";
    document.getElementById("Resultado4").style.color= "green";
})
let btnej4s = document.querySelectorAll('.inEj4Tes');
for (i of btnej4s) {
  i.addEventListener('click', function() {
    document.getElementById("Resultado4").innerHTML="Prueba nuevamente";
    document.getElementById("Resultado4").style.color= "red";
});
}


// fin de ejercicio 4 botones
//inicio de botones de corriente
// Ejercicio 1

const btncorr1 = document.getElementById("btncorr1");
btncorr1.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr1").innerHTML =textoCorrecM;
    document.getElementById("ResultadoCorr1").style.color= "green";
})

const btncorr2 = document.getElementById("btncorr2");
btncorr2.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr1").innerHTML =textoIncM;
    document.getElementById("ResultadoCorr1").style.color= "red";
})


// Fin del Ejercicio 1
// Ejercicio 2
const btncorr3 = document.getElementById("btncorr3");
btncorr3.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr2").innerHTML =textoCorrecM;
    document.getElementById("ResultadoCorr2").style.color= "green";
})

const btncorr4 = document.getElementById("btncorr4");
btncorr4.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr2").innerHTML =textoIncM;
    document.getElementById("ResultadoCorr2").style.color= "red";
})

// Fin del Ejercicio2
// Ejercicio 3
const btncorr5 = document.getElementById("btncorr5");
btncorr5.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr3").innerHTML =textoCorrecM;
    document.getElementById("ResultadoCorr3").style.color= "green";
})

const btncorr6 = document.getElementById("btncorr6");
btncorr6.addEventListener("click", function(event){
    document.getElementById("ResultadoCorr3").innerHTML =textoIncM;
    document.getElementById("ResultadoCorr3").style.color= "red";
})


// Fin del Ejercicio3
// Ejercicio 4
const btnCorej7 = document.getElementById("btnCorej7");
btnCorej7.addEventListener("click", function(evento){
    document.getElementById("ResultadoCorr4").innerHTML = textoCorrecM;
    document.getElementById("ResultadoCorr4").style.color= "green";
   
})
const btnCorej8 = document.getElementById("btnCorej8");
btnCorej8.addEventListener("click", function(evento){
    document.getElementById("ResultadoCorr4").innerHTML = textoIncM;
    document.getElementById("ResultadoCorr4").style.color= "red";
})

// fin del ejercicio 4

// ejercicios de fallas de fuete
// Ejercicio 2
const btnFallasejer2 = document.getElementById("btnFallasejer2");
btnFallasejer2.addEventListener("click", function(evento){
    document.getElementById("ResFallas2").innerHTML = textoCorrecM;
    document.getElementById("ResFallas2").style.color= "green";
   
})
const btn2Fallasejer2 = document.getElementById("btn2Fallasejer2");
btn2Fallasejer2.addEventListener("click", function(evento){
    document.getElementById("ResFallas2").innerHTML = textoIncM;
    document.getElementById("ResFallas2").style.color= "red";
})

// fin del ejercicio 2
// Ejercicio 3
const btnFallasejer3 = document.getElementById("btnFallasejer3");
btnFallasejer3.addEventListener("click", function(evento){
    document.getElementById("ResFallas3").innerHTML = textoCorrecM;
    document.getElementById("ResFallas3").style.color= "green";
   
})

let btnej3Fallas = document.querySelectorAll('.inEj4falla');
for (i of btnej3Fallas) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallas3").innerHTML=textoIncM;
    document.getElementById("ResFallas3").style.color= "red";
});
}

// ejercicios de tipos de placa madre
//  ejercicio 1
const btnTiposejer1 = document.getElementById("btnTiposejer1");
btnTiposejer1.addEventListener("click", function(evento){
    document.getElementById("ResTipos").innerHTML = textoCorrecM;
    document.getElementById("ResTipos").style.color= "green";
   
})

let btnej1Tipos = document.querySelectorAll('.inEj1Tipos');
for (i of btnej1Tipos) {
  i.addEventListener('click', function() {
    document.getElementById("ResTipos").innerHTML=textoIncM;
    document.getElementById("ResTipos").style.color= "red";
});
}

// fin del ejercicio 1

 //  ejercicio 2
const btnTiposejer2 = document.getElementById("btnTiposejer2");
btnTiposejer2.addEventListener("click", function(evento){
    document.getElementById("ResTipos2").innerHTML = textoCorrecM;
    document.getElementById("ResTipos2").style.color= "green";
   
})

let btnej2Tipos = document.querySelectorAll('.inEj2Tipos');
for (i of btnej2Tipos) {
  i.addEventListener('click', function() {
    document.getElementById("ResTipos2").innerHTML=textoIncM;
    document.getElementById("ResTipos2").style.color= "red";
});
}

// fin del ejercicio 2
//  ejercicio 3
const btnTiposejer3 = document.getElementById("btnTiposejer3");
btnTiposejer3.addEventListener("click", function(evento){
    document.getElementById("ResTipos3").innerHTML = textoCorrecM;
    document.getElementById("ResTipos3").style.color= "green";
   
})

let btnej3Tipos = document.querySelectorAll('.inEj3Tipos');
for (i of btnej3Tipos) {
  i.addEventListener('click', function() {
    document.getElementById("ResTipos3").innerHTML=textoIncM;
    document.getElementById("ResTipos3").style.color= "red";
});
}

// fin del ejercicio 3
//  ejercicio 4
const btnTiposejer4 = document.getElementById("btnTiposejer4");
btnTiposejer4.addEventListener("click", function(evento){
    document.getElementById("ResTipos4").innerHTML = textoCorrecM;
    document.getElementById("ResTipos4").style.color= "green";
   
})

let btnej4Tipos = document.querySelectorAll('.inEj4Tipos');
for (i of btnej4Tipos) {
  i.addEventListener('click', function() {
    document.getElementById("ResTipos4").innerHTML=textoIncM;
    document.getElementById("ResTipos4").style.color= "red";
});
}

// fin del ejercicio 4
// ejercicios de diferencias de placa madre
//  ejercicio 1
const btnDiferPMejer1 = document.getElementById("btnDiferPMejer1");
btnDiferPMejer1.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM").style.color= "green";
   
})

let btnej1DiferPM = document.querySelectorAll('.inEj1Difer');
for (i of btnej1DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM").innerHTML=textoIncM;
    document.getElementById("ResDiferPM").style.color= "red";
});
}

// fin del ejercicio 1

 //  ejercicio 2
const btnDiferPMejer2 = document.getElementById("btnDiferPMejer2");
btnDiferPMejer2.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM2").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM2").style.color= "green";
   
})

let btnej2DiferPM = document.querySelectorAll('.inEj2Difer');
for (i of btnej2DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM2").innerHTML=textoIncM;
    document.getElementById("ResDiferPM2").style.color= "red";
});
}

// fin del ejercicio 2
//  ejercicio 3
const btnDiferPMejer3 = document.getElementById("btnDiferPMejer3");
btnDiferPMejer3.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM3").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM3").style.color= "green";
   
})

let btnej3DiferPM = document.querySelectorAll('.inEj3Difer');
for (i of btnej3DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM3").innerHTML=textoIncM;
    document.getElementById("ResDiferPM3").style.color= "red";
});
}

// fin del ejercicio 3
//  ejercicio 4
const btnDiferPMejer4 = document.getElementById("btnDiferPMejer4");
btnDiferPMejer4.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM4").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM4").style.color= "green";
   
})

let btnej4DiferPM = document.querySelectorAll('.inEj4Difer');
for (i of btnej4DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM4").innerHTML=textoIncM;
    document.getElementById("ResDiferPM4").style.color= "red";
});
}

// fin del ejercicio 4
 //  ejercicio 5
const btnDiferPMejer5 = document.getElementById("btnDiferPMejer5");
btnDiferPMejer5.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM5").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM5").style.color= "green";
   
})

let btnej5DiferPM = document.querySelectorAll('.inEj5Difer');
for (i of btnej5DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM5").innerHTML=textoIncM;
    document.getElementById("ResDiferPM5").style.color= "red";
});
}

// fin del ejercicio 5
//  ejercicio 6
const btnDiferPMejer6 = document.getElementById("btnDiferPMejer6");
btnDiferPMejer6.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM6").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM6").style.color= "green";
   
})

let btnej6DiferPM = document.querySelectorAll('.inEj6Difer');
for (i of btnej6DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM6").innerHTML=textoIncM;
    document.getElementById("ResDiferPM6").style.color= "red";
});
}

// fin del ejercicio 6
//  ejercicio 7
const btnDiferPMejer7 = document.getElementById("btnDiferPMejer7");
btnDiferPMejer7.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM7").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM7").style.color= "green";
   
})

let btnej7DiferPM = document.querySelectorAll('.inEj7Difer');
for (i of btnej7DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM7").innerHTML=textoIncM;
    document.getElementById("ResDiferPM7").style.color= "red";
});
}

// fin del ejercicio 7
//  ejercicio 8
const btnDiferPMejer8 = document.getElementById("btnDiferPMejer8");
btnDiferPMejer8.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM8").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM8").style.color= "green";
   
})

let btnej8DiferPM = document.querySelectorAll('.inEj8Difer');
for (i of btnej8DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM8").innerHTML=textoIncM;
    document.getElementById("ResDiferPM8").style.color= "red";
});
}

// fin del ejercicio 8
//  ejercicio 9
const btnDiferPMejer9 = document.getElementById("btnDiferPMejer9");
btnDiferPMejer9.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM9").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM9").style.color= "green";
   
})

let btnej9DiferPM = document.querySelectorAll('.inEj9Difer');
for (i of btnej9DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM9").innerHTML=textoIncM;
    document.getElementById("ResDiferPM9").style.color= "red";
});
}

// fin del ejercicio 9
//  ejercicio 10
const btnDiferPMejer10 = document.getElementById("btnDiferPMejer10");
btnDiferPMejer10.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM10").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM10").style.color= "green";
   
})

let btnej10DiferPM = document.querySelectorAll('.inEj10Difer');
for (i of btnej10DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM10").innerHTML=textoIncM;
    document.getElementById("ResDiferPM10").style.color= "red";
});
}

// fin del ejercicio 10
//  ejercicio 11
const btnDiferPMejer11 = document.getElementById("btnDiferPMejer11");
btnDiferPMejer11.addEventListener("click", function(evento){
    document.getElementById("ResDiferPM11").innerHTML = textoCorrecM;
    document.getElementById("ResDiferPM11").style.color= "green";
   
})

let btnej11DiferPM = document.querySelectorAll('.inEj11Difer');
for (i of btnej11DiferPM) {
  i.addEventListener('click', function() {
    document.getElementById("ResDiferPM11").innerHTML=textoIncM;
    document.getElementById("ResDiferPM11").style.color= "red";
});
}

// fin del ejercicio 11
// mostar mas juegos placamadre
const Mostrarmas = document.getElementById("masJgosMem");
Mostrarmas.addEventListener("click", function(event){
    Mostrarma();
    PM.ocultarAllPM();
});

// fin de mostar juegos
/* // BOTON ej 1 partes de procesador
const btnPProc = document.getElementById("btnpartProcej1");
btnPProc.addEventListener("click", function(event){
    document.getElementById("ResPartProc1").innerHTML = textoCorrecM;
    document.getElementById("ResPartProc1").style.color= "green";
}) */
// mostrar juegos tipos de ram
const tiposRam = document.getElementById("TiposRam");
tiposRam.addEventListener("click", function(event){
    moveRam();
    Mem.tiposMEMMOstrar();
    Proc.ocultarAllProc();
    initPregRam();
    PM.ocultarAllPM();
    pantalla();
});
// fin mostrar juegos tipos de ram
// mostrar juegos tipos de ram
const partesRam = document.getElementById("PartesRam");
partesRam.addEventListener("click", function(event){
     moveRam();
     PM.ocultarAllPM();
     Proc.ocultarAllProc();
    Mem.partesMEMMOstrar();
    initPregRam();
    
});
// fin mostrar juegos tipos de ram
// mostrar juegos tipos de ram
const DifRam = document.getElementById("DifRam");
DifRam.addEventListener("click", function(event){
     moveRam();
    Mem.diferMEMMOstrar();
    Proc.ocultarAllProc();
    initPregRam();
    PM.ocultarAllPM();
});
// fin mostrar juegos tipos de ram
// mostrar juegos tipos de ram
const FallasRam = document.getElementById("FallasRam");
FallasRam.addEventListener("click", function(event){
     moveRam();
     Proc.ocultarAllProc();
    Mem.fallasMEMMOstrar();
    initPregRam();
});
// fin mostrar juegos tipos de ram




// mostrar juegos tipos de Procesador
const tiposProcesador = document.getElementById("TiposProcesador");
tiposProcesador.addEventListener("click", function(event){
    Fte.ocultarAllFte();
    PM.ocultarAllPM();
     Mem.oculterallMem();
    Proc.tiposProcMOstrar();
    moveProc();
    init();
});
// fin mostrar juegos tipos de Procesador
// mostrar juegos tipos de Procesador
const partesProcesador = document.getElementById("PartesProcesador");
partesProcesador.addEventListener("click", function(event){
    Fte.ocultarAllFte();
    PM.ocultarAllPM();
     Mem.oculterallMem();
    Proc.partesProcMOstrar();
     moveProc();
    init();

});
// fin mostrar juegos tipos de Procesador
// mostrar juegos tipos de Procesador
const DifProcesador = document.getElementById("DifProcesador");
DifProcesador.addEventListener("click", function(event){
    Fte.ocultarAllFte();
    PM.ocultarAllPM();
     Mem.oculterallMem();
    Proc.diferProcMOstrar();
     moveProc();
});
// fin mostrar juegos tipos de Procesador
// mostrar juegos tipos de Procesador
const FallasProcesador = document.getElementById("FallasProcesador");
FallasProcesador.addEventListener("click", function(event){

    
    Proc.fallasProcMOstrar();
     /*Proc.fallasProcMOstrar();
    Fte.ocultarAllFte();
    PM.ocultarAllPM();
    Mem.oculterallMem(); 
    */
    moveProc();
    init();
    
});
// fin mostrar juegos tipos de Procesador
/* 
// mostrar juegos tipos de TdeVid
const tiposTdeVid = document.getElementById("TiposTdeVid");
tiposTdeVid.addEventListener("click", function(event){
    TdeV.tiposTdeVMOstrar();
});
// fin mostrar juegos tipos de TdeVid
// mostrar juegos tipos de TdeVid
const partesTdeVid = document.getElementById("PartesTdeVid");
partesTdeVid.addEventListener("click", function(event){
    TdeV.partesTdeVMOstrar();
});
// fin mostrar juegos tipos de TdeVid
// mostrar juegos tipos de TdeVid
const DifTdeVid = document.getElementById("DifTdeVid");
DifTdeVid.addEventListener("click", function(event){
    TdeV.diferTdeVMOstrar();
});
// fin mostrar juegos tipos de TdeVid
// mostrar juegos tipos de TdeVid
const FallasTdeVid = document.getElementById("FallasTdeVid");
FallasTdeVid.addEventListener("click", function(event){
    TdeV.fallasTdeVMOstrar();
});
// fin mostrar juegos tipos de TdeVid

// mostrar juegos tipos de TdeSon
const tiposTdeSon = document.getElementById("TiposTdeSon");
tiposTdeSon.addEventListener("click", function(event){
    TdeS.tiposTdeSMOstrar();
});
// fin mostrar juegos tipos de TdeSon
// mostrar juegos tipos de TdeSon
const partesTdeSon = document.getElementById("PartesTdeSon");
partesTdeSon.addEventListener("click", function(event){
    TdeS.partesTdeSMOstrar();
});
// fin mostrar juegos tipos de TdeSon
// mostrar juegos tipos de TdeSon
const DifTdeSon = document.getElementById("DifTdeSon");
DifTdeSon.addEventListener("click", function(event){
    TdeS.diferTdeSMOstrar();
});
// fin mostrar juegos tipos de TdeSon
// mostrar juegos tipos de TdeSon
const FallasTdeSon = document.getElementById("FallasTdeSon");
FallasTdeSon.addEventListener("click", function(event){
    TdeS.fallasTdeSMOstrar();
});
// fin mostrar juegos tipos de TdeSon

// mostrar juegos tipos de Disco
const tiposDisco = document.getElementById("TiposDisco");
tiposDisco.addEventListener("click", function(event){
    Disc.tiposDiscMOstrar();
});
// fin mostrar juegos tipos de Disco
// mostrar juegos tipos de Disco
const partesDisco = document.getElementById("PartesDisco");
partesDisco.addEventListener("click", function(event){
    Disc.partesDiscMOstrar();
});
// fin mostrar juegos tipos de Disco
// mostrar juegos tipos de Disco
const DifDisco = document.getElementById("DifDisco");
DifDisco.addEventListener("click", function(event){
    Disc.diferDiscMOstrar();
});
// fin mostrar juegos tipos de Disco
// mostrar juegos tipos de Disco
const FallasDisco = document.getElementById("FallasDisco");
FallasDisco.addEventListener("click", function(event){
    Disc.fallasDiscMOstrar();
});
// fin mostrar juegos tipos de Disco

 */






// funcion de ocultar y mostar

function ocultarCorr(){
    document.getElementById("Pregcorr").style.display="none"; 
}
const corr = document.getElementById("btncorr");
corr.addEventListener("click", function(evento){
    Fte.tiposFteMOstrar();
    PM.ocultarAllPM();
    Proc.ocultarAllProc();
    moveFte();
})
   
const btnfte = document.getElementById("btnfte");
btnfte.addEventListener("click", function(event){
    PM.ocultarAllPM();
    Fte.partesFteMOstrar(); 
    Proc.ocultarAllProc();
     moveFte();
});

const btnDiffte = document.getElementById("btnDiffte");
btnDiffte.addEventListener("click", function(event){
    PM.ocultarAllPM();
Fte.difFteMOstrar(),
Proc.ocultarAllProc();
    moveFte();
});

const btn80plusfte = document.getElementById("btn80plusfte");
btn80plusfte.addEventListener("click", function(event){
    PM.ocultarAllPM();
    Fte.plusFteMOstrar();
    Proc.ocultarAllProc();
    moveFte();
})

const btnConetcFte = document.getElementById("btnConetcFte");
btnConetcFte.addEventListener("click", function(event){
    PM.ocultarAllPM();
    Fte.coexionesFteMOstrar();
    Proc.ocultarAllProc();
    moveFte();
})

const btnFallasFte = document.getElementById("btnFallasFte");
btnFallasFte.addEventListener("click", function(event){
    PM.ocultarAllPM();
    Fte.FallasFteMOstrar();
    Proc.ocultarAllProc();
    moveFte();
})
 const Fte ={
    tiposFteMOstrar: function (){
        document.getElementById("Pregcorr").style.display="block";
        this.partesFteOcultar();
        this.diferPFtecultar();
        this.fallasFteOcultar();
        this.plusFteOcultar();
        this.coexionesFteOcultar();
        
    },partesFteMOstrar: function (){
        document.getElementById("PregFte").style.display="block";
        this.tiposFteOcultar();
        this.diferPFtecultar();
        this.fallasFteOcultar();
        this.plusFteOcultar();
        this.coexionesFteOcultar();
    },
    difFteMOstrar: function (){
        document.getElementById("PregDifFte").style.display="block";
        this.tiposFteOcultar();
        this.partesFteOcultar();
        this.fallasFteOcultar();
        this.plusFteOcultar();
        this.coexionesFteOcultar();
    },
    plusFteMOstrar: function (){
        document.getElementById("Preg80Plus").style.display="block";
        this.partesFteOcultar();
        this.tiposFteOcultar();
        this.fallasFteOcultar();
        this.coexionesFteOcultar();
    },
    coexionesFteMOstrar: function (){
        document.getElementById("PregConexFte").style.display="block";
        this.partesFteOcultar();
        this.plusFteOcultar();
        this.diferPFtecultar();
        this.tiposFteOcultar();
    },
    FallasFteMOstrar: function (){
        document.getElementById("PregFallasFte").style.display="block";
        this.partesFteOcultar();
        this.diferPFtecultar();
        this.tiposFteOcultar();
        this.plusFteOcultar();
        this.coexionesFteOcultar();
    },

    tiposFteOcultar: function (){
        document.getElementById("Pregcorr").style.display="none";
    },
    partesFteOcultar: function (){
        document.getElementById("PregFte").style.display="none";
    },
    diferPFtecultar: function (){
        document.getElementById("PregDifFte").style.display="none";
    },
    plusFteOcultar: function(){
        document.getElementById("Preg80Plus").style.display="none"
    },
    coexionesFteOcultar: function (){
        document.getElementById("PregConexFte").style.display="none";
    },
    fallasFteOcultar: function (){
        document.getElementById("PregFallasFte").style.display="none";
    }, ocultarAllFte: function(){
        this.partesFteOcultar();
        this.diferPFtecultar();
        this.tiposFteOcultar();
        this.plusFteOcultar();
        this.coexionesFteOcultar();
        this.fallasFteOcultar();
    }
 } 

// mover
/* function moveFTE(){
    window.scrollTo(0,730);
   
} */

// funcion de  Placa madre ocultar y mostar
const TiposPM = document.getElementById("btnTiposPM");
TiposPM.addEventListener("click", function(event){
    PM.tiposPMMOstrar();
    Fte.ocultarAllFte();
    Proc.ocultarAllProc();
     Mem.oculterallMem();
    movePlaca();
})
const PartesPM = document.getElementById("btnPartesPM");
PartesPM.addEventListener("click", function(event){
    PM.partesPMMOstrar();
    Fte.ocultarAllFte();
    Proc.ocultarAllProc();
     Mem.oculterallMem();
    Proc.oc
    movePlaca();
})
const DiferPM = document.getElementById("btnDiferPM");
DiferPM.addEventListener("click", function(event){
    PM.diferPMMOstrar();
    Fte.ocultarAllFte();
    Proc.ocultarAllProc();
     Mem.oculterallMem();
    movePlaca();
})
const FallassPM = document.getElementById("btnFallasPM");
FallassPM.addEventListener("click", function(event){
    PM.fallasPMMOstrar();
    Fte.ocultarAllFte();
    Proc.ocultarAllProc();
     Mem.oculterallMem();
    movePlaca();
})
const PM ={
    tiposPMMOstrar: function (){
        document.getElementById("PregTiposPM").style.display="block";
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.fallasPMOcultar();
        
    },
    partesPMMOstrar: function (){
        document.getElementById("PregPartesPM").style.display="block";
        this.tiposPMOcultar();
        this.diferPMOcultar();
        this.fallasPMOcultar();
    },
    diferPMMOstrar: function (){
        document.getElementById("PregDifPM").style.display="block";
        this.partesPMOcultar();
        this.tiposPMOcultar();
        this.fallasPMOcultar();
    },
    fallasPMMOstrar: function (){
        document.getElementById("PregFallasPM").style.display="block";
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.tiposPMOcultar();
    },

    tiposPMOcultar: function (){
        document.getElementById("PregTiposPM").style.display="none";
    },
    partesPMOcultar: function (){
        document.getElementById("PregPartesPM").style.display="none";
    },
    diferPMOcultar: function (){
        document.getElementById("PregDifPM").style.display="none";
    },
    conectPMOcultar: function (){
        document.getElementById("PregConectPM").style.display="none";
    },
    fallasPMOcultar: function (){
        document.getElementById("PregFallasPM").style.display="none";
    }, ocultarAllPM: function(){
        this.partesPMOcultar();
        this.diferPMOcultar();
        this.tiposPMOcultar();
        this.fallasPMOcultar();
    }

}

// funcion de  Memoria ram ocultar y mostar
const Mem ={
    tiposMEMMOstrar: function (){
        moveRam();
        document.getElementById("PregTiposMem").style.display="block";
        this.partesMEMOcultar();
        this.diferMEMOcultar();
        this.fallasMEMOcultar();
    },
    partesMEMMOstrar: function (){
        moveRam();
        document.getElementById("PregPartesMem").style.display="block";
        this.tiposMEMOcultar();
        this.diferMEMOcultar();
        this.fallasMEMOcultar();
    },
    diferMEMMOstrar: function (){
        moveRam();
        document.getElementById("PregDifMem").style.display="block";
        this.partesMEMOcultar();
        this.tiposMEMOcultar();
        this.fallasMEMOcultar();
    },
    fallasMEMMOstrar: function (){
        moveRam();
        document.getElementById("PregFallasMem").style.display="block";
        this.partesMEMOcultar();
        this.diferMEMOcultar();
        this.tiposMEMOcultar();
    },

    tiposMEMOcultar: function (){
        document.getElementById("PregTiposMem").style.display="none";
    },
    partesMEMOcultar: function (){
        document.getElementById("PregPartesMem").style.display="none";
    },
    diferMEMOcultar: function (){
        document.getElementById("PregDifMem").style.display="none";
    },
    
    fallasMEMOcultar: function (){
        document.getElementById("PregFallasMem").style.display="none";
    }, oculterallMem: function(){
        this.partesMEMOcultar();
        this.diferMEMOcultar();
        this.tiposMEMOcultar();
        this.fallasMEMOcultar();
    }

}

// funcion de  Tarj de video ocultar y mostar
/* const TdeV ={
    tiposTdeVMOstrar: function (){
        document.getElementById("PregTiposTVid").style.display="block";
        this.partesTdeVOcultar();
        this.diferTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    partesTdeVMOstrar: function (){
        document.getElementById("PregPartesTVid").style.display="block";
        this.tiposTdeVOcultar();
        this.diferTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    diferTdeVMOstrar: function (){
        document.getElementById("PregDifTVid").style.display="block";
        this.partesTdeVOcultar();
        this.tiposTdeVOcultar();
        this.fallasTdeVOcultar();
    },
    fallasTdeVMOstrar: function (){
        document.getElementById("PregFallasTVid").style.display="block";
        this.partesTdeVOcultar();
        this.diferTdeVOcultar();
        this.tiposTdeVOcultar();
    },

    tiposTdeVOcultar: function (){
        document.getElementById("PregTiposTVid").style.display="none";
    },
    partesTdeVOcultar: function (){
        document.getElementById("PregPartesTVid").style.display="none";
    },
    diferTdeVOcultar: function (){
        document.getElementById("PregDifTVid").style.display="none";
    },
    fallasTdeVOcultar: function (){
        document.getElementById("PregFallasTVid").style.display="none";
    }

}

// funcion de  Tarj de video ocultar y mostar
const TdeS ={
    tiposTdeSMOstrar: function (){
        document.getElementById("PregTiposTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.diferTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    partesTdeSMOstrar: function (){
        document.getElementById("PregPartesTdeS").style.display="block";
        this.tiposTdeSOcultar();
        this.diferTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    diferTdeSMOstrar: function (){
        document.getElementById("PregDifTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.tiposTdeSOcultar();
        this.fallasTdeSOcultar();
    },
    fallasTdeSMOstrar: function (){
        document.getElementById("PregFallasTdeS").style.display="block";
        this.partesTdeSOcultar();
        this.diferTdeSOcultar();
        this.tiposTdeSOcultar();
    },

    tiposTdeSOcultar: function (){
        document.getElementById("PregTiposTdeS").style.display="none";
    },
    partesTdeSOcultar: function (){
        document.getElementById("PregPartesTdeS").style.display="none";
    },
    diferTdeSOcultar: function (){
        document.getElementById("PregDifTdeS").style.display="none";
    },
    
    fallasTdeSOcultar: function (){
        document.getElementById("PregFallasTdeS").style.display="none";
    }

}
 */
// funcion de  Procesador ocultar y mostar

const Proc ={
    tiposProcMOstrar: function (){
        document.getElementById("PregTiposPorc").style.display="block";
        this.partesProcOcultar();
        this.diferProcOcultar();
        this.fallasProcOcultar();
        Fte.ocultarAllFte();
         PM.ocultarAllPM();
     Mem.oculterallMem();
    },
    partesProcMOstrar: function (){
        document.getElementById("PregPartesProc").style.display="block";
        this.tiposProcOcultar();
        this.diferProcOcultar();
        this.fallasProcOcultar();
        Fte.ocultarAllFte();
         PM.ocultarAllPM();
     Mem.oculterallMem();
    },
    diferProcMOstrar: function (){
        document.getElementById("PregDifProc").style.display="block";
        this.partesProcOcultar();
        this.tiposProcOcultar();
        this.fallasProcOcultar();
        Fte.ocultarAllFte();
         PM.ocultarAllPM();
     Mem.oculterallMem();
    },
    fallasProcMOstrar: function (){
         document.getElementById("PregFallasProc").style.display="block";
         this.partesProcOcultar();
        this.diferProcOcultar();
        this.tiposProcOcultar(); 
        Fte.ocultarAllFte();
        PM.ocultarAllPM();
     Mem.oculterallMem();
    },

    tiposProcOcultar: function (){
        document.getElementById("PregTiposPorc").style.display="none";
    },
    partesProcOcultar: function (){
        document.getElementById("PregPartesProc").style.display="none";
    },
    diferProcOcultar: function (){
        document.getElementById("PregDifProc").style.display="none";
    },
    
    fallasProcOcultar: function (){
        document.getElementById("PregFallasProc").style.display="none";
    }, 
    ocultarAllProc: function(){
        this.partesProcOcultar();
        this.diferProcOcultar();
        this.tiposProcOcultar();
        this.fallasProcOcultar();
    }

}


// scrool up
document.getElementById("ir-arriba").addEventListener("click",scrollUp);
function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll >0){
        window.scrollTo(0,0);
    }
}




// funcion de  disco ocultar y mostar

/* const Disc ={
    tiposDiscMOstrar: function (){
        document.getElementById("PregTiposDisc").style.display="block";
        this.partesDiscOcultar();
        this.diferDiscOcultar();
        this.fallasDiscOcultar();
    },
    partesDiscMOstrar: function (){
        document.getElementById("PregPartesDisc").style.display="block";
        this.tiposDiscOcultar();
        this.diferDiscOcultar();
        this.fallasDiscOcultar();
    },
    diferDiscMOstrar: function (){
        document.getElementById("PregDifDisc").style.display="block";
        this.partesDiscOcultar();
        this.tiposDiscOcultar();
        this.fallasDiscOcultar();
    },
    fallasDiscMOstrar: function (){
        document.getElementById("PregFallasDisc").style.display="block";
        this.partesDiscOcultar();
        this.diferDiscOcultar();
        this.tiposDiscOcultar();
    },

    tiposDiscOcultar: function (){
        document.getElementById("PregTiposDisc").style.display="none";
    },
    partesDiscOcultar: function (){
        document.getElementById("PregPartesDisc").style.display="none";
    },
    diferDiscOcultar: function (){
        document.getElementById("PregDifDisc").style.display="none";
    },
    
    fallasDiscOcultar: function (){
        document.getElementById("PregFallasDisc").style.display="none";
    }

} */

function Mostrarma(){
    window.scroll({
        top: 5500,
        left: 0,
        behavior: 'smooth'
        
      });
      document.getElementById("pares").style.display="block";
}

function pantalla(){
    var windowWidth = window.innerWidth;
    alert("ancho"+windowWidth)
}
