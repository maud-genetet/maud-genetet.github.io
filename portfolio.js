const loader = document.querySelector('.load');
const contactButton = document.querySelector('.contactButton');
const projetButton = document.querySelector('.projetButton');
const scrollbar = document.querySelector('.scroll');
const body = document.querySelector('body');
const fond = document.querySelector('.fond');
const scrollContainer = document.querySelector("main");
const cross = document.querySelector('.cross');
const l1 = document.querySelector('.l1 img.nom');
const l1pp = document.querySelector('.l1 img.pp');
const imageChargement = document.querySelector('.avant img');
const menuButton = document.querySelector('.bA');
const menuButtonF = document.querySelector('.bF');
const menuButtonFImg = document.querySelector('.bF img');
const menu = document.querySelector('.menu');
const menuNom = document.querySelector('.monNom');

var quelRetexS = '';
var quelRetex = -1;
var taillePage = 2.20;
var onMenu = false;

const s2 = document.querySelector('.s2');
const sh2 = document.querySelector('.sh2');
const r2 = document.querySelector('.r2');
const s3 = document.querySelector('.s3');
const sh3 = document.querySelector('.sh3');
const r3 = document.querySelector('.r3');
const s4 = document.querySelector('.s4');
const sh4 = document.querySelector('.sh4');
const r4 = document.querySelector('.r4');
const s5 = document.querySelector('.s5');
const sh5 = document.querySelector('.sh5');
const r5 = document.querySelector('.r5');
const s6 = document.querySelector('.s6');
const sh6 = document.querySelector('.sh6');
const r6 = document.querySelector('.r6');

const mi1 = document.querySelector('.mi1');
const mi2 = document.querySelector('.mi2');
const mi3 = document.querySelector('.mi3');
const mi4 = document.querySelector('.mi4');

window.addEventListener('load', () => {
    loader.classList.add('loadTerminer');
    l1.classList.add('loadTerminer2');
    l1pp.classList.add('loadTerminer2');
    imageChargement.classList.add('loadTerminer3');
})


scrollContainer.addEventListener("wheel", (evt) => {
    if (window.innerWidth>768){
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        /*
        cursorHover();*/
    }
})

scrollContainer.addEventListener('scroll', () => {
    if (window.innerWidth>768){
        fond.style.top = "0";
        let scroll = scrollContainer.scrollLeft / (scrollContainer.clientWidth * taillePage);
        let scrollPercent = Math.round(scroll * 100);
        scrollbar.style.width = scrollPercent + "%";
        fond.style.left = -scrollContainer.scrollLeft/200 + "vw";
        if ( scrollContainer.scrollLeft>scrollContainer.clientWidth ) {
            fond.style.visibility = "hidden";
        }
        else {
            fond.style.visibility = "visible";
        }
    }
    else {
        fond.style.left = "0";
        fond.style.visibility = "visible";
    }
})

function viewRetex(sect,num){
    if (num!=quelRetex){
        if (quelRetex!=-1){
            fermerRetex(quelRetexS);
        }
        if (window.innerWidth>768){
            scrollContainer.scrollLeft = scrollContainer.clientWidth*(1+0.25*(num-2))+(num);
        }
        else {
            scrollTo(0, (window.innerHeight+1)*(1.8+0.25*(num-2)));
        }
        document.querySelector('.r'+sect).classList.add('rApres');
        /*document.querySelectorAll('.e'+sect);*/
        quelRetexS = sect;
        quelRetex = num;
        taillePage+=1;
        if (window.innerWidth>768){
            document.querySelector('.s'+sect).style.display = 'none';
            document.querySelector('.sh'+sect).style.display = 'flex';
        }
        
        if (window.innerWidth<=768){
            sHover(sect);
        }
    }
    else {
        fermerRetex(sect);
        quelRetex = -1;
        quelRetexS = '';
    }
}

function fermerRetex(sect) {
    document.querySelector('.r'+sect).classList.remove('rApres');
    if (window.innerWidth<=768){
        sNotHover(sect);
    }
    if (window.innerWidth>768){
        document.querySelector('.s'+sect).style.display = 'flex';
        document.querySelector('.sh'+sect).style.display = 'none';
    }
    taillePage-=1;
}

function sHover(sect){
    document.querySelector('.s'+sect).style.backgroundColor = 'black';
    document.querySelector('.s'+sect).style.color = '#f2f2f2';
    document.querySelector('.s'+sect+' .ii').style.display = 'none';
    document.querySelector('.s'+sect+' .ig').style.display = 'flex';
    document.querySelector('.s'+sect+' small').style.color = '#f2f2f2';
}

function sNotHover(sect){
    document.querySelector('.s'+sect).style.backgroundColor = '#f2f2f2';
    document.querySelector('.s'+sect).style.color = 'black';
    document.querySelector('.s'+sect+' .ii').style.display = 'flex';
    document.querySelector('.s'+sect+' .ig').style.display = 'none';
    document.querySelector('.s'+sect+' small').style.color = 'rgba(0, 0, 0, 0.575)';
}

s2.addEventListener('click', event => {
    viewRetex('2',2);
})

s3.addEventListener('click', event => {
    viewRetex('3',3);
})

s4.addEventListener('click', event => {
    viewRetex('4',4);
})

s5.addEventListener('click', event => {
    viewRetex('5',5);
})

s6.addEventListener('click', event => {
    viewRetex('6',6);
})

sh2.addEventListener('click', event => {
    viewRetex('2',2);
})

sh3.addEventListener('click', event => {
    viewRetex('3',3);
})

sh4.addEventListener('click', event => {
    viewRetex('4',4);
})

sh5.addEventListener('click', event => {
    viewRetex('5',5);
})

sh6.addEventListener('click', event => {
    viewRetex('6',6);
})

projetButton.addEventListener('click', event => {
    scrollContainer.scrollLeft = scrollContainer.clientWidth;
    
})

menuButton.addEventListener('click', event => { 
    menu.style.display = 'flex';
    menuNom.style.display = 'flex';
    menuButtonF.style.zIndex = '5';
    menuButtonFImg.style.filter = 'none';
})

menuButtonF.addEventListener('click', event => {
    fermerMenu();
})

function fermerMenu(){
    menu.style.display = 'none';
    menuNom.style.display = 'none';
    menuButtonF.style.zIndex = '1';
    menuButtonFImg.style.filter = 'invert()';
}

mi1.addEventListener('click', event => {
    fermerMenu();
})

mi2.addEventListener('click', event => {
    fermerMenu();
    scrollTo(0, window.innerHeight);
})

mi3.addEventListener('click', event => {
    fermerMenu();
})

mi4.addEventListener('click', event => {
    fermerMenu();
})