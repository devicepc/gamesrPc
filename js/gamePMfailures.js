let questionPMFailures001 = ["<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />El PC arranca, pero no sale nada en la pantalla...",
"<img src=images/preguntasPM/condensadorRoto.jpeg height=40 /><br /><br />PC arranca, no sale nada en la pantalla y se escuchan pitidos ...",
"<img src=images/preguntasPM/fallaEnPantalla.jpg height=40 /><br /><br />No pasa el Post Screen y muestra algún mensaje en pantalla ...",
"<img src=images/preguntasPM/sobreCalentamiento.jpg height=40 /><br /><br />Arranca, pero trascurrido un tiempo el PC se apaga o reinicia ...",
"<img src=images/preguntasPM/lineasPantalla.jpg height=40 /><br /><br />arranca, pero no sale imagen o salen rayas en la pantalla...",
"<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />l conectar un USB el ordenador se apaga o reinicia ...",
"<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />Si el ordenador no enciende...",
"<img src=images/preguntasPM/DañoPlaca.jpg height=40 /><br /><br />Si todos los componentes funcionan en otro PC...",


];

let optionsPMFailures001 = ["<button class=buttonsFailuresPM001 onclick=qPMf1i()>Equipo con grafica onBoard</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1c()>BIOS desconfigurada, tarjeta gráfica dañada</button>"];
let optionsPMFailures002 = ["<button class=buttonsFailuresPM001 onclick=qPMf1c()>Componente defectuoso</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1i()>Refrigeracion por defecto</button>"];
let optionsPMFailures003 = ["<button class=buttonsFailuresPM001 onclick=qPMf1c()>Componente defectuoso, ventilador CPU desconectado, BIOS desconfigurada</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1i()>Iniciando Sistema operativo</button>"];
let optionsPMFailures004 = ["<button class=buttonsFailuresPM001 onclick=qPMf1i()>Equipo con fuente Modular</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1c()>Sobrecalentamiento, fuente de alimentación</button>"];
let optionsPMFailures005 = ["<button class=buttonsFailuresPM001 onclick=qPMf1c()>Gráfica dañada</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1i()>Falta floppy</button>"];
let optionsPMFailures006 = ["<button class=buttonsFailuresPM001 onclick=qPMf1c()>Mal aislamiento</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1i()>No inicializo por SSD</button>"];
let optionsPMFailures007 = ["<button class=buttonsFailuresPM001 onclick=qPMf1i()>Equipo sin DVD</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1c()>Placa madre rota</button>"];
let optionsPMFailures008 = ["<button class=buttonsFailuresPM001 onclick=qPMf1c()>Dañada placa</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPMf1i()>Arranque sin disco duro</button>"];


let e = 0;
e++;
let f = 0;
f++;


function beginPMf001() {
disappearPMFailures001.innerHTML = "";
messagePMFailures001.innerHTML = questionPMFailures001[0];
messagePMFailures002.innerHTML = optionsPMFailures001;
numberPMFailures001.innerHTML = e++;
}

function qPMf1c() {
messagePMFailures003.innerHTML = "Correcto";
messagePMFailures002.innerHTML = "";
scorePMFailures001.innerHTML = f++;
messagePMFailures004.innerHTML = "<button class=buttons002 onclick=nextPMf001()>Siguiente</button>";
}

function qPMf1i() {
messagePMFailures003.innerHTML = "Incorrecto";
messagePMFailures002.innerHTML = "";
messagePMFailures004.innerHTML = "<button class=buttons002 onclick=nextPMf001()>Siguiente</button>";
}

function nextPMf001() {
if (e == "2") {
    messagePMFailures001.innerHTML = questionPMFailures001[1];
    messagePMFailures002.innerHTML = optionsPMFailures002;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}

else if (e == "3") {
    messagePMFailures001.innerHTML = questionPMFailures001[2];
    messagePMFailures002.innerHTML = optionsPMFailures003;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}


else if (e == "4") {
    messagePMFailures001.innerHTML = questionPMFailures001[3];
    messagePMFailures002.innerHTML = optionsPMFailures004;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}

else if (e == "5") {
    messagePMFailures001.innerHTML = questionPMFailures001[4];
    messagePMFailures002.innerHTML = optionsPMFailures005;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}

else if (e == "6") {
    messagePM001.innerHTML = questionPMFailures001[5];
    messagePM002.innerHTML = optionsPMFailures006;
    messagePM003.innerHTML = "";
    numberPM001.innerHTML = e++;
    messagePM004.innerHTML = "";
}

else if (e == "7") {
    messagePMFailures001.innerHTML = questionPMFailures001[6];
    messagePMFailures002.innerHTML = optionsPMFailures007;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}

else if (e == "8") {
    messagePMFailures001.innerHTML = questionPMFailures001[7];
    messagePMFailures002.innerHTML = optionsPMFailures008;
    messagePMFailures003.innerHTML = "";
    numberPMFailures001.innerHTML = e++;
    messagePMFailures004.innerHTML = "";
}

 else {
    messagePMFailures001.innerHTML = "Fin del  Quiz";
    messagePMFailures002.innerHTML = "";
    messagePMFailures003.innerHTML = "";
    messagePMFailures004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}

function repeat001() {
location.reload();
}


