import './Certification.css';

const Work = (props) => {
    return (
        <div className='certification'>
            <div className='time'>
                {props.when}&nbsp;&nbsp;
            </div>
            <div className='infos'>
                <h2 className="title">
                    {props.where} (<a href={props.to} className="link" target='blank'>Certification</a>)
                </h2>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Work;