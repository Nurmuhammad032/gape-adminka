import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Payment from "../../Payment/Payment";
import "./Course.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const data1 = [
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
];

const Course = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    title_ru: "",
    short_content_ru: "",
    price: "",
    created_on: new Date(),
    file_name: "",
  });
  const params = useParams();
  const alias = params.slug;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/get-alias/${alias}`)
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  let date = new Date(data.created_on);

  return (
    <>
      <section
        className="course-page"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="course-page__container">
          <div className="course-page__wrapper">
            <div className="course-page__right">
              <div>
                <h1>{data.title_ru}</h1>
                <p className="course-page__desc-header">
                  старт: {date.getDate()}{" "}
                  {date.toLocaleString("default", { month: "long" })}
                </p>
                <p className="course-page__desc">{data.short_content_ru} </p>
                <p className="course-page__desc-price">{data.price} сум</p>
                <button onClick={() => setOpenModal(true)}>Купить</button>
              </div>
            </div>
            <div className="course-page__left">
              <div className="img-wrapper-course-page">
                <img
                  src={process.env.REACT_APP_FILE_URL + data.file_name}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          zIndex: 60,
        }}
      >
        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween" }}
            >
              <Payment close={setOpenModal} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <Payment close={setOpenModal} /> */}
      <section className="course-page__section-2">
        <div className="course-page__sectoin-2-container">
          <h1>Vorem ipsum dolor </h1>
          <div className="course-page__sectoin-2-wrapper">
            {data1.map((item, i) => (
              <div key={i} className="course-page__cards">
                <img src="/images/course-section2-img.png" alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
