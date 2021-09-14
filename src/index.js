import hamMenu from './utils/hamMenu'
//import router from './routes/index'
import Header from './templates/Header'
//import getPath from './utils/getPath'
import getPath from './utils/getPath'
import resolveRoute from './utils/resolveRoute'
import Footer from './templates/Footer'

import croquisRenderInput from './templates/croquisRenderInput'
import report from './utils/report'
import reportSteel from './utils/reportSteel'


/* import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs; */



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

    //const concreteReportGen = await document.querySelector('#genPDF')

    concrete.addEventListener('click', () => {
        const concreteReportGen =  document.querySelector('#genPDF')
        concreteReportGen.addEventListener('click', report)
    })

    steel.addEventListener('click', () => {
        const steelReportGen = document.querySelector('#genPDF')
        steelReportGen.addEventListener('click', reportSteel)
    })

    //let mostrarReporte = await report()

    



    

})()  






