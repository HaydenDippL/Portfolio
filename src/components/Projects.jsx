import BadgerBasketball from './projects/BadgerBasketball'
import Donut from './projects/Donut'
import EvSelect from './projects/EvSelect'

import '../styles.css'

function Projects() {
    return <>
        <div className='full-screen dark centered'>
            <h1 className='title'>Projects</h1>
            <p className='large-text'>Some of my favorite work</p>
        </div>
        <BadgerBasketball/>
        <div className='spacer waves1'/>
        <EvSelect/>
        <div className='spacer waves2'/>
        <Donut/>
    </>
}

export default Projects