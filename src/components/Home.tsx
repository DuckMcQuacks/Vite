import image from "../assets/bw-image.jpg"
import imag from "../assets/color-image.jpg"
import { Link} from "react-router-dom"

interface props{
    darkmode: boolean;
  }
export default function Home({darkmode}:props){
    const isInvert= darkmode ? "" : " invert"
    return(
    <>
        <div className={"container pattern columnCenter"+(darkmode?"" : " patternGrey")}>
            <h1>Hey, I'm Dominik Nándor Menus</h1>
            <p>A Frontend focused Web developer, able to design and build the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
            <div className="rowCenter">
            <Link to="/Projects" style={{textTransform:"uppercase"}}>
            <h1 className={"button"+(darkmode ? " buttondark textdark" : " textlight")}><p>Projects</p></h1>
            </Link>
            </div>
        </div>
        <div className={"floatingContacts"+(darkmode ? "" : " dark")}>
            <a href="https://www.linkedin.com/in/dominik-menus-7a129a257" target="_blank"><div className={"img linkedIn"+isInvert}></div></a>
            <a href="https://github.com/DuckMcQuacks" target="_blank"><div className="img github"></div></a>
            <a href="https://discordapp.com/users/288725723101790209" target="_blank"><div className="img discord"></div></a>
            </div>
      </>  
    )
}
function AnimImg(){
    return(
    <div className="mask-container">
        <div className="color-image"></div>
        <img className="blackWhite" />
    </div>
    )
}