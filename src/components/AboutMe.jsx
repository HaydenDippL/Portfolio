import { Row, Col } from 'react-bootstrap'

import '../styles.css'
import '../styles/Projects.css'

function AboutMe() {
    return <div className='extra-full-screen dark centered'>
        <div style={{marginTop: '20vh'}}>
            <h1 className='title' style={{
                marginBottom: '80px'
            }}>About Me</h1>
            <div className='left' style={{width: '40vw', fontSize: '30px', fontWeight: '300'}}>
                <p>My name is Hayden Dippel and I am a <ins>Junior</ins> at <ins>UW-Madison</ins>. I am studying <ins>computer science and data science</ins> with a <ins>3.877</ins> GPA. I am graduating in the <ins>winter of 2024-2025</ins>.</p>
                <p>I am extremely passionate about programming, loving the challenges and puzzles that each problem presents and the continued learning that come along with it.</p>
                <p>I have experience in the following...</p>
                <ul>
                    <li>Frontend Programming - UI/UX</li>
                    <li>Backend Engineering</li>
                    <li>Machine Learning</li>
                    <li>Data Handing and Visualization</li>
                </ul>
            </div>
        </div>
    </div>
}

export default AboutMe