import { textoCorrecM, textoIncM } from "./variables.js";
// ejercicios de partes de Ram 
//  ejercicio 1
const btnPartesRamejer1 = document.getElementById("btnPartRam1");
btnPartesRamejer1.addEventListener("click", function(evento){
    document.getElementById("ResPRam1").innerHTML = textoCorrecM;
    document.getElementById("ResPRam1").style.color= "green";
   
})
const btnPartesRamejer2 = document.getElementById("btnPartRam2");
btnPartesRamejer2.addEventListener("click", function(evento){
    document.getElementById("ResPRam1").innerHTML = textoIncM;
    document.getElementById("ResPRam1").style.color= "red";
   
})

//  ejercicio 2
const btnPartesRamejer3 = document.getElementById("btnPartRam3");
btnPartesRamejer3.addEventListener("click", function(evento){
    document.getElementById("ResPRam2").innerHTML = textoCorrecM;
    document.getElementById("ResPRam2").style.color= "green";
   
})
const btnPartesRamejer4 = document.getElementById("btnPartRam4");
btnPartesRamejer4.addEventListener("click", function(evento){
    document.getElementById("ResPRam2").innerHTML = textoIncM;
    document.getElementById("ResPRam2").style.color= "red";
   
})
//  ejercicio 3
const btnPartesRamejer5 = document.getElementById("btnPartRam5");
btnPartesRamejer5.addEventListener("click", function(evento){
    document.getElementById("ResPRam3").innerHTML = textoCorrecM;
    document.getElementById("ResPRam3").style.color= "green";
   
})
const btnPartesRamejer6 = document.getElementById("btnPartRam6");
btnPartesRamejer6.addEventListener("click", function(evento){
    document.getElementById("ResPRam3").innerHTML = textoIncM;
    document.getElementById("ResPRam3").style.color= "red";
   
})
//  ejercicio 4
const btnPartesRamejer7 = document.getElementById("btnPartRam7");
btnPartesRamejer7.addEventListener("click", function(evento){
    document.getElementById("ResPRam4").innerHTML = textoCorrecM;
    document.getElementById("ResPRam4").style.color= "green";
   
})
let btnej4Partes = document.querySelectorAll('.inEj4Partes');
for (i of btnej4Partes) {
  i.addEventListener('click', function() {
    document.getElementById("ResPRam4").innerHTML=textoIncM;
    document.getElementById("ResPRam4").style.color= "red";
});
} 
//  ejercicio 5
const btnPartesRamejer8 = document.getElementById("btnPartRam8");
btnPartesRamejer8.addEventListener("click", function(evento){
    document.getElementById("ResPRam5").innerHTML = textoCorrecM;
    document.getElementById("ResPRam5").style.color= "green";
   
})
const btnPartesRamejer9 = document.getElementById("btnPartRam9");
btnPartesRamejer9.addEventListener("click", function(evento){
    document.getElementById("ResPRam5").innerHTML = textoIncM;
    document.getElementById("ResPRam5").style.color= "red";
   
})
//  ejercicio 6
const btnPartesRamejer11 = document.getElementById("btnPartRam11");
btnPartesRamejer11.addEventListener("click", function(evento){
    document.getElementById("ResPRam6").innerHTML = textoCorrecM;
    document.getElementById("ResPRam6").style.color= "green";
   
})
const btnPartesRamejer10 = document.getElementById("btnPartRam10");
btnPartesRamejer10.addEventListener("click", function(evento){
    document.getElementById("ResPRam6").innerHTML = textoIncM;
    document.getElementById("ResPRam6").style.color= "red";
   
})
//  ejercicio 7
const btnPartesRamejer12 = document.getElementById("btnPartRam12");
btnPartesRamejer12.addEventListener("click", function(evento){
    document.getElementById("ResPRam7").innerHTML = textoCorrecM;
    document.getElementById("ResPRam7").style.color= "green";
   
})
let btnej7Partes = document.querySelectorAll('.inEj7Partes');
for (i of btnej7Partes) {
  i.addEventListener('click', function() {
    document.getElementById("ResPRam7").innerHTML=textoIncM;
    document.getElementById("ResPRam7").style.color= "red";
});
}
// diferencias de ram //
// Ej 1

 const btnDifEj1Ram = document.querySelector(".ej1DifRam");
btnDifEj1Ram.addEventListener('change', (event) => {
    const Value = btnDifEj1Ram.value;
      if(Value == 0){
        document.getElementById("Resp1DifRam").innerHTML=textoCorrecM;
    document.getElementById("Resp1DifRam").style.color= "green";
    }else{
        document.getElementById("Resp1DifRam").innerHTML=textoIncM;
        document.getElementById("Resp1DifRam").style.color= "red";
    } 
}); 

// Ej 3
const btn3DifRam = document.getElementById("ej3DifRam");
btn3DifRam.addEventListener("change", function() {
    const Value2 = btn3DifRam.value;
    if(Value2 == 1){
        document.getElementById("RespDifRam3").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam3").style.color= "green";
    }else{
        document.getElementById("RespDifRam3").innerHTML=textoIncM;
        document.getElementById("RespDifRam3").style.color= "red";
    } 
})

// ej 2
const btn2DifRam = document.getElementById("ej2DifRam");
btn2DifRam.addEventListener("change", function() {
    const Value2 = btn2DifRam.value;
    if(Value2 == 1){
        document.getElementById("RespDifRam2").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam2").style.color= "green";
    }else{
        document.getElementById("RespDifRam2").innerHTML=textoIncM;
        document.getElementById("RespDifRam2").style.color= "red";
    } 
})

// Ej 4
const btn4DifRam = document.getElementById("ej4DifRam");
btn4DifRam.addEventListener("change", function() {
    const Value3 = btn4DifRam.value;
    if(Value3 == 1){
        document.getElementById("RespDifRam4").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam4").style.color= "green";
    }else{
        document.getElementById("RespDifRam4").innerHTML=textoIncM;
        document.getElementById("RespDifRam4").style.color= "red";
    } 
})

// ej 5
const btn5DifRam = document.getElementById("ej5DifRam");
btn5DifRam.addEventListener("change", function() {
    const Value5 = btn5DifRam.value;
    if(Value5 == 1){
        document.getElementById("RespDifRam5").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam5").style.color= "green";
    }else{
        document.getElementById("RespDifRam5").innerHTML=textoIncM;
        document.getElementById("RespDifRam5").style.color= "red";
    } 
})

// Ej 6
const btn6DifRam = document.getElementById("ej6DifRam");
btn6DifRam.addEventListener("change", function() {
    const Value6 = btn6DifRam.value;
    if(Value6 == 1){
        document.getElementById("RespDifRam6").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam6").style.color= "green";
    }else{
        document.getElementById("RespDifRam6").innerHTML=textoIncM;
        document.getElementById("RespDifRam6").style.color= "red";
    } 
})

// ej 7
const btn7DifRam = document.getElementById("ej7DifRam");
btn7DifRam.addEventListener("change", function() {
    const Value7 = btn7DifRam.value;
    if(Value7 == 0){
        document.getElementById("RespDifRam7").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam7").style.color= "green";
    }else{
        document.getElementById("RespDifRam7").innerHTML=textoIncM;
        document.getElementById("RespDifRam7").style.color= "red";
    } 
})

// Ej 8
const btn8DifRam = document.getElementById("ej8DifRam");
btn8DifRam.addEventListener("change", function() {
    const Value8 = btn8DifRam.value;
    if(Value8 == 0){
        document.getElementById("RespDifRam8").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam8").style.color= "green";
    }else{
        document.getElementById("RespDifRam8").innerHTML=textoIncM;
        document.getElementById("RespDifRam8").style.color= "red";
    } 
})

// ej 9
const btn9DifRam = document.getElementById("ej9DifRam");
btn9DifRam.addEventListener("change", function() {
    const Value9 = btn9DifRam.value;
    if(Value9 == 1){
        document.getElementById("RespDifRam9").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam9").style.color= "green";
    }else{
        document.getElementById("RespDifRam9").innerHTML=textoIncM;
        document.getElementById("RespDifRam9").style.color= "red";
    } 
})


// ej 10
const btn10DifRam = document.getElementById("ej10DifRam");
btn10DifRam.addEventListener("change", function() {
    const Value10 = btn10DifRam.value;
    if(Value10 == 2){
        document.getElementById("RespDifRam10").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam10").style.color= "green";
    }else{
        document.getElementById("RespDifRam10").innerHTML=textoIncM;
        document.getElementById("RespDifRam10").style.color= "red";
    } 
})

// Ej 11
const btn11DifRam = document.getElementById("ej11DifRam");
btn11DifRam.addEventListener("change", function() {
    const Value11 = btn11DifRam.value;
    if(Value11 == 1){
        document.getElementById("RespDifRam11").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam11").style.color= "green";
    }else{
        document.getElementById("RespDifRam11").innerHTML=textoIncM;
        document.getElementById("RespDifRam11").style.color= "red";
    } 
})

// ej 12
const btn12DifRam = document.getElementById("ej12DifRam");
btn12DifRam.addEventListener("change", function() {
    const Value12 = btn12DifRam.value;
    if(Value12 == 0){
        document.getElementById("RespDifRam12").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam12").style.color= "green";
    }else{
        document.getElementById("RespDifRam12").innerHTML=textoIncM;
        document.getElementById("RespDifRam12").style.color= "red";
    } 
})
// ej 13
const btn13DifRam = document.getElementById("ej13DifRam");
btn13DifRam.addEventListener("change", function() {
    const Value13 = btn13DifRam.value;
    if(Value13 == 0){
        document.getElementById("RespDifRam13").innerHTML=textoCorrecM;
    document.getElementById("RespDifRam13").style.color= "green";
    }else{
        document.getElementById("RespDifRam13").innerHTML=textoIncM;
        document.getElementById("RespDifRam13").style.color= "red";
    } 
})

// fallas de Ram
// ej 1
const btnFallasRamejer1 = document.getElementById("button2ejer5");
btnFallasRamejer1.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam1").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam1").style.color= "green";
   
})
let btnFallasInc1 = document.querySelectorAll('.inEj1DifRam');
for (i of btnFallasInc1) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam1").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam1").style.color= "red";
});
}

// ej 2
const btnFallasRamejer2 = document.getElementById("btnDifRam2");
btnFallasRamejer2.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam2").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam2").style.color= "green";
   
})
let btnFallasInc2 = document.querySelectorAll('.inEj2DifRam');
for (i of btnFallasInc2) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam2").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam2").style.color= "red";
});
}
// ej 3
const btnFallasRamejer3 = document.getElementById("btnDifRam3");
btnFallasRamejer3.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam3").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam3").style.color= "green";
   
})
let btnFallasInc3 = document.querySelectorAll('.inEj3DifRam');
for (i of btnFallasInc3) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam3").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam3").style.color= "red";
});
}
// ej 4
const btnFallasRamejer4 = document.getElementById("btnDifRam4");
btnFallasRamejer4.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam4").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam4").style.color= "green";
   
})
let btnFallasInc4 = document.querySelectorAll('.inEj4DifRam');
for (i of btnFallasInc4) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam4").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam4").style.color= "red";
});
}
// ej 5
const btnFallasRamejer5 = document.getElementById("btnDifRam5");
btnFallasRamejer5.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam5").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam5").style.color= "green";
   
})
let btnFallasInc5 = document.querySelectorAll('.inEj5DifRam');
for (i of btnFallasInc5) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam5").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam5").style.color= "red";
});
}

// ej 6
const btnFallasRamejer6 = document.getElementById("btnDifRam6");
btnFallasRamejer6.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam6").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam6").style.color= "green";
   
})
let btnFallasInc6 = document.querySelectorAll('.inEj6DifRam');
for (i of btnFallasInc6) {
  i.addEventListener('click', function() {
    document.getElementById("ResFallasRam6").innerHTML=textoIncM ;
    document.getElementById("ResFallasRam6").style.color= "red";
});
}

// ej 7
const btnFallasRamejer7 = document.getElementById("btnDifRam7");
btnFallasRamejer7.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam7").innerHTML = textoCorrecM;
    document.getElementById("ResFallasRam7").style.color= "green";
   
})
const btnFallasRamejer8 = document.getElementById("btnDifRam8");
btnFallasRamejer8.addEventListener("click", function(evento){
    document.getElementById("ResFallasRam7").innerHTML = textoIncM;
    document.getElementById("ResFallasRam7").style.color= "red";
   
})