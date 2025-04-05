import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Home</Link>
            <Link to="/product" style={{ color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Products</Link>
            <Link to="/about" style={{ color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>About</Link>
            <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Contact</Link>
            <Link to="/cart" style={{ color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Cart</Link>
        </nav>
    );
};

export default NavBar;