import "./Header.css";
import logo from "../../assets/logoaj.svg";
import instagram_logo from "../../assets/Instagram - Original.svg"

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Жакшы жол</h3>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>Главная</li>
            <li>Книга</li>
            <li>Тест</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
      <div className="instagram">
        <img src={instagram_logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
