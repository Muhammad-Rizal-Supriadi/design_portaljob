import { FC } from 'react'
import Navbar from './navbar/Navbar'


const style = {
    container: 'flex flex-col'
}

type Props = {
    children: JSX.Element
}

const LandingLayout: FC<Props> = ({children}) => {
    return (
        <div className={style.container}>
            <Navbar />
            {children}
        </div>
    )
}

export default LandingLayout