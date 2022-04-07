const loader = document.querySelector('.load');
const contactButton = document.querySelector('.contactButton');
const projetButton = document.querySelector('.projetButton');
const scrollbar = document.querySelector('.scroll');
const body = document.querySelector('body');
const fond = document.querySelector('.fond');
const scrollContainer = document.querySelector("main");
const cross = document.querySelector('.cross');
const l1 = document.querySelector('.l1 img');
const imageChargement = document.querySelector('.avant img');
var quelRetexS = '';
var quelRetex = -1;
var taillePage = 2.20;


const s2 = document.querySelector('.s2');
const r2 = document.querySelector('.r2');
const s3 = document.querySelector('.s3');
const r3 = document.querySelector('.r3');
const s4 = document.querySelector('.s4');
const r4 = document.querySelector('.r4');
const s5 = document.querySelector('.s5');
const r5 = document.querySelector('.r5');
const s6 = document.querySelector('.s6');
const r6 = document.querySelector('.r6');

window.addEventListener('load', () => {
    loader.classList.add('loadTerminer');
    l1.classList.add('loadTerminer2');
    imageChargement.classList.add('loadTerminer3');
})


scrollContainer.addEventListener("wheel", (evt) => {
    if (window.innerWidth>768){
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
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

function sHover(sect){
    document.querySelector('.s'+sect).style.backgroundColor = 'black';
    document.querySelector('.s'+sect).style.color = '#f2f2f2';
    document.querySelector('.s'+sect+' .ii').style.display = 'none';
    document.querySelector('.s'+sect+' .ig').style.display = 'flex';
}

function sNotHover(sect){
    document.querySelector('.s'+sect).style.backgroundColor = '#f2f2f2';
    document.querySelector('.s'+sect).style.color = 'black';
    document.querySelector('.s'+sect+' .ii').style.display = 'flex';
    document.querySelector('.s'+sect+' .ig').style.display = 'none';
}

function viewRetex(sect,num){
    if (num!=quelRetex){
        if (quelRetex!=-1){
            fermerRetex(quelRetexS);
        }
        if (window.innerWidth>768){
            scrollContainer.scrollLeft = scrollContainer.clientWidth*(1+0.25*(num-2))+(num);
        }
        else {
            scrollTo(0, (window.innerHeight+1)*(1+0.25*(num-2)));
        }
        document.querySelector('.r'+sect).classList.add('rApres');
    /*    document.querySelector('.s'+sect).style.borderRight = 'none';*/
        quelRetexS = sect;
        quelRetex = num;
        taillePage+=1;
        sHover(sect);
    }
    else {
        fermerRetex(sect);
        quelRetex = -1;
        quelRetexS = '';
    }
}

function fermerRetex(sect) {
    document.querySelector('.r'+sect).classList.remove('rApres');
    sNotHover(sect);
    if (window.innerWidth>768){
       /* document.querySelector('.s'+sect).style.borderRight = 'solid 1px black';*/
    }
    taillePage-=1;
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


projetButton.addEventListener('click', event => {
    scrollContainer.scrollLeft = scrollContainer.clientWidth;
    
})
