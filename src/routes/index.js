import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Home from '../pages/Home'
import Steel from '../pages/Steel'
import Concrete from '../pages/Concrete'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import resolveRoute from '../utils/resolveRoute'
import getPath from '../utils/getPath'

/* Routes */
const routes = {
    '/': Home,
    '/acero': Steel,
    '/concreto': Concrete,
    '/about': About
}


const router = async () => {

    const footer = null || document.querySelector('.footer')
    const main = null || document.querySelector('.main')


    footer.innerHTML = await Footer()

    let path = getPath()
    let route  = await resolveRoute(path)
    let render = routes[route] ? routes[route] : Error404 
    main.innerHTML = await render()

    console.log(`${path} path`)
    console.log(`${route} ruta`)
}

export default router 