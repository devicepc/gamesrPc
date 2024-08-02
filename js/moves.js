//const pageWidth  = document.documentElement.scrollWidth;
 
 function moveRam(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 4500);
    }else if(pageWidth <= 768){
        window.scrollTo(0,2300 );
    }else if(pageWidth <= 992){
        window.scrollTo(0,200 );
    }else if(pageWidth > 1600){
        window.scrollTo(0,1500 );
    }
};

function movePlaca(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0,3200);
    }else if(pageWidth <= 768){
        window.scrollTo(0,1200 );
    }else if(pageWidth > 1600){
        window.scrollTo(0,1100 );
    }
};


function moveFte(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 1900);
    }else if(pageWidth <= 768){
        window.scrollTo(0,830 );
    }else if(pageWidth <= 992){
        window.scrollTo(0,700 );
    }else if(pageWidth > 1600){
        window.scrollTo(0,600 );
    }
};

function moveProc(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0,7000);
    }else if(pageWidth <= 768){
        window.scrollTo(0,1200 );
    }else if(pageWidth > 1600){
        window.scrollTo(0,1800 );
    }
};



export {moveRam, movePlaca, moveFte, moveProc};
