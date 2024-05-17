import {useRef, useState} from 'react';
import Input from './Input';
import Button from './Button';
import Modal from './Modal';
function NewProject({handleProject, handleCancel})
{
    const titleRef = useRef();
    const descRef=useRef();
    const dateRef=useRef();
    const modalRef=useRef(null);
    function handleSave()
    {   
        const title=titleRef.current.value;
        const desc=descRef.current.value;
        const date=dateRef.current.value;
        if(title==='' || desc==='' || date==='')
        {
            modalRef.current.showModal();
            return;
        }
        console.log(title,desc,date);
        handleProject(title, desc, date);
    }
    return(
        <div className='width-[40rem] mt-20 flex flex-col gap-8'>
            <ul className='flex gap-4 flex-row-reverse justify-start'>
                <li><Button onClick={handleSave}>save</Button></li>
                <li><Button cancel onClick={handleCancel}>cancel</Button></li>
            </ul>
            <div className='flex flex-col gap-4 ml-8 w-[40dvw]'>
                <Input type="text" label="Project Title" ref={titleRef}/>
                <Input type="textarea" label="project Description" textarea ref={descRef}/>
                <Input type="date" label="Due Date" ref={dateRef}/>
            </div>
            <Modal ref={modalRef}>
                <h2 className="text-[1.5rem] font-medium">Please fill all the fields!</h2>
            </Modal>
        </div>
    )

}
export default NewProject;