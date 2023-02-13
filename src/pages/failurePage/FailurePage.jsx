import Header from "../../components/Header/Header"
import "./FailurePage.css"
const FailurePage = () => {
  return (
    <div className="winPage">
      <Header />
      <h1>К сожалению, у вас менее 18 правильных ответов.</h1>
      <div className="options">
        <div className="option_p">
          <p>Вы можете пройти тест заново и получить скидку</p>
          <p>Позвонить инструктору и получить консультацию</p>
          <p>Купить книгу и изучить самоcтоятельно</p>
        </div>
        <div className="option_btn">
          <button>пройти тест заново</button>
          <button>позвонить</button>
          <button>купить</button>
        </div> 
      </div>
    </div>
  )
}

export default FailurePage