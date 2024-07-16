import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
<nav className="Navbar">
   
    <Link to="/">Lighting</Link> 
    <Link to="/">Shutters</Link> 
    <Link to="/">Curtains</Link> 
    
</nav>
    );
}

export default Navbar;