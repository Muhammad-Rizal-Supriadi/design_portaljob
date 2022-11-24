import React from 'react'
import FullNavbar from './FullNavbar'
import Home from './Home'
import Menu from './Menu'


const style = {
    container: 'w-full z-10 p-4'
}

const Navbar = () => {
    return (
        <header className={style.container}>
            <FullNavbar>
                <Home />
                <Menu />
            </FullNavbar>
        </header>
    )
}

export default Navbar