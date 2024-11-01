const nav = document.querySelector('#nav');
const fixedNav = document.querySelector('#fixed-nav');
let navbarHeight = nav.getBoundingClientRect().height;
let navLinks = document.querySelectorAll('#nav-links a');
const backButton = document.querySelector('#back-button');
let navIcon = document.querySelector('.ri-menu-line');
let fixedNavIcon = document.querySelector('#fixed-nav .ri-menu-line')
let nav2 = document.querySelector('#home #nav-links-two');
let nav2List  = document.querySelector('#nav-links-two #links-list');
let nav2ListHeight = nav2List.getBoundingClientRect().height;
let fixedNav2 = document.querySelector('#home #fixed-nav-links-two');
let fixedNav2List  = document.querySelector('#fixed-nav-links-two #links-list');
let fixedNav2ListHeight = fixedNav2List.getBoundingClientRect().height;
let flag = 0;
let flag2 = 0;

navIcon.addEventListener ('click', () => {
    if(flag === 0) {
        nav2.style.height = nav2ListHeight + 'px';
        flag = 1;
    }else {
        nav2.style.height = 0;
        flag = 0;
    }
});

fixedNavIcon.addEventListener ('click', () => {
    if(flag2 === 0) {
        fixedNav2.style.height = fixedNav2ListHeight + 'px';
        console.log(fixedNav2.style.height);
        flag2 = 1;
    }else {
        fixedNav2.style.height = 0;
        flag2 = 0;
    }
});

window.addEventListener('scroll', () => {
    let scrollSize = window.pageYOffset;
    
    if (scrollSize >= navbarHeight) {
        fixedNav.style.height = navbarHeight + 'px';
        nav2.style.height = 0;
        flag = 0;

    }else {
        fixedNav.style.height = 0;
        fixedNav2.style.height = 0;
        flag2 = 0;
    }

    if (scrollSize > 200) {
        backButton.style.visibility = 'visible';
    }
    else {
        backButton.style.visibility = 'hidden';
    }
});

navLinks.forEach ( (val) => {
    val.addEventListener ('click', (e) => {
        e.preventDefault();
        let id = e.target.getAttribute('href').slice(1);
        let element = document.getElementById(id);
        let topPosition = element.offsetTop;
        let scrollPosition = topPosition - navbarHeight;
        window.scroll( {
            top: scrollPosition,
            left: 0,
        } );
    });
} );
