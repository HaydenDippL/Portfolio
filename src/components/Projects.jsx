import BakkeScheduleLedger from '../assets/BakkeScheduleLedger.png'
import WebsiteConcept from '../assets/WebsiteConcept.jpg'
import MobileAppConcept from '../assets/MobileAppConcept.jpg'
import WebScreenShot from '../assets/WebScreenshot.png'
import MobileScreenShot from '../assets/MobileScreenshot.png'

import GitHubLink from './GitHubLink'

import '../styles.css'
import '../styles/Projects.css'

function Projects() {
    return <>
        <div className='full-screen dark centered'>
            <h1 className='title'>Projects</h1>
            <p className='large-text'>A quick overview of my work</p>
        </div>
        <div className='dark centered'>
            <h1 className='title'>UW Open Rec Roster</h1>
            <GitHubLink link='https://github.com/HaydenDippL/BadgerBasketball'/>
            <div className='hbox' style={{
                marginTop: '30vh'   
            }}>
                <div className='left' style={{
                    width: '40vw'
                }}>
                    <h2 className='small-text' style={{fontWeight: 200}}>THE PROBLEM</h2>
                    <p className='large-text' style={{fontWeight: 700}}>The gym websites were extremely user-unfriendly</p>
                    <ol className='small-text' style={{
                        fontWeight: 500
                    }}>
                        <li>Hard to navigate</li>
                        <li>Mobile Incompatibility</li>
                        <li>Impossible to read</li>
                        <li>Separate sites for both gyms</li>
                    </ol>
                    <p></p>
                </div>
                <img src={BakkeScheduleLedger} style={{
                    margin: '30px',
                    width: '40vw',
                    height: 'auto',
                    borderRadius: '20px'
                }}/>
            </div>
            <div className='hbox' style={{
                marginTop: '25vh',
                marginBottom: '25vh'
            }}>
                <img src={WebsiteConcept} style={{
                    height: '50vh',
                    width: 'auto',
                    margin: '20px',
                    borderRadius: '20px'
                }}/>
                <div className='left' style={{
                    maxWidth: '35vw'
                }}>
                    <p className='small-text' style={{fontWeight: 200}}>THE IDEA</p>
                    <h2 className='large-text' styles={{fontWeight: 700}}>Create a Visual Schedule</h2>
                    <p className='small-text' styles={{fontWeight: 500}}>I wanted to create a website where a user could read the schedules at a glance 👀</p>
                    <p className='small-text' styles={{fontWeight: 500}}></p>
                </div>
                <img src={MobileAppConcept} style={{
                    height: '60vh',
                    width: 'auto',
                    marginTop: '10vh',
                    borderRadius: '20px'
                }}/>
            </div>
            <div className='hbox mega-margin'>
                <div className='left' style={{
                    width: '30vw'
                }}>
                    <p className='small-text' style={{fontWeight: 200}}>How I Built</p>
                    <a href='www.uwopenrecroster.com'><h2 className='large-text' style={{fontWeight: 700}}>UW Open Rec Roster</h2></a>
                    <p className='small-text' styles={{fontWeight: 500}}>I created the website as a React app. I used DigitalOceans to host the front and backend. I got my domain name from DreamHost.</p>
                    {/* <p className='large-margin'>The website is a vite react app hosted on DigitalOceans.com with a domain name from DreamHost.com. The website interacts with a backend to get the dialy schedules from the recwell API. These schedules are memoized serverside daily, as to not overwhelm the recwell API. Additionally, the backend logs requests to track our backend calls. The DB was managed by my friend Bailey Kau.</p>
                    <h2 className='medium-text small-margin'>What did I learn while making the website?</h2>
                    <ul>
                        <li><b>CSS Psuedo-Elements</b>: I was having serious issues with my styling and lag. Resizing the window would destroy the positioning of the hour mark lines and times themselves. I did some searching and found psuedo-elements `::before` and `::after`.</li>
                        <li><b>CSS Animations</b>: I wanted to add a skeleton loading animation to my website to show that the data was loading. I was able to learn about animation past the transition attribute.</li>
                        <li><b>Deploying a Web-App and Backend</b>: This project was really the first time I needed to deploy a project. I learned how to deploy not just on the macro-scale with pre-built deployers, but using NGINX. For the backend I had a blank vm, and had to configure it. I also learned how to use domain names in this project, giving both my frontend and backend unique domain names.</li>
                    </ul> */}
                </div>
                <div className='vbox' style={{
                    marginRight: '1vw'
                }}>
                    <img className='digital-oceans' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fdigitalocean-logo-png-open-2000.png&f=1&nofb=1&ipt=5691adca57348f15ddb304f3368b0042ab34898820b74e16f3c5d1d5b0447a34&ipo=images' height='100' width='100'/>
                    <img className='react' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.net%2Fwp-content%2Fuploads%2F2020%2F09%2Freact-logo.png&f=1&nofb=1&ipt=a316d2c9e3f1784d1cd73ef71b111f8f0b54ab8d089b9ea0981e0b0d53a35bd7&ipo=images' height='100' width='100'/>
                    <img className='dream-host' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fdreamhost-logo-png-transparent.png&f=1&nofb=1&ipt=22a54570e8723013b89a9a64110c738ebf9e79c8bf09f7c72e4a1bb694d27c9f&ipo=images' height='80' width='80'/>
                </div>
                <img src={WebScreenShot} style={{
                    width: '40vw',
                    height: 'auto',
                    borderRadius: '20px'
                }}/>
            </div>
            <div className='hbox mega-margin'>
                <img src={MobileScreenShot} style={{
                    height: '70vh',
                    width: 'auto',
                    borderRadius: '20px'
                }}/>
            </div>
        </div>
    </>
}

export default Projects