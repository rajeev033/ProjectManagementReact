function Sidebar({
  onCreateNewProject,
  projects,
  handleDelete,
  handleSelectProject,
}) {
  return (
    <aside className="w-[30%] basis-[25%] px-6 py-16 bg-[#fff7e3] text-stone-50 md:w-72 rounded-r-xl overflow-scroll">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-[#4b4b4b]">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onCreateNewProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-800 text-[white] hover:bg-blue-900 hover:text-stone-50 transition-colors"
        >
          +Add Projects
        </button>
      </div>
      <ul>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="flex bg-gray-800 justify-between items-center py-4 px-3 border-b my-2 rounded-lg  border-stone-800 hover:bg-gray-900 transition-colors"
            >
              <div
                onClick={() => handleSelectProject(project.id)}
                className="w-[75%]"
              >
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm">{project.date}</p>
              </div>
              <button
                className="text-red-600 w-[25%] hover:text-red-800 transition-colors"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Sidebar;
