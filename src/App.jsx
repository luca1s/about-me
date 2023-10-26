import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Info from '@/components/Info';
import Contact from '@/components/Contact';
import { useRef } from 'react';

function App() {

  // Reference to main div in Contact component
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' })
  const scrollSkills = () => skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  const scrollProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  const scrollAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <nav className="bg-blue-900 p-4 sticky top-0 h-14	">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a onClick={scrollAbout} className="text-white hover:text-blue-300">About Me</a>
            <a onClick={scrollProjects} className="text-white hover:text-blue-300">Projects</a>
            <a onClick={scrollSkills} className="text-white hover:text-blue-300">Skills</a>
          </div>
          <div>
            <a onClick={scrollContact} className="text-white hover:text-blue-300">Contact Me</a>
          </div>
        </div>
      </nav>
      <Info reference={aboutRef} />
      <Projects reference={projectsRef} />
      <Skills reference={skillsRef} />
      <Contact reference={contactRef} />
    </>
  )
}

export default App;