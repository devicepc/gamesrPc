
 let questionCpuParts001 = ["<img src=images/preguntasprocesador/transistores1.jpg height=40 /><br /><br />¿Que parte del procesador se mide en nanometros (nm)?",
"<img src=images/preguntasprocesador/cpuygpu.jpg height=40 /><br /><br />Cual es el chip mas grande  ?...",
"<img src=images/preguntasprocesador/cpuygpu.jpg height=40 /><br /><br />Cual es el chip mas pequeño ? ...",
"<img src=images/FAllaProc.png  height=40 /><br /><br />Gestiona, las transferencias de datos y las instrucciones.. Unidad de control",
"<img src=images/FAllaProc.png  height=40 /><br /><br />Toma de decisiones y las operaciones matemáticas. alu ",
"<img src=images/FAllaProc.png height=40 /><br /><br />Son unidad de procesamiento (nucleos)",
"<img src=images/FAllaProc.png height=40 /><br /><br />Misión es ayudar a que el procesador administre mejor sus tareas, reduciendo los tiempos de espera. hilos",
"<img src=images/FAllaProc.png height=40 /><br /><br />Se trata de una memoria que trabaja a gran velocidad,  se tiene acceso a los datos que serán usados en ciertas operaciones sin requerir de la memoria RAM cahe",


];

let optionsCpuParts001 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1i()>El consumo </button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1c()>Los Transistores</button>"];
let optionsCpuParts002 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1c()>Chip Grafico</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1i()>CPU</button>"];
let optionsCpuParts003 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1c()>CPU</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1i()>Chip Grafico</button>"];
let optionsCpuParts004 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1i()>ALU</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1c()>UNIDAD DE CONTROL</button>"];
let optionsCpuParts005 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1c()>ALU</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1i()>UNIDAD DE CONTROL</button>"];
let optionsCpuParts006 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1c()> NUCLEOS</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1i()>CHIP GRAFICO</button>"];
let optionsCpuParts007 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1i()>DISCK PART</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1c()>HILOS</button>"];
let optionsCpuParts008 = ["<button class=buttonsFailuresPM001 onclick=qCpuPart1c()>CACHE</button><br /><br /><button class=buttonsFailuresPM001 onclick=qCpuPart1i()>HILOS</button>"];


let l = 0;
l++;
let j = 0;
j++;
 



const startGCuppart = document.getElementById("runGMCpu");
startGCuppart.addEventListener("click", function(evento){
    disappearcpuParts001.innerHTML = "";
    messagecpuParts001.innerHTML = questionCpuParts001[0];
    messagecpuParts002.innerHTML = optionsCpuParts001;
    numbercpuParts001.innerHTML = l++; 

})


function qCpuPart1c() {
messagecpuParts003.innerHTML = "Correcto";
messagecpuParts002.innerHTML = "";
scorecpuParts001.innerHTML = j++;
messagecpuParts004.innerHTML = "<button class=buttons002 onclick=nextCpuPart001()>Siguiente</button>";
}

function qCpuPart1i() {
messagecpuParts003.innerHTML = "Incorrecto";
messagecpuParts002.innerHTML = "";
messagecpuParts004.innerHTML = "<button class=buttons002 onclick=nextCpuPart001()>Siguiente</button>";
}

function nextCpuPart001() {
if (l == "2") {
    messagecpuParts001.innerHTML = questionCpuParts001[1];
    messagecpuParts002.innerHTML = optionsCpuParts002;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}


else if (l == "3") {
    messagecpuParts001.innerHTML = questionCpuParts001[2];
    messagecpuParts002.innerHTML = optionsCpuParts003;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}

else if (l == "4") {
    messagecpuParts001.innerHTML = questionCpuParts001[3];
    messagecpuParts002.innerHTML = optionsCpuParts004;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}


else if (l == "5") {
    messagecpuParts001.innerHTML = questionCpuParts001[4];
    messagecpuParts002.innerHTML = optionsCpuParts005;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}

else if (l == "6") {
    messagecpuParts001.innerHTML = questionCpuParts001[5];
    messagecpuParts002.innerHTML = optionsCpuParts006;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}

else if (l == "7") {
    messagecpuParts001.innerHTML = questionCpuParts001[6];
    messagecpuParts002.innerHTML = optionsCpuParts007;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}

else if (l == "8") {
    messagecpuParts001.innerHTML = questionCpuParts001[7];
    messagecpuParts002.innerHTML = optionsCpuParts008;
    messagecpuParts003.innerHTML = "";
    numbercpuParts001.innerHTML = l++;
    messagecpuParts004.innerHTML = "";
}

 else {
    messagecpuParts001.innerHTML = "Fin del  Quiz";
    messagecpuParts002.innerHTML = "";
    messagecpuParts003.innerHTML = "";
    messagecpuParts004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}
 
function repeat001() {
location.reload();
}


 