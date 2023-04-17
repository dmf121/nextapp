

function blog () {
    const cardsContainer = document.querySelector('.cards');
     let   seeBtn = document.querySelector('.expand');

   

     seeBtn.addEventListener('click', (event) => {
        cardsContainer.classList.toggle('expanded');
        event.stopImmediatePropagation();
        if (cardsContainer.classList.contains('expanded')) {
            seeBtn.innerHTML = 'See Less';
        } else {
            seeBtn.innerHTML = 'See All'
        }
    })

    
}

/*____________________________________________________________________________________________*/

blog();