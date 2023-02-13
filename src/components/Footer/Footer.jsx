import "./Footer.css"
import logo from "../../assets/logoaj.svg";
import instagram_logo from "../../assets/Instagram - Original.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Жакшы жол</h3>
      </div>
      <div className="nav2">
        <nav>
          <ul>
            <li>Книга</li>
            <div className="contacts">
              <li className="contact">Контакты</li>
              <li className="number">0705267747</li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="instagram">
        <img src={instagram_logo} alt="" />
      </div>
    </div>
  );
};

export default Footer