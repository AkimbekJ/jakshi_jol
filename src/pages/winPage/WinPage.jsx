import mtd_img from "../../assets/image 1.svg";
import Header from "../../components/Header/Header";
import "./WinPage.css";
import distance from "../../assets/distance.svg";
import call from "../../assets/call.svg";
const WinPage = () => {
  return (
    <div className="winPage">
      <Header />
      <h1 className="h1">
        Поздравляем вы ответили правильно на 18 <br /> и более вопросов!{" "}
      </h1>
      <h3 className="h3">Вы можете забрать книгу с 10% СКИДКОЙ</h3>
      <div className="cont">
        <div className="discount">
          <div className="discount_1">
            <h4>1. В Академии программирования “Codify”</h4>
            <div>
              <img src={distance} alt="" />
              <span>Чуй/Исанова 105/3</span>
            </div>
            <div>
              <img src={call} alt="" />
              <span>0505 431-430</span>
            </div>
          </div>
          <div className="discount_2">
            <h4>2. Позвонив на номер </h4>
            <div>
              <img src={call} alt="" />
              <span>0705 265-747</span>
            </div>
          </div>
        </div>
        <div className="img_mtd">
          <img src={mtd_img} alt="" />
          <button>Цена: 250 сом</button>
        </div>
      </div>
    </div>
  );
};

export default WinPage;
