import React from 'react'
import Link from 'next/link'


const style = { 
    container: 'md:flex hidden',
    menus: 'font-inter text-sm text-white rounded-md hover:bg-primary duration-500 py-2 px-6'
}

const Menu = () => {
    return (
        <div className={style.container}>
            <Link href='/'><a className={style.menus}>Beranda</a></Link>
            <Link href='/about'><a className={style.menus}>Tentang</a></Link>
            <Link href='/service'><a className={style.menus}>Layanan</a></Link>
            <Link href='/contact'><a className={style.menus}>Kontak</a></Link>
            <Link href='/auth/login'><a className={style.menus}>Login</a></Link>
        </div>
    )
}

export default Menu