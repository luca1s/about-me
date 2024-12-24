import { projects } from "@/data/projects"

export default function Projects({ reference }) {
    / * 3.5 rem is navbar height * /

    return (
        <div className="h-max bg-slate-950 p-4" ref={reference} style={{ scrollMargin: "3.5rem" }}>
            <div className="flex items-center flex-col h-full">
                <h1 className="text-4xl text-white">Projects + Experience</h1>
                <div className="flex flex-wrap justify-center max-w-full p-4 gap-4">
                    {projects.map(project =>
                        <div key={project.name} className="outline outline-blue-500/50 w-96 p-2 rounded-md flex flex-col gap-2">
                            {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="text-blue-500 text-lg">{project.name}</a>}
                            {!project.url && <p className="text-white text-lg">{project.name}</p>}
                            <img src={project.image} alt={project.name} className="rounded-md w-96" />
                            <div className="flex flex-row flex-wrap gap-4">
                                {project.technologies.map(technology =>
                                    <div key={technology} className="outline outline-1 outline-offset-2 p-0.5 outline-red-500/60 rounded-sm">
                                        <p className="text-gray-400 text-sm">{technology}</p>
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}