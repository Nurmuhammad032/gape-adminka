import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ img, title, link, date, desc }) => {
  let date1 = new Date(date);

  return (
    <Link to={`/courses/${link}`} className="card-component">
      <div>
        <div className="card-component__img-wrapper">
          <img src={`${img}`} alt="" />
        </div>
        <div className="card-component__title">
          <h1>{title} </h1>
          <div>
            <p>{date1.getDate()}</p>
            <span>{date1.toLocaleString("default", { month: "long" })}</span>
          </div>
        </div>
        <div className="card-component__desc">
          <p>{desc}</p>
          <div className="card-arrow">
            <img src="/svg/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
