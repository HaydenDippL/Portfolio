import { useState, useEffect } from 'react'

import '../styles.css'
import '../styles/HelloWorld.css'

const message = [
    [2000, 'H'],//268
    [192, 'e'],
    [79, 'l'],
    [131, 'l'],
    [174, 'o'],
    [157, ' '],
    [213, 'W'],
    [132, 'o'],
    [102, 'r'],
    [89, 'l'],
    [112, 'd'],
    [812, '!'],
    [1200, 'Enter'],
    [698, 'M'],
    [257, 'y'],
    [83, ' '],
    [146, 'n'],
    [508, 'a'],
    [75, 'm'],
    [95, 'e'],
    [89, ' '],
    [134, 'i'],
    [88, 's'],
    [77, ' '],
    [239, 'H'],
    [157, 'a'],
    [67, 'y'],
    [135, 'd'],
    [66, 'e'],
    [86, 'n'],
    [239, '.'],
    [218, '.'],
    [219, '.'],
]

let split
message.forEach(([time, ch], i) => {
    if (ch == 'Enter') split = i
})

function HelloWorld() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= message.length) return

        const timeoutID = setTimeout(() => setIndex(index + 1), message[index][0])
        return () => clearTimeout(timeoutID)
    }, [index])

    function get_message(start, end) {
        return message.slice(start, end).reduce((acc, [time, ch]) => {
            return acc + ch
        }, '')
    }

    let animated = index >= message.length || message[index][0] > 500 ? 'animated' : ''
    let blinker_upper = index <= split ? 'blinker' : ''
    let blinker_lower = index > split ? 'blinker' : ''

    return <div className='light center-horiz' style={{marginTop: '30vh', height: '70vh'}}>
        <div className='hbox'>
            <h1 className='title whitespace'>{get_message(0, Math.min(index, split))}</h1>
            {blinker_upper && <div className={`blinker blinker-title ${animated}`}/>}
        </div>
        <div className='hbox'>
            <h2 className='large-text whitespace'>{get_message(split + 1, Math.min(index, message.length))}</h2> 
            {blinker_lower && <div className={`blinker blinker-large ${animated}`}/>} 
        </div>
    </div>
}

export default HelloWorld