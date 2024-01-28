import '../styles/GitHubLink.css'
import '../styles.css'

function GitHubLink(props) {
    
    return <div className='hbox'>
        <img className='github-logo' src='https://pngimg.com/uploads/github/github_PNG83.png'/>
        <a href={props.link} target='_blank'>
            <p className='small-text'>{props.link}</p>
        </a>
    </div>
}

export default GitHubLink