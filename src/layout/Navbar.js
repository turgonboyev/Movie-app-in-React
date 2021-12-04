import "./Navbar.css"

export default function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper nav__css">
                <a href="#" className="brand-logo">React</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Movie</a></li>
                </ul>
            </div>
        </nav>
    )
}