import { Row, Col } from 'react-bootstrap'

import '../styles.css'

function AboutMe() {
    return <div className='extra-full-screen dark centered'>
        <h1 className='title' style={{
            marginBottom: '80px'
        }}>About Me</h1>
        <Row>
            <Col sm={12} md={6}>
                <div className='invisible-card'>
                    <h1 className='large-text'>School</h1>
                    <p className='small-text'>I am attending the University of Wisconsin-Madison. I will be graduating in the winter of 2024-2025</p>
                </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
                <div className='invisible-card left'>
                    <p className='large-text no-margin'>Studies</p>
                    <p className='small-text no-margin'>Algorithms</p>
                    <p className='small-text no-margin'>Artificial Intelligence</p>
                    <p className='small-text no-margin'>UI/UX</p>
                    <p className='small-text no-margin'>Software Development</p>
                    <p className='small-text no-margin'>Game Development</p>
                </div>
            </Col>
        </Row>
    </div>
}

export default AboutMe