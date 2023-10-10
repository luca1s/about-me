import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Info from '@/components/Info';
import Contact from '@/components/Contact';
import { useRef } from 'react';

function App() {

  // Reference to main div in Contact component
  const contactRef = useRef(null);
  const scrollContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Info scrollContact={scrollContact} />
      <Projects />
      <Skills />
      <Contact reference={contactRef} />
    </>
  )
}

export default App;