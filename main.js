const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const navClose = document.querySelector('#nav-close')
const hLink = document.querySelectorAll('.hLink')


hamburger.addEventListener('click',() =>{
    navMenu.classList.remove('translate-x-[-1000px]')
});

hLink.forEach(link => {
    link.addEventListener('click', () =>{
        navMenu.classList.add('translate-x-[-1000px]')
    })
});

navClose.addEventListener('click', () =>{
    navMenu.classList.add('translate-x-[-1000px]')
});

// klik diluar
window.addEventListener('click', function(e){
    if(e.target != hamburger ){
        navMenu.classList.add('translate-x-[-1000px]');
    }
});

// tabs
const tabs = document.querySelectorAll('.tabs-wrap ul li');
const all = document.querySelectorAll('.item-wrap');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const drink = document.querySelectorAll('.drink');


tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
            tab.classList.add('active')


    const tabval = tab.getAttribute('data-tabs')
    console.log(tabval)
    
    all.forEach(item =>{
        // item.style.display = 'none'
        item.classList.add('hidden')
    })
        
    if(tabval == 'food'){
        food.forEach(item =>{
            // item.style.display = 'block'
            item.classList.remove('hidden')
        })
    } 
    else if(tabval == 'snack'){
        snack.forEach(item =>{
            // item.style.display = 'block'
            item.classList.remove('hidden')
        })
    }
    else if(tabval == 'drink'){
        drink.forEach(item =>{
            // item.style.display = 'block'
            item.classList.remove('hidden')
        })
    }else{
        all.forEach(item =>{
            // item.style.display = 'block'
            item.classList.remove('hidden')
        })
    }
    })
});



// dark mode
const html = document.querySelector('html');

// tombol tema
const btnSun = document.getElementById('btn-sun');
const btnMoon = document.getElementById('btn-moon');


function darkMode () {
    btnMoon.classList.add('hidden')
    btnSun.classList.remove('hidden')
    html.classList.add('dark')
    localStorage.setItem('mode','dark')
}
function lightmode () {
    btnSun.classList.add('hidden')
    btnMoon.classList.remove('hidden')
    html.classList.remove('dark')
    localStorage.setItem('mode','light')
}


if(localStorage.getItem('mode') == 'light'){
    lightmode();
} else {
    darkMode();
}

btnMoon.addEventListener('click',() =>{
    if(localStorage.getItem('mode') == 'light'){
        darkMode();
    } else{
        lightmode();
    }
});

btnSun.addEventListener('click',() =>{
    if(localStorage.getItem('mode') == 'dark'){
        lightmode();
    } else{
        darkMode();
    }
});












