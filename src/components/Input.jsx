import { forwardRef } from "react";
const Input=forwardRef(function({type, label, textarea}, ref)
{
    return(
       <>
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea?<textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={ref}></textarea>:<input type={type} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={ref}></input>}
        </>
    )
})
export default Input;