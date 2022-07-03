let menu = document.querySelector('header');
let num = document.querySelectorAll('a');
let mother = document.querySelector('.mother');
let menu_burger = document.querySelectorAll('label');
let table_inner = document.querySelectorAll('.table_inner');
let table = document.querySelector('.table');

let y = 0.3;
let y_beta;

menu.addEventListener('click', function(e){
    const yoyo = e.target.getAttribute('data-goto');
    const ate = document.querySelector(yoyo).getBoundingClientRect().top + scrollY - parseInt(getComputedStyle(mother).height);
    window.scrollTo({
        top: ate,
        behavior: "smooth"
    });
    if(e.target.closest('.table')){
        table_inner.forEach((index) => {
            index.classList.toggle('table_active'); 
        })
        document.getElementById("check").checked = false;
        mother.classList.remove('mother_active');
        table.classList.remove('table_active_up');
    }
    if(e.target.closest('img')){
        table_inner.forEach((index) => {
            index.classList.remove('table_active'); 
        })
        document.getElementById("check").checked = false;
        mother.classList.remove('mother_active');
        table.classList.remove('table_active_up');
    }
});

mother.addEventListener('click', function(e){
    if(e.target.closest('.new_menu') || e.target.closest('.close')){
        mother.classList.toggle('mother_active');
        table.classList.toggle('table_active_up');
        table_inner.forEach((index) => {
            index.classList.toggle('table_active'); 
        })
    }
})

table.addEventListener('mousedown', (e) => {
    posX = e.offsetX;
    posY = e.offsetY;
    if(e.target.closest('.table_inner')){
        e.target.style.setProperty('--x', posX + 'px');
        e.target.style.setProperty('--y', posY + 'px');
        e.target.classList.add('pulse');
        e.target.addEventListener('animationend', () =>{
            e.target.classList.remove('pulse');
        })
    }
})

window.onscroll = function (){
    let scr = menu.offsetHeight - mother.offsetHeight;
    if(document.documentElement.clientWidth > 1290){
        if(scrollY > 0) mother.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        if(scrollY == 0) mother.style.backgroundColor = null;
    }
    if(scrollY > scr){
       for (let i = 0; i < num.length; i++) {
          num[i].classList.add('a_before'); 
       }
    }else{
        for (let i = 0; i < num.length; i++) {
            num[i].classList.remove('a_before'); 
        }
    }
};

for (let i = 0; i < table_inner.length; i++) {
    y += 0.1;
    y_beta = Number(y.toFixed(1));
    table_inner[i].style.transition = `all ${y_beta}s linear`;
}





