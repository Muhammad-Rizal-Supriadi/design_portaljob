import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LogoWhite } from '../../public'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const style = {
    container: 'flex flex-col bg-primary h-screen w-screen justify-center items-center',
    imageWrapper: 'flex',
        title: 'font-black text-white text-[42px] mt-4',
    formContainer: 'flex flex-col w-[350px] sm:w-[400px]',
    line: 'h-[1px] my-8 bg-white',
    input: 'shadow-lg drop-shadow-lg border rounded w-full py-2 px-3 text-white placeholder:text-white focus:outline-none focus:border-2 placeholder:focus:text-white bg-transparent mt-8',
    button: 'shadow-lg bg-white broder rounded py-2 px-3 text-primary font-bold w-full hover:bg-primary-light',
    linkBack: 'flex place-self-start text-white text-sm hover:bg-primary-dark items-center rounded py-2 px-3 mt-8'
}

const login = () => {
    return (
        <div className={style.container}>
            <Image
                src={LogoWhite}
                width={220}
                height={220}
                alt="Logo White"
            /> 
            <p className={style.title}>JobLancer</p>
            <form className={style.formContainer}>
                <input className={style.input} autoComplete="off" type="text" placeholder="Username" name='username'/>
                <input className={style.input} autoComplete="off" type="password" placeholder="Password" name='password'/>
                <span className={style.line}></span>
                <button className={style.button} type='submit'>LOGIN</button>
                <Link href='/'><a className={style.linkBack}><ArrowLeftIcon width="18px" fill='#FFFFFF' className={'mr-2'} />kembali</a></Link>
            </form>
        </div>
    )
}

export default login