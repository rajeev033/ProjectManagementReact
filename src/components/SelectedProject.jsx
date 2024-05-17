function SelectedProject({ project, onDelete }) {
  const date = new Date(project.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16 ml-20">
      <div className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-red-500 hover:text-red-800 transition-colors"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
      </div>
    </div>
  );
}
export default SelectedProject;
