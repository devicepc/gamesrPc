

// preguntas de ram
let questionRamFailures001 = ["<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />El PC arranca, pero no sale nada en la pantalla...",
"<img src=images/preguntasPM/condensadorRoto.jpeg height=40 /><br /><br />PC arranca, no sale nada en la pantalla y se escuchan pitidos ...",
"<img src=images/preguntasPM/fallaEnPantalla.jpg height=40 /><br /><br />No pasa el Post Screen y muestra algún mensaje en pantalla ...",
"<img src=images/preguntasPM/sobreCalentamiento.jpg height=40 /><br /><br />Arranca, pero trascurrido un tiempo el PC se apaga o reinicia ...",
"<img src=images/preguntasPM/lineasPantalla.jpg height=40 /><br /><br />arranca, pero no sale imagen o salen rayas en la pantalla...",
"<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />l conectar un USB el ordenador se apaga o reinicia ...",
"<img src=images/preguntasPM/monitorNoEnciende.jpg height=40 /><br /><br />Si el ordenador no enciende...",
"<img src=images/preguntasPM/DañoPlaca.jpg height=40 /><br /><br />Si todos los componentes funcionan en otro PC...",


];

let optionsRamFailures001 = ["<button class=buttonsFailuresPM001 onclick=qRamf1i()>Equipo con grafica onBoard</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1c()>BIOS desconfigurada, tarjeta gráfica dañada</button>"];
let optionsRamFailures002 = ["<button class=buttonsFailuresPM001 onclick=qRamf1c()>Componente defectuoso</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1i()>Refrigeracion por defecto</button>"];
let optionsRamFailures003 = ["<button class=buttonsFailuresPM001 onclick=qRamf1c()>Componente defectuoso, ventilador CPU desconectado, BIOS desconfigurada</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1i()>Iniciando Sistema operativo</button>"];
let optionsRamFailures004 = ["<button class=buttonsFailuresPM001 onclick=qRamf1i()>Equipo con fuente Modular</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1c()>Sobrecalentamiento, fuente de alimentación</button>"];
let optionsRamFailures005 = ["<button class=buttonsFailuresPM001 onclick=qRamf1c()>Gráfica dañada</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1i()>Falta floppy</button>"];
let optionsRamFailures006 = ["<button class=buttonsFailuresPM001 onclick=qRamf1c()>Mal aislamiento</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1i()>No inicializo por SSD</button>"];
let optionsRamFailures007 = ["<button class=buttonsFailuresPM001 onclick=qRamf1i()>Equipo sin DVD</button><br /><br /><button class=buttonsFailuresPM001 onclick=qRamf1c()>Placa madre rota</button>"];
let optionsRamFailures008 = ["<button class=buttonsFailuresPM001 onclick=qRamf1c()>Dañada placa</button><br /><br /><button class=buttonsFailuresPM001 onclick=qPRam1i()>Arranque sin disco duro</button>"];


let g = 0;
g++;
let h = 0;
h++;

const startG = document.getElementById("runGM");
startG.addEventListener("click", function(evento){
    
    disappearRamFailures001.innerHTML = "";
    messageRamFailures001.innerHTML = questionRamFailures001[0];
    messageRamFailures002.innerHTML = optionsRamFailures001;
    numberRamFailures001.innerHTML = g++;
    

})


function qRamf1c() {
messageRamFailures003.innerHTML = "Correcto";
messageRamFailures002.innerHTML = "";
scoreRamFailures001.innerHTML = h++;
messageRamFailures004.innerHTML = "<button class=buttons002 onclick=nextRamf001()>Siguiente</button>";
}

function qRamf1i() {
messageRamFailures003.innerHTML = "Incorrecto";
messageRamFailures002.innerHTML = "";
messageRamFailures004.innerHTML = "<button class=buttons002 onclick=nextRamf001()>Siguiente</button>";
}

function nextRamf001() {
if (g == "2") {
    messageRamFailures001.innerHTML = questionRamFailures001[1];
    messageRamFailures002.innerHTML = optionsRamFailures002;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

else if (g == "3") {
    messageRamFailures001.innerHTML = questionRamFailures001[2];
    messageRamFailures002.innerHTML = optionsRamFailures003;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}


else if (g == "4") {
    messageRamFailures001.innerHTML = questionRamFailures001[3];
    messageRamFailures002.innerHTML = optionsRamFailures004;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

else if (g == "5") {
    messageRamFailures001.innerHTML = questionRamFailures001[4];
    messageRamFailures002.innerHTML = optionsRamFailures005;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

else if (g == "6") {
    messageRamFailures001.innerHTML = questionRamFailures001[5];
    messageRamFailures002.innerHTML = optionsRamFailures006;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

else if (g == "7") {
    messageRamFailures001.innerHTML = questionRamFailures001[6];
    messageRamFailures002.innerHTML = optionsRamFailures007;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

else if (g == "8") {
    messageRamFailures001.innerHTML = questionRamFailures001[7];
    messageRamFailures002.innerHTML = optionsRamFailures008;
    messageRamFailures003.innerHTML = "";
    numberRamFailures001.innerHTML = g++;
    messageRamFailures004.innerHTML = "";
}

 else {
    messageRamFailures001.innerHTML = "Fin del  Quiz";
    messageRamFailures002.innerHTML = "";
    messageRamFailures003.innerHTML = "";
    messageRamFailures004.innerHTML = "<button class=buttons002 onclick=repeat001()>Salir</button>";
}
}

function repeat001() {
location.reload();
}


/* function move(){
    const pageWidth  = document.documentElement.scrollWidth;
    console.log("la ventana mide : "+pageWidth + "px");
    if(pageWidth)
} */


