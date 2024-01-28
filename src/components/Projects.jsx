import BakkeScheduleLedger from '../assets/BadgerBasketball'

import GitHubLink from './GitHubLink'

import '../styles.css'

function Projects() {
    return <>
        <div className='full-screen dark centered'>
            <h1 className='title'>Projects</h1>
            <p className='large-text'>A quick overview of my work</p>
        </div>
        <div className='dark left'>
            <h1 className='title'>UW Open Rec Roster</h1>
            <GitHubLink link='https://github.com/HaydenDippL/BadgerBasketball'/>
            <div className='hbox'></div>
            <div className='invisible-card left'>
                <h2>The Problem</h2>
                <p>My friends and I are avid basketball players and we found that the website which displayed the basketball court schedules was deficient.</p>
                <ol>
                    <li>It took 4 links to navigate to it</li>
                    <li>It usually didn't load properly on our phones</li>
                    <li>It was ledger, making it hard to pinpoint just the basketball court availability</li>
                    <li>You need to view two separate pages for the two different gyms</li>
                </ol>
                <p>This all made viewing the court schedules very annoying, especially from your phone where you could not just CTRL+F basketball.</p>
            </div>
            <img src={BakkeScheduleLedger}/>
        </div>
    </>
}

export default Projects