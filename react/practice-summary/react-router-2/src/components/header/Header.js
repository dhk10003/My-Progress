import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <nav>
            <div>Header</div>

            {/* Home: */}
            <NavLink style={{ marginRight: "10px" }}
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
            {/* About */}
            <NavLink style={{ marginRight: "10px" }}
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                About
            </NavLink>
            {/* Products: */}
            <NavLink style={{ marginRight: "10px" }}
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Products
            </NavLink>

            {/* Contact : */}
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </nav>
    )
}

export default Header