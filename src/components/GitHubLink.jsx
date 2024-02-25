function GitHubLink(props) {

    return <a href={props.link} target='_blank' style={{margin: '10px'}}>
        <div className='github-box' style={{
            height: props.size,
            width: props.size,
            borderRadius: props.size * 0.2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#46c43d'
        }}>
            <img height={props.size * 0.95} width={props.size * 0.95} src='https://pngimg.com/uploads/github/github_PNG83.png'/>
        </div>
    </a>
}

export default GitHubLink