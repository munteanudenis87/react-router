import { Link, NavLink } from "react-router";

export default function MainNav() {
    return (
        <nav className="d-flex justify-content-between p-4 header-nav">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    );
}