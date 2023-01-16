import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <ul className="header-list">
                <Link to="/offer"><li className="header-list-item">Offers</li></Link>
                <Link to="/help"><li className="header-list-item">Help</li></Link>
                <Link to="/"><li className="header-list-item">Cart</li></Link>
                <li className="header-list-item">Sign In</li>
            </ul>
        </div>
    );
};

export default Header;