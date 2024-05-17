import Button from './Button';
import noProjectImage from '../assets/no-projects.png';
function NoProjectSelected({onCreateNewProject})
{
    return(
        <div className='flex flex-col h-[100dvh] justify-center items-center gap-4 basis-[70%] m-[0] bg-[white]'>
            <img src={noProjectImage} alt="notepad image" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className="text-2xl font-bold text-[grey]">No Project Selected</h2>
            <Button onClick={onCreateNewProject}>+Create New Project</Button>
        </div>
    )
}
export default NoProjectSelected;