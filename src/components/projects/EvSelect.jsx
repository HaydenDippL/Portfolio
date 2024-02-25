import TeslaJsonScreenshot from '../../assets/tesla.json.png'

import GitHubLink from '../GitHubLink'

import '../../styles.css'

const EV_SELECT_GIT_REPO_URL = 'https://github.com/HaydenDippL/EvSelect'
const SELENIUM_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkirantestingacademy.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fselenium_logo_square_green-150x150.png&f=1&nofb=1&ipt=83b807656e0fd270eac033edf5bbf755b4b03c9ad9bd30531575c0124b95dbef&ipo=images'
const PYTHON_LOGO_URL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nesabamedia.com%2Fwp-content%2Fuploads%2F2018%2F09%2FLogo-Python.png&f=1&nofb=1&ipt=dd9c61b2455c3d30e8706716526df50d74ff0d898bae075a65ae3bb439dba854&ipo=images'

function EvSelect() {
    return <div className='centered light-text' style={{backgroundColor: '#c21b8f'}}>
        <div className='hbox'>
            <div className='vbox' style={{alignItems: 'flex-start'}}>
                <div className='hbox' tyle={{marginTop: '10vh'}}>
                    <GitHubLink link={EV_SELECT_GIT_REPO_URL} size={90}/>
                    <h1 className='title' style={{marginLeft: '20px'}}>EV Select</h1>
                </div>
                <div className='left' style={{width: '30vw'}}>
                    <p className='text'>My friend wanted to make a website that would make it easier to compare and buy Electric Vehicles. He asked me to do some data scraping on Tesla. I created code to retrieve...</p>
                    <ul className='large-margin' style={{fontSize: '25px', fontWeight: '700'}}>
                        <li>Models</li>
                        <li>Trims</li>
                        <li>Base Prices</li>
                        <li>Accelerations</li>
                        <li>Paints and Paint Prices</li>
                        <li>Wheels, Wheel Prices, and Ranges</li>
                        <li>Interiors and Interior Prices</li>
                        <li>Driver's Assistance Packages</li>
                        <li>Steering Options</li>
                    </ul>
                    <p className='text'>I completed the scraping using Selenium in Python.</p>
                    <div className='hbox' style={{alignItems: 'center', justifyContent: 'center'}}>
                        <img height='170' width='170' src={SELENIUM_LOGO_URL} style={{clipPath: 'inset(10px 10px 10px 10px)', margin: '10px 20px'}}/>
                        <img height='150' width='150' src={PYTHON_LOGO_URL} style={{margin: '10px 20px'}}/>
                    </div>
                    <p className='text'>The biggest challenge of the Tesla site, was that it had to be viewed with a headed browsers. This caused issues with laggy input, where double counting and skipping data occured. I was able to solve the problem with the Selenium Expected Conditions module.</p>
                </div>
            </div>
            <div style={{borderRadius: '20px', marginTop: '-5vh', marginLeft: '5vw', overflow: 'hidden'}}>
                <img src={TeslaJsonScreenshot} style={{objectFit: 'none', borderRadius: '20px', marginTop: '10vh', marginLeft: '5vw', overflow: 'hidden'}}/>
            </div>
        </div>
    </div>
}

export default EvSelect