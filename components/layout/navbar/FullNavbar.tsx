import { FC } from 'react'


const style = {
    container: 'container flex items-center justify-between mx-auto'
}

type Props = {
    children: JSX.Element|JSX.Element[]
}

const FullNavbar: FC<Props> = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default FullNavbar