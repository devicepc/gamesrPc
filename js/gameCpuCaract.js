
 let questionCpuCaract001 = ["<img src=images/FAllaProc.png height=40 /><br /><br /> Indique que CPU tiene grafica integrada :",
"<img src=images/preguntasprocesador/cpuygpu.jpg height=40 /><br /><br />En que se diferencian estas CPU: Intel Core I5-10600k y I5-10400...",
"<img src=images/preguntasprocesador/cpuygpu.jpg height=40 /><br /><br />Es mejor que tenga poca memoria cache   ? ...",
"<img src=images/FAllaProc.png  height=40 /><br /><br />Las graficas On chip son iguales a las tarjetas de video de alta gama?",
"<img src=images/FAllaProc.png  height=40 /><br /><br />¿ Que tengo que tomar en cuenta a la hora de elegir un procesador para mejorar mi equipo ? ",
"<img src=images/FAllaProc.png height=40 /><br /><br />Son unidad de procesamiento  : ",
"<img src=images/FAllaProc.png height=40 /><br /><br />Misión es ayudar a que el procesador administre mejor sus tareas, reduciendo los tiempos de espera : ",
"<img src=images/FAllaProc.png height=40 /><br /><br />Se trata de una memoria que trabaja a gran velocidad,  se tiene acceso a los datos que serán usados en ciertas operaciones sin requerir de la memoria RAM  : ",


];

let optionsCpuCaract001 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>I5 9400F </button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>I5 9400</button>"];
let optionsCpuCaract002 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>Posiblidad de Overclocking y Mas frecuencia</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>Memorias nas rapidas y una no tiene video on chip</button>"];
let optionsCpuCaract003 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>Falso</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>Vardadero</button>"];
let optionsCpuCaract004 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>Son mejores </button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>No</button>"];
let optionsCpuCaract005 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>Socket, cant de cpus e hilos</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>Grafica, que sopote sata </button>"];
let optionsCpuCaract006 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1c()> NUCLEOS</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>CHIP GRAFICO</button>"];
let optionsCpuCaract007 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>DISCK PART</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>HILOS</button>"];
let optionsCpuCaract008 = ["<button class=buttonsFailuresPM001 onclick=qCpuCaract1c()>CACHE</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuCaract1i()>HILOS</button>"];


let m = 0;
m++;
let n = 0;
n++;
 



const startGCupCaract = document.getElementById("runGMCpuC");
startGCupCaract.addEventListener("click", function(evento){
    disappearcpuCaract001.innerHTML = "";
    messagecpuCaract001.innerHTML = questionCpuCaract001[0];
    messagecpuCaract002.innerHTML = optionsCpuCaract001;
    numbercpuCaract001.innerHTML = m++; 

})


function qCpuCaract1c() {
messagecpuCaract003.innerHTML = "Correcto";
messagecpuCaract002.innerHTML = "";
scorecpuCaract001.innerHTML = n++;
messagecpuCaract004.innerHTML = "<button class=buttons002 onclick=nextCpuCaract001()>Siguiente</button>";
}

function qCpuCaract1i() {
messagecpuCaract003.innerHTML = "Incorrecto";
messagecpuCaract002.innerHTML = "";
messagecpuCaract004.innerHTML = "<button class=buttons002 onclick=nextCpuCaract001()>Siguiente</button>";
}

function nextCpuCaract001() {
if (m == "2") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[1];
    messagecpuCaract002.innerHTML = optionsCpuCaract002;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}


else if (m == "3") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[2];
    messagecpuCaract002.innerHTML = optionsCpuCaract003;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}

else if (m == "4") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[3];
    messagecpuCaract002.innerHTML = optionsCpuCaract004;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}


else if (m == "5") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[4];
    messagecpuCaract002.innerHTML = optionsCpuCaract005;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}

else if (m == "6") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[5];
    messagecpuCaract002.innerHTML = optionsCpuCaract006;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}

else if (m == "7") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[6];
    messagecpuCaract002.innerHTML = optionsCpuCaract007;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}

else if (m == "8") {
    messagecpuCaract001.innerHTML = questionCpuCaract001[7];
    messagecpuCaract002.innerHTML = optionsCpuCaract008;
    messagecpuCaract003.innerHTML = "";
    numbercpuCaract001.innerHTML = m++;
    messagecpuCaract004.innerHTML = "";
}

 else {
    messagecpuCaract001.innerHTML = "Fin del  Quiz";
    messagecpuCaract002.innerHTML = "";
    messagecpuCaract003.innerHTML = "";
    messagecpuCaract004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}
 
function repeat001() {
location.reload();
}


 