import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'

export default function App() {
  
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(window.localStorage.getItem("darkmode")|| "false"));
  useEffect(()=>{
    window.localStorage.setItem("darkmode", JSON.stringify(darkMode))
  },[darkMode])
  function themeSwitch(){setDarkMode((prev) => !prev)}

  
  return (
  <div className={darkMode ? "dark" : "light"}>
    <header >
      <Navbar themeSwitch={themeSwitch} darkmode={darkMode}/>
    </header>
    <div className={"container"+(darkMode ? " dark" : " light")}> 
      <Routes>
        <Route path ="/" element={<Home darkmode={darkMode} />}/>
        <Route path ="/About" element={<About darkmode={darkMode}/>}/>
        <Route path ="/Projects" element={<Projects />}/>
        <Route path ="/Contact" element={<Contact darkmode={darkMode} />}/>
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

