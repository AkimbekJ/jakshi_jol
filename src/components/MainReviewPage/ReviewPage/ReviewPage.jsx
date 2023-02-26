import review1 from "../../../assets/review1.png";
import review2 from "../../../assets/review2.png";
import review3 from "../../../assets/review3.png";
import review4 from "../../../assets/review4.png";
import review5 from "../../../assets/review5.png";

const ReviewPage = () => {
  return (
    <div className="container">
    <div className="reviewPage">
      <div className="blurBackground"></div>
      <div className="review">
        <p>ОТЗЫВЫ</p>
        <div className="card">
          <div className="reviewCard">
            <img src={review1} alt="img" />
          </div>
          <div className="reviewCard">
            <img src={review2} alt="img" />
          </div>
          <div className="reviewCard">
            <img src={review3} alt="img" />
          </div>
          <div className="reviewCard">
            <img src={review4} alt="img" />
          </div>
          <div className="reviewCard">
            <img src={review5} alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ReviewPage