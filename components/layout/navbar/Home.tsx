import React from 'react'
import Image from 'next/image'
import { Logo } from '../../../public'


const style = {
    container: 'flex items-center',
    title: 'font-bold font-inter text-xl text-white ml-4'
}

const Home = () => {
    return (
        <div className={style.container}>
            <Image
                src={Logo}
                width={120} 
                height={60} 
                alt="Telkom Joblancer Icon" 
            />
        </div>
    )
}

export default Home