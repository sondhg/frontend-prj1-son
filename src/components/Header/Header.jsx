//import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <header className="main-header">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/output">Display</Link>
//           </li>
//           <li>
//             <Link to="/manage">Manage</Link>
//           </li>
//         </ul>
//       </nav>
//       <h1 className="big-page-title">AGV - Order and Display</h1>
//     </header>
//   );
// };
// export default Header;

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          AGV - Order and Display
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/output" className="nav-link">
              Display
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
            <Nav>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item>Log in</NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
