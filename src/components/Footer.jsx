import labLogo from "../images/logo 2 trans.png";

const Footer = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <span>
        <p>
          &copy; Pham Hoang Anh, Dinh Hoang Son and Do Duc Toan - iPAC Lab,{" "}
          {new Date().getFullYear()}
        </p>
        <img src={labLogo} alt="iPAC Lab logo" width="50"></img>
      </span>
    </footer>
  );
};
export default Footer;
