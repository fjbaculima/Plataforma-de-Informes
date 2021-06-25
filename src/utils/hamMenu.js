

const hamMenu = () => {
    let nav = document.querySelector('.header-nav')
    let ham = document.querySelector('.ham')
    let itemHome = document.querySelector('#nav-home')
    let itemConcrete = document.querySelector('#nav-concrete')
    let itemSteel = document.querySelector('#nav-steel')
    let itemAbout = document.querySelector('#nav-about')


    if(ham || itemHome || itemConcrete || itemSteel || itemAbout) {
        ham.addEventListener("click", () => {
            nav.classList.toggle("showHeaderNav")
            ham.classList.toggle("showClose")
        })

        itemHome.addEventListener("click", () => {
            nav.classList.toggle("showHeaderNav")
            ham.classList.toggle("showClose")
        })

        itemConcrete.addEventListener("click", () => {
            nav.classList.toggle("showHeaderNav")
            ham.classList.toggle("showClose")
        })

        itemSteel.addEventListener("click", () => {
            nav.classList.toggle("showHeaderNav")
            ham.classList.toggle("showClose")
        })

        itemAbout.addEventListener("click", () => {
            nav.classList.toggle("showHeaderNav")
            ham.classList.toggle("showClose")
        })
    }
    }
    

export default hamMenu