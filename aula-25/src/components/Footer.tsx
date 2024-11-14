interface FooterProps{
    value: string
}

export function Footer(props: FooterProps){
    return(
        <footer className="w-full text-center bg-slate-600 text-slate-50 font-medium gap-4 p-6">{props.value}</footer>
    )
}