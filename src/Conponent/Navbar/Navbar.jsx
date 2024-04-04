import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
   <ul>

<Link to="/"><li>home</li></Link>
<Link to="/login"><li>log in</li></Link>
<Link to="/contact"><li>contact page</li></Link>

   </ul>
        </div>
    );
};

export default Navbar;