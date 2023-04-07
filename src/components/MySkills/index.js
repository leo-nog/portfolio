import Typewriter from 'typewriter-effect';

const MySkills = () => {

    const skills = [
        'Php',
        'Laravel',
        'React.js',
        'MySQL',
        'Redis',
        'JavaScript',
        'GitHub',
    ]

    return (
        <Typewriter
        options={{
            strings: skills,
            autoStart: true,
            loop: true, 
        }}
        />
    )
}

export default MySkills;