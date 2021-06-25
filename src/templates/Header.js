const Header = () => {
    const view = `
    <nav class="header-nav">
        <ul class="header-list-container">
            <li class="nav-item" id="nav-home">Home</li>
            <li class="nav-item" id="nav-concrete">Concreto</li>
            <li class="nav-item" id="nav-steel">Acero</li>
            <li class="nav-item" id="nav-about">About</li>
        </ul>
    </nav>

    <div class="header-main">
        <div class="header-logo">
            <a href="#"></a>
        </div>

        <div class="header-hamburger">
            <button class="ham"></button>
        </div>
    </div>
    `
    return view
}

export default Header