import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhatAreSkills from './components/WhatAreSkills.jsx'
import HowTheyWork from './components/HowTheyWork.jsx'
import QuickStart from './components/QuickStart.jsx'
import Anatomy from './components/Anatomy.jsx'
import Frontmatter from './components/Frontmatter.jsx'
import BestPractices from './components/BestPractices.jsx'
import AdvancedPatterns from './components/AdvancedPatterns.jsx'
import Troubleshooting from './components/Troubleshooting.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatAreSkills />
        <HowTheyWork />
        <QuickStart />
        <Anatomy />
        <Frontmatter />
        <BestPractices />
        <AdvancedPatterns />
        <Troubleshooting />
      </main>
      <Footer />
    </>
  )
}
