
import viteLogo from "../../public/assets/imgs/vite.svg";
import "../../public/css/header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
          <img src={viteLogo} width={40} alt="" />
          <ul className="navItem">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;