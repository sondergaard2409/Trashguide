import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
    return (
        <>
      <header>
        <Link to={`/`}>
          <figure className="logo">
            <img src={require("./navimages/bin.webp")} alt="logo" />
            <figcaption>
              <p>Affaldsguiden</p>
            </figcaption>
          </figure>
        </Link>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />

        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px #6da830" : "none",
                })}
              >
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sortering"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px #6da830" : "none",
                })}
              >
                Sortering
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genbrugsstationer"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px #6da830" : "none",
                })}
              >
                Genbrugsstationer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bestilbeholder"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px #6da830" : "none",
                })}
              >
                Bestil beholder
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="loginicon">
          <Link to={`/login`}>
            <img
              src={require("./navimages/lockin.webp")}
              alt="loginicon"
            />
          </Link>
        </div>
        <label
          htmlFor="nav-toggle"
          title="Show navbar"
          className="nav-toggle-label"
        >
          <span></span>
        </label>
      </header>
    </>
    );
};

export default NavBar; 