import "./Courses.scss";
import i18next from "i18next";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { Card } from "../../";
import { getContent } from "../../../utils/changeLang";

const Courses = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tab, setTab] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/get-main`)
      .then((res) => {
        setFilteredData(res.data.data.result);
        setData(res.data.data.result);
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}courses_category/get-main`)
      .then((res) => {
        setTab(res.data.data.result);
      });
  }, []);


  const handleTabClick = (index) => {
    setCurrent(index);
    if (index === 0) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category_id === index);

      setFilteredData(filtered);
    }
  };

  return (
    <>
      <section
        className="courses"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/courses-back.png)",
        }}
      >
        <div className="courses__container">
          <div className="courses__wrapper">
            <h1>все курсы Corem ipsum dolor sit </h1>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-items">
        <div className="courses-items__container">
          <div>
            <h1 className="courses-items__title">все курсы</h1>

            <ul className="courses-items__tab-wrapper">
              <li
                onClick={() => handleTabClick(0)}
                className={`${current === 0 ? "active-tab" : ""}`}
              >
                Все
              </li>
              {tab.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleTabClick(item.id)}
                  className={`${current === item.id ? "active-tab" : ""}`}
                >
                  {getContent(item.title_ru, item.title_Uz)}
                </li>
              ))}
            </ul>

            <div className="card-wrapper">
              <AnimatePresence>
                {filteredData.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "tween" }}
                  >
                    <Card
                      img={process.env.REACT_APP_FILE_URL + item.file_name}
                      title_ru={item.title_ru}
                      title_uz={item.title_uz}
                      link={item.alias}
                      date={item.created_on}
                      short_content_ru={item.short_content_ru}
                      short_content_uz={item.short_content_uz}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
