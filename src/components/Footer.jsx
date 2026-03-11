import { Link, NavLink } from "react-router";

export default function Footer() {
    return (
        <nav className="d-flex justify-content-between p-4 footer-nav">
            <Link to="/">Home Page</Link>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    );
}