import "./MainReviewPage.css";
import banner from "../../assets/banner.png";
import teaching from "../../assets/teaching.svg";
import driver from "../../assets/driver.svg";
import student from "../../assets/student.svg";
import book from "../../assets/book.svg";
import ReviewPage from "./ReviewPage/ReviewPage";
const MainReviewPage = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <div className="firstPage">
          <img src={banner} alt=""/>
          <div className="biography">
            <div className="lang">
              <ul>
                <li>
                  <a href="#">KGZ</a>
                </li>
                <li>
                  <a href="#">RUS</a>
                </li>
              </ul>
            </div>
            <div className="fullName">
              <h1>ОМУРБЕКОВ РУСЛАН ЖАКШЫЛЫКОВИЧ</h1>
              <p>инструктор по вождению</p>
            </div>
            <div className="biographyList">
              <div className="biographySymbol">
                <img src={teaching} alt="img" />
                <p>Опыт преподавания и инструкторский стаж более 12 лет</p>
              </div>
              <div className="biographySymbol">
                <img src={driver} alt="img" />
                <p>Водительский стаж более 25 лет</p>
              </div>
              <div className="biographySymbol">
                <img src={student} alt="img" />
                <p> Выпустил более 1600+ студентов</p>
              </div>
              <div className="biographySymbol">
                <img src={book} alt="img" />
                <p>Составил свою методичку по ПДД</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewPage/>
    </div>
  );
};

export default MainReviewPage;
