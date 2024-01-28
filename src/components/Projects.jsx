import BakkeScheduleLedger from '../assets/BakkeScheduleLedger.png'
import WebsiteConcept from '../assets/WebsiteConcept.jpg'
import MobileAppConcept from '../assets/MobileAppConcept.jpg'
import WebScreenShot from '../assets/WebScreenShot.png'

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
            <div className='hbox mega-margin'>
                <div className='invisible-card left'>
                    <h2 className='large-text medium-margin'>The Problem</h2>
                    <p>My friends and I are avid basketball players and we found that the website which displayed the basketball court schedules was deficient.</p>
                    <ol>
                        <li>It took 4 links to navigate to it</li>
                        <li>It usually didn't load properly on our phones</li>
                        <li>It was ledger, making it hard to pinpoint just the basketball court availability</li>
                        <li>You need to view two separate pages for the two different gyms</li>
                    </ol>
                    <p>This all made viewing the court schedules very annoying, especially from your phone where you could not just CTRL+F basketball. The schedules frequently would change and, as an employee of one of the gyms, I would regularly have to tell members that they were out of luck as the sport they were hoping to play -- basketball, badminton, pickelball, futsal, or volleyball -- was not hosted by our courts that day.</p>
                </div>
                <img src={BakkeScheduleLedger} className='desktop-screenshot' style={{marginTop: '100px'}}/>
            </div>
            <div className='hbox mega-margin'>
                <div className='invisible-card left'>
                    <h2 className='large-text medium-margin'>The Idea</h2>
                    <p>I wanted to create a website that was <b>mobile friendly</b> and <b>easy to read</b>. The idea I ultimately landed on was to create a visual schedule, similar to google calendar with the courts at each gym. The different sports would be color coded so that they would be easily recognized.</p>
                </div>
                <img src={WebsiteConcept} className='desktop-screenshot'/>
                <img src={MobileAppConcept} className='desktop-screenshot'/>
            </div>
            <div className='hbox mega-margin'>
                <div className='invisible-card left'>
                    <h2 className='large-text small-margin'>How I Built</h2>
                    <a href='www.uwopenrecroster.com'><h2 className='small-text large-margin'>UW Open Rec Roster</h2></a>
                    <p className='large-margin'>The website is a vite react app hosted on DigitalOceans.com with a domain name from DreamHost.com. The website interacts with a backend to get the dialy schedules from the recwell API. These schedules are memoized serverside daily, as to not overwhelm the recwell API. Additionally, the backend logs requests to track our backend calls. The DB was managed by my friend Bailey Kau.</p>
                    <h2 className='medium-text small-margin'>What did I learn while making the website?</h2>
                    <ul>
                        <li><b>CSS Psuedo-Elements</b>: I was having serious issues with my styling and lag. Resizing the window would destroy the positioning of the hour mark lines and times themselves. I did some searching and found psuedo-elements `::before` and `::after`.</li>
                        <li><b>CSS Animations</b>: I wanted to add a skeleton loading animation to my website to show that the data was loading. I was able to learn about animation past the transition attribute.</li>
                        <li><b>Deploying a Web-App and Backend</b>: This project was really the first time I needed to deploy a project. I learned how to deploy not just on the macro-scale with pre-built deployers, but using NGINX. For the backend I had a blank vm, and had to configure it. I also learned how to use domain names in this project, giving both my frontend and backend unique domain names.</li>
                    </ul>
                </div>
                <img src={WebScreenShot} className='desktop-screenshot'/>
            </div>
        </div>
    </>
}

export default Projects