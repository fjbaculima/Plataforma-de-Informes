import hamMenu from './utils/hamMenu'
//import router from './routes/index'
import Header from './templates/Header'
//import getPath from './utils/getPath'
import getPath from './utils/getPath'
import resolveRoute from './utils/resolveRoute'
import Footer from './templates/Footer'


import Home from './pages/Home'
import Steel from './pages/Steel'
import Concrete from './pages/Concrete'
import About from './pages/About'
import Error404 from './pages/Error404'

import './styles/sytles.css'

(async function App() {
    const header = null || document.querySelector('.header')
    header.innerHTML = await Header()

    const footer = null || document.querySelector('.footer')
    footer.innerHTML = await Footer()

    /* const routes = {
        '/': Home,
        '/acero': Steel,
        '/concreto': Concrete,
        '/about': About
    } */
    hamMenu()

    const home = document.querySelector('#nav-home')
    const steel = document.querySelector('#nav-steel')
    const concrete = document.querySelector('#nav-concrete')
    const about = document.querySelector('#nav-about')
    const main = document.querySelector('.main')

    

    const renderHome = () => {
        main.innerHTML = Home()
    }

    const renderSteel = () => {
        main.innerHTML = Steel()
    }

    const renderConcrete = () => {
        main.innerHTML = Concrete()
    }

    const renderAbout = () => {
        main.innerHTML = About()
    }

    home.addEventListener('click', renderHome)
    steel.addEventListener('click', renderSteel)
    concrete.addEventListener('click', renderConcrete)
    about.addEventListener('click', renderAbout)    //Importa desde otro archivo

    
    
    

    window.addEventListener('load', renderHome)


    /* const buttonSteel = await document.querySelector('#steel-home-button')
    const buttonConcrete = await document.querySelector('#concrete-home-button')

    buttonSteel.addEventListener('click', renderSteel)
    buttonConcrete.addEventListener('click', renderConcrete) */

    //window.addEventListener('hashchange', router)
})()  






