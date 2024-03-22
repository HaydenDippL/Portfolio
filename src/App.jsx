import { useState, useEffect } from 'react'

import HelloWorld from './components/HelloWorld'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

import './App.css'

function App() {
    const [mobile, set_mobile] = useState(false)

    useEffect(() => {
        function handle_resize() {
            set_mobile(window.innerWidth < 1000)
            console.log(window.innerWidth)
        }

        handle_resize()
        window.addEventListener('resize', handle_resize)
        return () => window.addEventListener('resize', handle_resize)
    }, [])

    return <>
        { !mobile ? 
        <>
            <HelloWorld/>
            <AboutMe/>
            <Projects/>
            <ContactMe/>
        </> :
        <p style={{fontSize: '60px'}}>
            This site is best experienced on a wider screen. Try expanding your window if on a computer, or switching to your computer if you are on mobile
        </p>
        }
    </>
}

export default App
