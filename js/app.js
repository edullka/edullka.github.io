popUpCorreo = () => {
    
    let btnCorreo1 = document.querySelector('.correo-button-1');
    let btnCorreo2 = document.querySelector('.correo-button-2');
    let btnCorreo3 = document.querySelector('.correo-button-3');
    let btnCorreo4 = document.querySelector('.correo-button-4');
    let popUp1 = document.querySelector('.contenedor-correo-1');
    let popUp2 = document.querySelector('.contenedor-correo-2');
    let popUp3 = document.querySelector('.contenedor-correo-3');
    let popUp4 = document.querySelector('.contenedor-correo-4');

    btnCorreo1.addEventListener("click", () => {
        popUp1.classList.toggle('hidden');
        popUp1.classList.toggle('block');
    });
    btnCorreo2.addEventListener("click", () => {
        popUp2.classList.toggle('hidden');
        popUp2.classList.toggle('block');
    });
    btnCorreo3.addEventListener("click", () => {
        popUp3.classList.toggle('hidden');
        popUp3.classList.toggle('block');
    });
    btnCorreo4.addEventListener("click", () => {
        popUp4.classList.toggle('hidden');
        popUp4.classList.toggle('block');
    });

    window.addEventListener('click', e=>{
        if(popUp1.classList.contains('block') && e.target!=popUp1 && e.target!=btnCorreo1){
            popUp1.classList.toggle('hidden');
            popUp1.classList.toggle("block");
        }
        if(popUp2.classList.contains('block') && e.target!=popUp2 && e.target!=btnCorreo2){
            popUp2.classList.toggle('hidden');
            popUp2.classList.toggle("block");
        }
        if(popUp3.classList.contains('block') && e.target!=popUp3 && e.target!=btnCorreo3){
            popUp3.classList.toggle('hidden');
            popUp3.classList.toggle("block");
        }
        if(popUp4.classList.contains('block') && e.target!=popUp4 && e.target!=btnCorreo4){
            popUp4.classList.toggle('hidden');
            popUp4.classList.toggle("block");
        }
    })
}

popUpMenu = () => {
    
    let btnOpenPopUp = document.querySelector('.menu-button');
    let popUp = document.querySelector('.contenedor-menu');

    btnOpenPopUp.addEventListener("click", () => {
        popUp.classList.toggle('hidden');
        popUp.classList.toggle('block');
    });

    window.addEventListener('click', e=>{
        if(popUp.classList.contains('block') && e.target!=popUp && e.target!=btnOpenPopUp){
            popUp.classList.toggle('hidden');
            popUp.classList.toggle("block");
        }
    })
}

popUpWsp = () => {

    let btnClosePopUp = document.querySelector('.close-button');
    let btnOpenPopUp = document.querySelector('.wsp-button');
    let popUp = document.querySelector('.contenedor-chat');
    let btnSend = document.getElementById('send-button');

    btnClosePopUp.addEventListener("click", () => {
        popUp.classList.toggle('active');
    });

    btnOpenPopUp.addEventListener("click", () => {
        popUp.classList.toggle('active');
    });

    btnSend.addEventListener("click", () => {
        let msg = document.getElementById('mensaje').value;
        let realmsg = msg.replace(/ /g, "%20");
        let telefono = "51933839178";
        window.open('https://api.whatsapp.com/send?phone='+telefono+'&text='+realmsg, '_blank');
    });
}

popUpWsp();
popUpCorreo();
popUpMenu();

simplyCountdown('#cuenta', {
    year: 2021, // required
    month: 3, // required
    day: 5, // required
    hours: 17, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'd', plural: 'd' },
        hours: { singular: 'h', plural: 'h' },
        minutes: { singular: 'm', plural: 'm' },
        seconds: { singular: 's', plural: 's' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() {
        
        return; 
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

document.getElementById('toogleButton').addEventListener('click', function() {
    let htmlClasses = document.querySelector('html').classList;
    if(localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
});

if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
}

const btnOpen = document.querySelector('.btnOpen')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-content')

btnOpen.addEventListener('click', ()=>{
    aparecerImagen('images/header-code-2.webp')
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    buttonInicio1.style.opacity = '0'
}