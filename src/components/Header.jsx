import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="red darken-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food App Recipe
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Azamatik98/FoodRecipeApp"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
