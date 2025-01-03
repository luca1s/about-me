import { skills } from "@/data/skills"

export default function Skills({ reference }) {
    / * 3.5 rem is navbar height * /
    return (
        <div className="h-max bg-black p-4" ref={reference} style={{ scrollMargin: "3.5rem" }}>
            <div className="flex items-center flex-col h-full">
                <h1 className="text-4xl text-white">Skills</h1>
                <div className="flex flex-wrap justify-center max-w-full p-4 gap-4">
                    {skills.map(skill =>
                        <div key={skill} className="outline outline-cyan-500 w-96 items-center p-2 rounded-md">
                            <p className="text-white text-lg">{skill}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}