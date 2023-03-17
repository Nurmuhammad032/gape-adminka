import "./Card.scss";
import { Link } from "react-router-dom";
import { getContent } from "../../utils/changeLang";
import { months } from "../../utils/customLang";
const Card = ({
  img,
  title_uz,
  title_ru,
  link,
  date,
  short_content_ru,
  short_content_uz,
}) => {
  let date1 = new Date(date);
  // const currentLanguage = i18next.language;
  console.log(date1);

  return (
    <Link to={`/courses/${link}`} className="card-component">
      <div>
        <div className="card-component__img-wrapper">
          <img src={`${img}`} alt="" />
        </div>
        <div className="card-component__title">
          <h1>{getContent(title_ru, title_uz)} </h1>
          <div>
            <p>{date1.getDate()}</p>
            <span>
              {getContent(
                months["ru"][
                  date1.toLocaleString("default", { month: "long" })
                ],
                months["uz"][date1.toLocaleString("default", { month: "long" })]
              )}
            </span>
          </div>
        </div>
        <div className="card-component__desc">
          <p>{getContent(short_content_ru, short_content_uz)}</p>
          <div className="card-arrow">
            <img src="/svg/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
