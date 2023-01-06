import {useState, useEffect} from "react"
import { Link} from "react-router-dom"

interface props{
  darkmode: boolean;
  themeSwitch: ()=>void;
}

export default function Navbar({darkmode,themeSwitch}:props){
    const [width , setWidth] = useState(window.innerWidth)
    const [isActive, setActive] = useState(false)
  
    //Conditional rendering for cross-Device compatibility regarding phones
    useEffect(() => {
        let cb = function () {
          setWidth(window.innerWidth);
          //Handle corner case bug regarding menu
          setActive(width > 720 ? isActive : false)
        };
        window.addEventListener("resize", cb);
      
        return () => {
          window.removeEventListener("resize", cb);
        };
      }, []);
      //Dealing with the mobile version of navbar, hiding and showing the menu
      function clickHandler()
      {
        setActive(!isActive)
      }
      //conditional class
      const buttonClass = darkmode ? "navButton textdark" : "navButton textlight"
    return(
        <>
        <nav className={darkmode? "dark" : "light"}> 
            <Link to="/" >
            <p className={buttonClass}>Dominik&nbsp;Nándor&nbsp;Menus</p>
            </Link>
            { width > 720?
            
            <div className="navButton_Container">
            <Link to="/" >
                <p className={buttonClass}>Home</p>
            </Link>
            <Link to="/About" >
            <p className={buttonClass}>About</p>
            </Link>
            <Link to="/Projects" >
            <p className={buttonClass}>Projects</p>
            </Link>
            <Link to="/Contact" >
            <p className={buttonClass}>Contact</p>
            </Link>
            <div className={darkmode ? "lightSwitch" : "darkSwitch"} onClick={themeSwitch}></div>
            </div> : <>
            <div className={darkmode ? "lightSwitch" : "darkSwitch"} onClick={themeSwitch}></div>
            <div className={"fill"+(darkmode? " invert":"")+(isActive ? " active" : "")} onClick={clickHandler}></div> 
            </>
            }
        </nav>
        <hr></hr>
        <ul className={isActive ? darkmode? "dark" : "light" : "hidden"}>
            <li>
            <Link to="/" >
                <p className={buttonClass} onClick={clickHandler}>Home</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/About" >
            <p className={buttonClass} onClick={clickHandler}>About</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/Projects" >
            <p className={buttonClass} onClick={clickHandler}>Projects</p>
            </Link>
            </li>
            <hr></hr>
            <li>
            <Link to="/Contact" >
            <p className={buttonClass} onClick={clickHandler}>Contact</p>
            </Link>
            </li>
            <hr></hr>
            
        </ul>
        </>
    )
}