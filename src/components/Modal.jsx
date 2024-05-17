import { forwardRef } from "react"
const Modal=forwardRef (function ({ children}, ref)
{

    function onClose()
    {
        ref.current.close();
    }
    return(
        <dialog ref={ref}>
            <div className="fixed inset-0 bg-[#181818b6] bg-opacity-80 flex justify-center items-center">
                <div className="bg-stone-200 p-4 rounded-md h-[28dvh] w-[28dvw] flex flex-col gap-4 justify-center items-center">
                   {children}
                    <div className="flex">
                        <button onClick={onClose} className="text-[1.1rem] text-red-600 px-2 py-1 hover:text-red-700">close</button>
                    </div>
                </div>
            </div>
        </dialog>
    )
});
export default Modal;