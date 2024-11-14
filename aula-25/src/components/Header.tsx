interface HeaderProps{
    content: string
}

export function Header(props:HeaderProps){
    return(
        <header className="w-full text-center bg-slate-600 text-slate-50 font-medium gap-4 p-6">{props.content}</header>
    )
}