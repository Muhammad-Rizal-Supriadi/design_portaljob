import { FC } from 'react'


const style = {
    container: 'container w-full mx-auto my-6'
}

type Props = {
    children: JSX.Element|JSX.Element[]
}

const Container: FC<Props> = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container