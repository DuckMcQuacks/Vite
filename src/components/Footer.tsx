export default function Footer(){
    const year =new Date().getFullYear();
    return(
        <footer>
            <div className="info">
                <div className="about">
                    <h2>Dominik Nándor Menus</h2>
                    <p className="small">Currently a Frontend focused Web developer, able to design and build the Frontend of Websites.</p>
                </div>
                <div className="social">
                    <h2>Social</h2>
                    <div className="socialImages">
                    <a href="https://www.linkedin.com/in/dominik-menus-7a129a257" target="_blank"><div className="img linkedIn"></div></a>
                    <a href="https://github.com/DuckMcQuacks" target="_blank"><div className="img github"></div></a>
                        <a href="https://discordapp.com/users/288725723101790209" target="_blank"><div className="img discord"></div></a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copyright"> © Copyright {year}. Made by  <b>Dominik Nándor Menus</b></div>
        </footer>
    )
}