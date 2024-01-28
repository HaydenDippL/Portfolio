import { useState, useEffect } from 'react'

import '../styles.css'
import '../styles/HelloWorld.css'

const message = "Hello World!My name is Hayden..."
const split = 12

const timing = [
    2500, // H
    150, // e
    200, // l
    150, // l
    200, // o
    150, //  
    250, // W
    150, // o
    150, // r
    150, // l
    150, // d
    350, // !
    1000, // M
    150, // y
    150, //  
    150, // n
    150, // a
    150, // m
    150, // e
    150, //  
    150, // i
    150, // s
    150, //  
    150, // H
    150, // a
    150, // y
    150, // d
    150, // e
    150, // n
    150, // .
    150, // .
    150  // .
]

function HelloWorld() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= message.length) return

        const timeoutID = setTimeout(() => setIndex(index + 1), timing[index])
        return () => clearTimeout(timeoutID)
    }, [index])

    return <div className='full-screen light centered'>
            {index < split ?
                <>
                    <div className='hbox'>
                        <h1 className='title whitespace'>{message.substring(0, index)}</h1>
                        <div className={`typer-line-title ${(timing[index] ?? Infinity) > 500 ? 'animated' : ''}`}></div>
                    </div>
                    <div className='hbox'>
                        <h2 className='large-text'></h2>
                    </div>
                </> : 
                <>
                    <div className='hbox'>
                        <h1 className='title whitespace'>{message.substring(0, split)}</h1>
                    </div>
                    <div className='hbox'>
                        <h2 className='large-text whitespace'>{message.substring(split, index)}</h2>
                        <div className={`typer-line-large ${(timing[index] ?? Infinity) > 500 ? 'animated' : ''}`}></div>
                    </div>
                </>
            }
    </div>
}

export default HelloWorld