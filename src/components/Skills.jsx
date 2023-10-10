import { skills } from "@/data/skills"

export default function Skills() {
    return (
        <div className="h-max dark:bg-black p-4">
            <div className="flex items-center flex-col h-full">
                <h1 className="text-4xl text-white">Skills</h1>
                <div className="flex flex-wrap justify-center max-w-full p-4 gap-4">
                    {skills.map(skill =>
                        <div key={skill.name} className="outline outline-cyan-500 w-96 items-center p-2 rounded-md">
                            <p className="text-white text-lg">{skill.name}</p>
                            <p className="text-gray-400 text-sm">{skill.experience}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}