document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,


        navigation: {
            nextEl: '.scrolldx',
            prevEl: '.scrollsx',
        },

    });

    let open = false

    const nav = document.querySelector("#nav")
    const width = nav.getBoundingClientRect().width

    const menu = document.querySelector("#menu")

    const blur = document.querySelector("#blur")
    nav.style.transform= `translateX(-${width}px)`

    menu.addEventListener("click", () => {
        open = !open
        menu.classList.toggle ("open")
        blur.classList.toggle ("visible")
        if (open) {
            nav.style.transform= `translateX(0)`
            console.log(nav.style)
            blur.style.display="block"
        }
        else {
            nav.style.transform= `translateX(-${width}px)`
            setTimeout(()=>{blur.style.display="none"},500)
        }
    })

})