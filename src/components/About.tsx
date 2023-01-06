import {Link} from "react-router-dom"
interface props{
    darkmode: boolean
}

export default function About({darkmode}:props){
    const skillsObject : skillsType = {
        skills : ["HTML","CSS","JavaScript","TypeScript","React","GIT","Github","RWD","Terminal","SQL","C#","C","Python"],
        skillsDesc : ["Hypertext markup language, is a markup language used to create the frontend of websites.",
        "Cascading Style Sheets, used to manipulate the properties of HTML",
        "A scripting or programming language that allows you to implement complex features on web pages",
        "A superset of JavaScript, it's Object-oriented whereas JavaScript is a prototype based language.",
        "A JavaScript-based UI development library, focused on making it easy to create single-page websites.",
        "A version control system, it enables multiple developers to work on the same code base and tracks changes.",
        "A code hosting platform for version control and collaboration. Makes it easy to share code between developers.",
        "Responsive web design allows the page to adopt to different screen sizes and ratios, allowing the page to look great on all screens.",
        "A text-based interface, the ability to efficiently navigate and run programs in a terminal.",
        "Structured Query Language is used to communicate with a database, allowing to read and write it, used for relational databases.",
        "A general purpose programming language, it's an object oriented programming language.",
        "A low level general purpose programming language, allows more control over memory usage.",
        "A high-level object oriented programming language, commonly used for data science and back-end"
    ]
    }
    interface skillsType{
        skills : string[]
        skillsDesc : string[]
    }
    const skillsArray = skillsObject.skills.map((a,b)=>{
        return(
            <div key={b} className={"aboutSkill" +(darkmode ? " aboutSkillDark" : "")} title={skillsObject.skillsDesc[b]}>{a}</div>
        )
    })
    return(
        <div className="aboutSection">
        <div className="aboutIntro">
            <h1>About me</h1>
            <hr />
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
        </div>
        <div className="aboutContent">
            <div className="aboutMe">
                <h1>Get to know me!</h1>
                <p>I am a <span>Frontend </span> focused <span>Web Developer</span>, building clean looking <span>Front-end</span> of websites and Web Applications. You can check out some of my work in the <span>Projects</span> section.</p>
                <p>I am open to <span>Job</span> opportunities where I can contribute, learn and grow, If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.</p>
                <Link to="/Contact">
                <div className={"button"+(darkmode ? " buttondark" : "")}><p className={darkmode ? "textdark" : "textlight"}>Contact</p></div>
                </Link>
            </div>
            <div className="aboutMySkills">
                <h1>My Skills</h1>
                <div className="aboutSkills">
                    {skillsArray}
                </div>
            </div>
        </div>
        </div>
    )
}