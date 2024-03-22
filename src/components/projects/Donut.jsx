import {useState, useEffect} from 'react'

import DonutCode from '../../assets/DonutCode.png'
import SpinningDonut from '../../assets/SpinningDonut.png'

import render_ascii_donut from '../../scripts/donut'

import GitHubLink from '../GitHubLink'

import '../../styles.css'
import '../../styles/Projects.css'

const DONUT_GIT_REPO_URL = 'https://github.com/HaydenDippL/Donut'
const FPS = 20.0
const ms_in_frame = 1000 / FPS

const yaw_inc = 6.0 * Math.PI / 180.0
const pitch_inc = 2.5 * Math.PI / 180.0
const roll_inc = 0.0 * Math.PI / 180.0
const _2PI = 2 * Math.PI

function Donut() {
    
    const [angles, set_angles] = useState({yaw: 0.0, pitch: 0.0, roll: 0.0})
    const [is_mouse_over, set_is_mouse_over] = useState(false)
    const [relative_mouse_position_percent, set_relative_mouse_position_percent] = useState({x: null, y: null})
    const [donut, set_donut] = useState("")

    useEffect(() => {
        async function animate_donut() {
            const start_time_ms = Date.now()
            const temp_donut = render_ascii_donut(angles.yaw, angles.pitch, angles.roll)
            const end_render_ms = Date.now()
            const sleep_duration = ms_in_frame - (end_render_ms - start_time_ms)
            await sleep(sleep_duration >= 0 ? sleep_duration : 0)
            set_donut(temp_donut)
            
            // calculate new angles
            if (is_mouse_over) {
                const desired = desired_angles(relative_mouse_position_percent)
                set_angles({yaw: desired.yaw, pitch: desired.pitch, roll: 0.0})
            } else {
                let yaw = angles.yaw + yaw_inc
                let pitch = angles.pitch + pitch_inc
                let roll = angles.roll + roll_inc
                if (yaw > _2PI) yaw -= _2PI
                if (pitch > _2PI) pitch -= _2PI
                if (roll > _2PI) roll -= _2PI
                set_angles({yaw: yaw, pitch: pitch, roll: roll})
            }
        }

        function desired_angles(relative_pos) {
            const max_yaw = 35.0 * Math.PI / 180.0
            const max_pitch = 55.0 * Math.PI / 180.0

            return {
                yaw: max_yaw * relative_pos.y,
                pitch: -max_pitch * relative_pos.x
            }
        }

        animate_donut()
    }, [angles])

    function handle_mouse_move(event) {
        const rect = event.currentTarget.getBoundingClientRect()

        set_relative_mouse_position_percent({
            x: (event.clientX - rect.left - rect.width / 2) / (rect.width / 2),
            y: -(event.clientY - rect.top - rect.height / 2) / (rect.height / 2)
        })
    }

    return <div className='centered light-text' style={{backgroundColor: '#001220'}}>
        <div className='hbox'>
            <h1 className='title'>Spinning Donut</h1>
            <div style={{marginLeft: '3vw'}}>
                <GitHubLink link={DONUT_GIT_REPO_URL} size={90}/>
            </div>
        </div>
        <div className='centered'>
            <div className='vbox'>
                <div className='hbox'>
                    <img src={DonutCode} style={{
                        height: '38vh',
                        width: 'auto',
                        margin: '20px',
                        borderRadius: '20px'
                    }}/>
                    <div className='left' style={{width: '40vw'}}>
                        <p className='text'>I decided to try my hand at the infamous spinning ascii donut animation. I was proud to create this animation with almost no outside influence, no tutorials, just math (see <a href={DONUT_GIT_REPO_URL} target='_blank'>github</a> for extensive documentation).</p>
                        <p className='text'>I made this code in C++ and rewrote it to JS for this website. While creating this project I learned about...</p>
                        <ul className='text'>
                            <li>Computer Graphics and Rendering</li>
                            <li>Numerical Stability</li>
                            <li>Animation</li>
                        </ul>
                    </div>
                </div>
                <p style={{marginBottom: '-20px'}}>Hover Me!</p>
                <div id='donut-terminal'
                    onMouseOver={() => set_is_mouse_over(true)}
                    onMouseLeave={() => set_is_mouse_over(false)}
                    onMouseMove={handle_mouse_move}
                    style={{marginBottom: '30vh'}}>
                    {donut.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                </div>
            </div>
        </div>
    </div>
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default Donut;