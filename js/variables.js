
let textoIncM = "INTENTALO NUEVAMENTE CASI LO TIENES"
let textoCorrecM = "CORRECTO"



// preguntas de procesador

let questionTiposProc = [ "Que socket utiliza este procesador ?", 
"Que parte es la que tiene impresa la palabra INTEL ? ",
"¿ En que arquitectura esta basada este procesador ?",
" ¿ Que procesador es mejor para juegos ?", 
"¿ Que procesador es mejor para minar datos ?", 
" ¿ Que procesador es mejor para una oficina de atencion al publico ?", 
"¿ Que procesador es mejor para un usuartio basico ?"

];
let questionPartesProc = [   1155
];

// preguntas de Ram
let questionTiposRam = [ "Que ram colocaria en esta placa madre ?", 
"Señale que memoria es la mas nueva : ",
];
let questionPartesRam = [ "¿ Que parte de la ram es?", 
];
let PregDifRam = [" Cuantos contactos tiene las Ram DDR3?",
"¿ Las Ram al quitarles a corriene se borran los datos ?",
"Es lo mismo Ram que VRAM ?",
"Cuantos contactos tiene las Ram DDR4?",
"En este momento  las Ram mas veloces  son las dd3 ?",
"Al momento la memoria mas pequeña DDR5 es de 8gb?",
"El sistema operativo consume RAM?",
"Las RAM DDR3 trabajan a cuantos V ?",
"Memorias genericas serian las mas recomendadas para usos prolongados?",
"Las RAM DDR5  a cuantos V trabajan?",
"Las muescas son decorativas?",
"Las muescas de las ddr3 y las DDR5 son iguales ?",
"Las velocidades de la RAM DDR4 oscilan entre: ",

];
const PregFallasRam = ["El ordenador no arranca después de haber insertado la memoria",
"El equipo no reconoce toda la memoria RAM?", " Windows reconoce menos de 4GB de Ram, pero el equipo tene mas?",
" PC no arranca","  Al encender el PC emite tres pitidos cortos (Bios AMIBIOS)", " Al encender el PC emite un pitido largo (Bios AWARD/PHOENIX)",
" Corriendo Memtest me aparece asi, significa : ",
];

// preguntas de cpu fallas
const pregFallasCpu = [{ preguntaUno: "El PC no enciende", respuestauno: "Todas son crorrectas"},
{ preguntaDos: "Tengo un procesador dañado, cuantos pitidos emite una BIOS American Megatrends ? ", respuestados: "5 pitodos cortos"}, 
{ preguntaTres: " Al instalar un microprocesador, tu computadora funciona más lenta de lo normal.", respuestatres: "Mal colocado el disipador"},
{ preguntaCuatro: "Marque que Error no  que producen  pantalla azul en windows: ", respuestacruatro: "Falta de Ram"}]
const PregCpuFallas3 = ["quien descubrio america", "quien es el mejor superheroe", "quien es pilon"]
const respCpuFallas =[["caca", "CPU dañado", "Mal colocado disipador", "Todas son crorrectas"],["cas","perro", "malo"],["casss", "gato", "canario"]]



// funcion delay borrar respuestas

/*let identificadorIntervaloDeTiempo;

function delayErase() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 3000);
}

function mandarMensaje() {
    
 // Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll('#Resultado1');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
  element.textContent = '';
});

// Access the first element in the NodeList
demoClasses[0];
 
}*/

export{textoCorrecM, textoIncM, questionTiposProc, questionTiposRam, questionPartesRam, PregDifRam, respCpuFallas, PregFallasRam,PregCpuFallas3, questionPartesProc, pregFallasCpu};