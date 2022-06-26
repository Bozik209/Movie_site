import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">React Movie</div>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">All Movie</Link> */}
          </li>
          <li>
            {/* <Link to="/new">New Movie</Link> */}
          </li>
          <li>
            {/* <Link to="/fav">My Favorites</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
