import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    currentProjectId: undefined,
    projects: [],
  });


  function handleCreateNewProject()
  {
    setProjectState((projectState)=>{return {...projectState, currentProjectId:null}});
  }
  function handleCancel()
  {
    setProjectState((projectState)=>{return{...projectState, currentProjectId:undefined}});
  }


  function handleSaveProject(title, desc, date)
  {
    const newProject = { title, desc, date, id: Math.random().toString()};
    setProjectState((prevState)=>{
      return {...prevState, projects:[...prevState.projects, newProject]}});
    console.log(projectState);
    setProjectState((prevState)=>{return {...prevState, currentProjectId:undefined}});
  }
  function handleDeleteProject(key)
  {
      setProjectState((prevState)=>{
        return{...prevState, projects:prevState.projects.filter((project)=>{return project.id!==key}),
        currentProjectId:undefined}});
      console.log(projectState);
      setTimeout(()=>{console.log(projectState)}, 3000);
  }


  function handleSelectProject(id)
  {
    setProjectState((prevState)=>{return {...prevState, currentProjectId:id}});
    console.log("hii");
  }

  let content=null;
  if(projectState.currentProjectId===undefined)
  {
    content=<NoProjectSelected onCreateNewProject={handleCreateNewProject}/>
  }
  else if(projectState.currentProjectId===null)
  {
    content=<NewProject handleProject={handleSaveProject} handleCancel={handleCancel}/>
  }
  else 
  {
    content=<SelectedProject project={projectState.projects.find((project)=>{return project.id===projectState.currentProjectId})} onDelete={handleDeleteProject}/>
  }
  
  
  
    return (
    <>
      <main className="flex h-[100dvh] w-[100dvw]">
        <Sidebar onCreateNewProject={handleCreateNewProject} projects={projectState.projects} handleDelete={handleDeleteProject} handleSelectProject={handleSelectProject}/>
        {content}

      </main>
    </>
  );
}

export default App;
