var prev = document.querySelector('.prev-btn')
var next = document.querySelector('.next-btn')
var images = document.querySelector('.carousel').children
const totalImages = images.length;
let slideIndex = 0;

prev.addEventListener('click', () => {
    showSlides('prev')
})

next.addEventListener('click', () => {
    showSlides('next')
})

const showSlides = (direction) => {
    if(direction == 'next'){
        slideIndex ++;
        if(slideIndex == totalImages){
            slideIndex = 0;
        }
    } else {
        if(slideIndex == 0){
            slideIndex = totalImages -1;
        } else {
            slideIndex--;
        }

    }
    for(let i = 0; i < totalImages; i++){
        images[i].classList.remove('main');
    }
    images[slideIndex].classList.add('main');
}


const selectElements = (element) => document.querySelector(element);

selectElements('.menu-icons').addEventListener('click', () => {
    selectElements('.root-menu').classList.toggle('active');
})

const setTabs = () => {
    document.querySelectorAll('.tabs-btn').forEach(button => {
        button.addEventListener('click' , () => {
            const sidebar = button.parentElement;
            const tabsContainer = sidebar.parentElement;
            const tabNumber = button.dataset.forTab;
            const activatTap = tabsContainer.querySelector(`.content[data-tab="${tabNumber}"]`)
            sidebar.querySelectorAll('.tabs-btn').forEach(button => {
                button.classList.remove('active')
            });

            tabsContainer.querySelectorAll('.content').forEach(tab => {
                tab.classList.remove('active')
            });

            button.classList.add('active');
            activatTap.classList.add('active');
        })
    })
}


document.addEventListener("DOMContentLoaded", () => {
    setTabs();
})

