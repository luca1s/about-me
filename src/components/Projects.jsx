import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <div className="h-max dark:bg-slate-950 p-4">
            <div className="flex items-center flex-col h-full">
                <h1 className="text-4xl text-white">Projects</h1>
                <div className="flex flex-wrap justify-center max-w-full p-4 gap-4">
                    {projects.map(project =>
                        <div key={project.name} className="outline outline-blue-500 w-96 p-2 rounded-md flex flex-col justify-between">
                            {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="text-blue-500 text-lg">{project.name}</a>}
                            {!project.url && <p className="text-white text-lg">{project.name}</p>}
                            <img src={project.image} alt={project.name} className="rounded-md w-96 mt-2" />
                            <p className="text-gray-400 text-sm">{project.description}</p>
                            <div className="flex flex-row gap-4 mt-2">
                                {project.technologies.map(technology =>
                                    <div className="outline outline-1 outline-offset-4 outline-red-500/60 rounded-sm">
                                        <p className="text-gray-400 text-sm">{technology}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}