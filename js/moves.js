//const pageWidth  = document.documentElement.scrollWidth;
 
 function moveRam(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 4500);
    }else if(pageWidth <= 768){
        window.scrollTo(0,2300 );
    }else if(pageWidth <= 992){
        window.scrollTo(0,200 );
    }
};

function movePlaca(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0,3200);
    }else if(pageWidth <= 768){
        window.scrollTo(0,1200 );
    }
};


function moveFte(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 1900);
    }else if(pageWidth <= 768){
        window.scrollTo(0,830 );
    }else if(pageWidth <= 992){
        window.scrollTo(0,200 );
    }
};

function moveProc(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0,3200);
    }else if(pageWidth <= 768){
        window.scrollTo(0,1200 );
    }
};



export {moveRam, movePlaca, moveFte, moveProc};
