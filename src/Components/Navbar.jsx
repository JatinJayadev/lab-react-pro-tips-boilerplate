import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <div>
                    <h1>Kalvium ❤</h1>
                </div>
            </Link>

            <div className="nav-links" >
                <Link to="/Contact">
                    <h2>Contacts</h2>
                </Link>

                <Link to="/Registration">
                    <h2>Registration Form</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar