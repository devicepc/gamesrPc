// Card data  
const cardsArray2 = [  
    {  
     name: "parte1",  
     img: "./images/preguntasPM/auxdefuente.jpg",  
    },  
    {  
     name: "parte2",  
     img: "./images/preguntasPM/bios.jpg",  
    },  
    {  
     name: "parte3",  
     img: "./images/preguntasPM/ide.jpg",  
    },  
    {  
     name: "parte4",  
     img: "./images/preguntasPM/conectorplacabase.jpg",  
    },  
    {  
     name: "parte5",  
     img: "./images/preguntasPM/LGA_Socket_1366.jpg",  
    },  
    {  
     name: "parte6",  
     img: "./images/preguntasPM/paneltrasero.jpg",  
    },  
    {  
     name: "parte7",  
     img: "./images/preguntasPM/PCI.jpg",  
    },  
    {  
     name: "parte8",  
     img: "./images/preguntasPM/PCIEXX1.jpg",  
    },  
    {  
     name: "parte9",  
     img: "./images/preguntasPM/PILA.jpg",  
    },  
    {  
     name: "parte10",  
     img: "./images/preguntasPM/RAM.jpg",  
    },  
    {  
     name: "parte11",  
     img: "./images/preguntasPM/sata.jpg",  
    },  
    {  
     name: "parte12",  
     img: "./images/preguntasPM/SSD-M2.jpg",  
    },  
   ];  
   // GAME   
   const game = document.getElementById("game");  
   const grid = document.createElement("section");  
   grid.classList.add("grid");  
   // game.addEventListener("click", secCount);  
   game.appendChild(grid);  
   // DOUBLE ARREY  
   let gameGrid = cardsArray2.concat(cardsArray2);  
   // FOR RAMDOMISING THE CARDS EVERY TIME WE REFERESH THE PAGE  
   gameGrid.sort(() => 0.5 - Math.random());  
   // CREATE CARDS  
   gameGrid.forEach((item) => {  
    const card = document.createElement("div");  
    card.classList.add(`card`,`${item.name}`);  
    card.dataset.name = item.name;  
    const front = document.createElement("div");  
    front.classList.add("front");  
    const back = document.createElement("div");  
    back.classList.add("back");  
    back.style.backgroundImage = `url(${item.img})`;  
     grid.appendChild(card);  
    card.appendChild(front);  
    card.appendChild(back);  
   });  
   // ATTEMPTS COUNT  
   let attemptCount = 0;  
   let attempts = document.querySelector(".count");  
   attempts.innerText = attemptCount;  
   // TIME COUNT  
   var sec = 0;  
   var timeInSec;  
   let min = 0;  
   function secCount() {  
    sec = sec + 1;  
    document.querySelector(".sec-count").innerText = Math.floor(sec % 60);  
    timeInSec = setTimeout(secCount, 1000);  
    min = Math.floor(sec / 60);  
    document.querySelector(".min-count").innerText = min;  
   }  
   var timeStarted = false;  
   // secCount();  
   // RESET ALL  
   let reset = document.querySelector(".reset");  
   reset.addEventListener("click", () => {  
    let confirmReset = confirm("Whole game will start again. continue to reset?");  
    if (confirmReset === true) {  
     window.location.reload();  
    }   
   });  
   // VARIABLES FOR THE GAME  
   let firstGuess = "";  
   let secondGuess = "";  
   let previousTarget = null;  
   let count = 0;  
   let delay = 1200;  
   // FUNCTIONS FOR THE GAME  
   const match = () => {  
    let selected = document.querySelectorAll(".selected");  
    selected.forEach((card) => {  
     card.classList.add("match");  
    });  
   };  
   const resetGuesses = () => {  
    firstGuess = "";  
    secondGuess = "";  
    count = 0;  
    let selected = document.querySelectorAll(".selected");  
    selected.forEach((card) => {  
     card.classList.remove("selected");  
    });  
   };  
   // GAME LOGICS  
   grid.addEventListener("click", function (event) {  
    !timeStarted && secCount();  
    timeStarted = true;  
    let clicked = event.target;   
    attemptCount++;  
    attempts.innerText = attemptCount;  
    if (  
     clicked.nodeName === "SECTION" ||  
     clicked === previousTarget ||  
     clicked.parentNode.classList.contains("selected")  
    ) {  
     return;  
    }  
    if (count < 2) {  
     count++;  
     if (count === 1) {  
      // Assign first guess  
      firstGuess = clicked.parentNode.dataset.name;  
      clicked.parentNode.classList.add("selected");  
     } else {  
      // Assign second guess  
      secondGuess = clicked.parentNode.dataset.name;  
      clicked.parentNode.classList.add("selected");  
     }  
     // If both guesses are not empty...  
     if (firstGuess !== "" && secondGuess !== "") {  
      // and the first guess matches the second match...  
      if (firstGuess === secondGuess) {  
       // run the match function  
       // match();  
       // resetGuesses();  
       setTimeout(match, delay);  
       setTimeout(resetGuesses, delay);  
       var matched = document.querySelectorAll(`.${firstGuess}`);  
       matched.forEach(node => node.addEventListener('click',function (e) {    
        e.stopPropagation();  
       }))  
      } else {  
       setTimeout(resetGuesses, delay);  
      }  
     }  
    }  
    // Set previous target to clicked  
    previousTarget = clicked;  
   });  

   function OcultarRamVPD(){
    document.getElementById("Pregcorr").style.display="none";
   }