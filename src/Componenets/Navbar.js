import './Navbar.css';
import Logo from './Images/Logo.png'

function Navbar() {
    return (
        <>


            <body>
                <nav className="navbar flex">

                    <div className="logo">
                        <a href="/"><img src={Logo} alt="Company Logo" /></a>
                    </div>
                    <div className="menu_list">
                        <ul className="flex">
                            <li><a href="/Services" className="primary_text">Services</a></li>
                            <li><a href="/About Us" className="primary_text">About Us</a></li>
                            <li><a href="/Contact Us" className="primary_text">Contact Us</a></li>
                            <li><a href="/" className="primary_text signin_btn">Sign In</a></li>
                            <li><a href="/" className="primary_text signup_btn">Sign Up</a></li>
                        </ul>
                    </div>

                </nav>
            </body>
        </>
    );
}

export default Navbar;