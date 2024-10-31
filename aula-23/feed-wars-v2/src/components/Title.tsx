interface TitleProps {
    value: string
}

export function Title(props: TitleProps){
    return <h1>{props.value}</h1>
}
