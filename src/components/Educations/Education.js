import './Education.css';

const Work = (props) => {
    return (
        <div className='education'>
            <div className='time'>
                {props.when}&nbsp;&nbsp;
            </div>
            <div className='infos'>
                <h2 className="title">
                    {props.where}
                </h2>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Work;