import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import AllProjects from './components/AllProjects.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import Contact from './components/Contact.jsx'  
import Skills from './components/Skills.jsx'
import Final from './components/Final.jsx'

function App() {
  return (

    <Routes>

      <Route element={<RootLayout />}>

        <Route
          index element={
            <>
              <Hero />
              <Skills />
              <Final />
              <Contact/>
            </>
            
          }
        />
        <Route
      path="/projects"
      element={<AllProjects />}
    />


      </Route>

    </Routes>

  )
}

export default App
