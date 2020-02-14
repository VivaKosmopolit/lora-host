window.onscroll = () => {
    checkOffset();
};

// LogIn modal window function
function modalFunc() {
    const modal = document.querySelector('.modal-login');
    const overlay = document.querySelector('.overlay');

    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    } else {
            modal.classList.add('active');
            overlay.classList.add('active');
        }

    overlay.addEventListener('click', () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });

    const modalClose = document.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
}


// Check window position & navigation add class function
function checkOffset () {
    let nav = document.querySelector('.header-top');
    if (window.pageYOffset > 100) {
        nav.classList.add('nav-fixed');
    } else if (window.pageXOffset <= 990) {
        nav.classList.remove('nav-fixed');
    } else {
        nav.classList.add('nav-fixed');
        nav.style.animation = 'unset';
    }
}

// To top button function
$('.to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

// Scroll reveal parameters
ScrollReveal().reveal('.choose-item', {
    origin: 'bottom',
    distance: '300px',
    interval: 200,
    duration: 1500,
    /*    delay: 100*/
});

// Test of value check function
let subInp = document.getElementById('sub').value;
let subText = document.querySelector('.sub_label');

function checkValue() {
    if (subInp.value == null) {
        subText.innerHTML = "Zapolni pole!"
    } else {

    }
}

// Slick-slider function parameters
$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.slick-header').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 590,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// Hamburger Button function
function btn(e) {
    let mobNav = document.querySelector('.mobile-menu');
    if (e.className == 'burger-wrapper') {
        mobNav.style.display = 'block';
        e.classList.add('burger-wrapper_active');
    } else {
        mobNav.style.display = 'none';
        e.classList.remove('burger-wrapper_active');
    }
}

// Tab function for Price section
window.onload = function () {
    document.querySelector('.tabs-header').addEventListener('click', fTabs);
    function fTabs(e) {
        if (e.target.className == 'tab-li') {
            let dataTab = e.target.getAttribute('data-tab');
            let tabLi = document.getElementsByClassName('tab-li');
            for (let i = 0; i < tabLi.length; i++) {
                tabLi[i].classList.remove('active-tab');
            }
            e.target.classList.add('active-tab');
            let tabBody = document.getElementsByClassName('tab-b');
            for (let i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                } else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    }
};