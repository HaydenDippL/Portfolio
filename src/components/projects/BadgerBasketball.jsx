import BakkeScheduleLedger from '../../assets/BakkeScheduleLedger.png'
import WebsiteConcept from '../../assets/WebsiteConcept.jpg'
import MobileAppConcept from '../../assets/MobileAppConcept.jpg'
import WebScreenShot from '../../assets/WebScreenshot.png'
import MobileWebScreenShot from '../../assets/MobileWebScreenshot.png'

import GitHubLink from '../GitHubLink'

import '../../styles.css'
import '../../styles/Projects.css'

const BADGER_BASKETBALL_GIT_REPO_URL = 'https://github.com/HaydenDippL/BadgerBasketball'
const UW_OPEN_REC_ROSTER_URL = 'https://www.uwopenrecroster.com'
const DIGITAL_OCEANS_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fdigitalocean-logo-png-open-2000.png&f=1&nofb=1&ipt=5691adca57348f15ddb304f3368b0042ab34898820b74e16f3c5d1d5b0447a34&ipo=images'
const REACT_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.net%2Fwp-content%2Fuploads%2F2020%2F09%2Freact-logo.png&f=1&nofb=1&ipt=a316d2c9e3f1784d1cd73ef71b111f8f0b54ab8d089b9ea0981e0b0d53a35bd7&ipo=images'
const DREAM_HOST_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fdreamhost-logo-png-transparent.png&f=1&nofb=1&ipt=22a54570e8723013b89a9a64110c738ebf9e79c8bf09f7c72e4a1bb694d27c9f&ipo=images'
const ANDROID_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fandroid-logo-png-transparent.png&f=1&nofb=1&ipt=d4bb88cb5edd1abafe91a76247865a6adec2f64c893f46b63b5fcea9e5873a2d&ipo=images'
const APPLE_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2016%2F05%2Frainbow-apple-logo.png&f=1&nofb=1&ipt=c42589023ade19f27d32af95a76eb8d965e225c53f38bd0be3b03954aa50695d&ipo=images'

function BadgerBasketball() {

    return <div className='dark centered'>
        <h1 className='title'>UW Open Rec Roster</h1>
        <GitHubLink link={BADGER_BASKETBALL_GIT_REPO_URL}/>
        <div className='hbox' style={{marginTop: '30vh'}}>
            <div className='left' style={{width: '40vw'}}>
                <h2 className='pre-header'>THE PROBLEM</h2>
                <p className='header'>The gym websites were extremely user-unfriendly</p>
                <ol className='text'>
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
                <p className='pre-header'>THE IDEA</p>
                <h2 className='header'>Create a Visual Schedule</h2>
                <p className='text'>I wanted to create a website where a user could read the schedules at a glance 👀</p>
            </div>
            <img src={MobileAppConcept} style={{
                height: '60vh',
                width: 'auto',
                marginTop: '10vh',
                borderRadius: '20px'
            }}/>
        </div>
        <div className='hbox mega-margin'>
            <div className='left' style={{width: '30vw'}}>
                <p className='pre-header'>How I Built</p>
                <a href={UW_OPEN_REC_ROSTER_URL}><h2 className='header'>UW Open Rec Roster</h2></a>
                <p className='text'>I created the website as a React app. I used DigitalOceans to host the front and backend. I got my domain name from DreamHost.</p>
            </div>
            <div className='vbox' style={{marginRight: '1vw'}}>
                <img className='digital-oceans' src={DIGITAL_OCEANS_LOGO_URL} height='100' width='100'/>
                <img className='react' src={REACT_LOGO_URL} height='100' width='100'/>
                <img className='dream-host' src={DREAM_HOST_LOGO_URL} height='80' width='80'/>
            </div>
            <img src={WebScreenShot} style={{
                width: '40vw',
                height: 'auto',
                borderRadius: '20px'
            }}/>
        </div>
        <div className='hbox mega-margin'>
            <div className='hbox' style={{alignItems: 'center'}}>
                <div className='vbox' style={{marginRight: '2vw'}}>
                    <img className='android' src={ANDROID_LOGO_URL} height='180'/>
                    <img className='ios' src={APPLE_LOGO_URL} height='180'/>
                </div>
                <img src={MobileWebScreenShot} style={{
                    height: '70vh',
                    width: 'auto',
                    borderRadius: '20px'
                }}/>
            </div>
            <div className='left' style={{marginLeft: '2vw'}}>
                <div className='left' style={{maxWidth: '35vw'}}>
                    <h2 className='big-header'>Mobile Friendly!</h2>
                </div>
                    <div className='left' style={{maxWidth: '35vw'}}>
                    <p className='text'>UW Open Rec Roster is able to be viewed on both Android and iOS devices as well as Google Pixels. It uses conditional rendering for mobile devices, and also iOS devices, to create a smoother experience for the user.</p>
                </div>
            </div>
        </div>
    </div>
}

export default BadgerBasketball