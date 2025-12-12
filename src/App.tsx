import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import pfp from "./images/pfp2.jpeg";

export default function App() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 flex flex-col items-center text-center gap-2">
          <h1 className="text-4xl font-bold text-white">Luc Francis</h1>
          <img
            src={pfp}
            alt="Luc Francis"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <p className="text-xl text-gray-300">Software Engineer & Private Pilot</p>
          <div className="flex justify-center items-center gap-3">
            <a
              href="mailto:luc@luca1s.tech"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>luc@luca1s.tech</span>
            </a>
            <a
              href="https://github.com/luca1s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/luca1s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </header>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>
          <div className="space-y-8 flex flex-col gap-2">
            {experience.map((job, index) => <div key={index} className="border-l-2 border-blue-500 pl-5 flex flex-col gap-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-medium text-white">{job.position}</h3>
                <span className="text-sm text-gray-400">{job.startDate} - {job.endDate}</span>
              </div>
              <p className="text-blue-400 font-medium">{job.companyName}</p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded">
                  {tech}
                </span>)}
              </div>
              <ul className="space-y-1 list-disc list-inside mt-1">
                {job.responsibilities.map((responsibility, respIndex) => <li key={respIndex} className="text-gray-300 text-sm leading-relaxed marker:text-blue-400">
                  {responsibility}
                </li>)}
              </ul>
            </div>)}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((project, index) => <div key={index} className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-3 flex flex-col items-center gap-4">
              <div className='flex flex-col gap-2'>
                {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-medium text-blue-400 hover:text-blue-300">{project.name}</h3>
                </a> : <h3 className="text-lg font-medium text-white">{project.name}</h3>}
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded">
                    {tech}
                  </span>)}
                </div>
              </div>
              <img src={project.image} alt={project.name} className="w-full rounded mb-4" />
            </div>)}
          </div>
        </section>
      </div>
    </div>
  );
}