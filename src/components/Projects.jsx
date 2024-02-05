import BadgerBasketball from './projects/BadgerBasketball'

import '../styles.css'

function Projects() {
    return <>
        <div className='full-screen dark centered'>
            <h1 className='title'>Projects</h1>
            <p className='large-text'>A quick overview of my work</p>
        </div>
        <BadgerBasketball/>
    </>
}

export default Projects