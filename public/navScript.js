function navigation () {

const   hiddenMenu = document.querySelector('.hmenu'),
        vMenu = document.querySelector('.visibleMenu'),
        burgerBtn = document.querySelector('.burger-menu-btn'),
        header = document.querySelector('header');

function showHiddenMenu() {
    // window.addEventListener('click', (event) => {
    //     console.log(event.target)
    //     event.stopImmediatePropagation();
    //     if (event.target.classList.contains('burger')) {
    //         hiddenMenu.classList.remove('hidden');
    //     } else if (!event.target.classList.contains('hidden-menu') && !hiddenMenu.classList.contains('hidden')) {
    //         hiddenMenu.classList.add('hidden');
    //     } 
    // })
    burgerBtn.addEventListener('click', (event)=> {
        hiddenMenu.classList.toggle('hidden')
        
        event.stopImmediatePropagation();
    })
}

showHiddenMenu();

// window.addEventListener('resize', () => {
//     if (header.offsetWidth <= 987) {
//         vMenu.style.display = 'none';
//         burgerBtn.style.display = 'flex';
//         showHiddenMenu();
//     } else {
//         vMenu.style.display = 'flex';
//         burgerBtn.style.display = 'none';
//     }
// })

}

navigation();