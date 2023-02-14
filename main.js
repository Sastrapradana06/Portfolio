// + Navbar Responsive
const toggler = document.querySelector('#toogle')
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
const sticky = navbar.offsetTop;
toggler.addEventListener('click', () => {
    if( menu.className === 'menu') {
        menu.classList = 'nav-menu',
        navbar.classList.add("nav-blur");
        navbar.classList.toggle("shadow-xl");
    } else {
        menu.className = 'menu'
        navbar.classList.remove("nav-blur");
        navbar.classList.remove("shadow-xl");
    }
})

// + navbar blur
    document.addEventListener("scroll", function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add("nav-blur");
            navbar.classList.toggle("shadow-xl");
        } else {
            navbar.classList.remove("nav-blur");
            navbar.classList.remove("shadow-xl");
        }
    });

// + Swipper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });









