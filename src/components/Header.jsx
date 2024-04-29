import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/output">Display</Link>
          </li>
        </ul>
      </nav>
      <h1 className="big-page-title">AGV UI</h1>
    </header>
  );
}

export default Header;
