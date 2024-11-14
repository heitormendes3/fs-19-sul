interface CardProps{
    title: string
    subtitle: string
    content: string
    footer: string
}

export function Card(props: CardProps){
    return(
        <>
        <div className="flex flex-col h-52 w-80 gap-4 p-4 m-3  max-w-screen rounded-md border-2 border-slate-300 shadow-inner ">
            
            <h1 className="">{props.title}</h1>
            
            <h2 className="text-sm font-medium leading-none text-slate-500">{props.subtitle}</h2>
            <h3>{props.content}</h3>
            <hr />
            <h3>{props.footer}</h3>

        </div>
        </>
        
    )
}