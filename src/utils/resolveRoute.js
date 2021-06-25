/* const resolveRoute = (path, setRoutes) => {
    for (route in setRoutes){
        if (route === path){
            return route
        }
    }

    return path

} */

const resolveRoute = (route) => {
      if (route === '/') {
        //let validRoute = route === '/' ? route : '/error'
        let validRoute = '/'
        return validRoute
    }  
    return `/${route}`
} 

export default resolveRoute