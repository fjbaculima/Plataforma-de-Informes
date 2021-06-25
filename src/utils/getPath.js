const getPath = () => {
    //location.pathname.toLocaleLowerCase() || '/'
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
}

export default getPath