function Button({children, cancel,onClick, ...props})
{
    return(
        <button onClick={onClick} className={cancel?"text-[1rem] text-red-600 px-2 py-2":"text-[1rem] px-4 py-1 rounded-md bg-blue-800 text-stone-50 hover:bg-blue-900 transition-colors"} {...props}>
            {children}
        </button>
    )
}
export default Button;