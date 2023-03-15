import "./Home.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, Landing, Section3, Section5, Section6, Teachers } from "../../";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const isDesktop = useMediaQuery("(min-width:900px)");

  const animateCard = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}courses/get-main`)
      .then((res) => {
        setData(res.data.data.result);
      });
  }, []);

  return (
    <div
      style={{
        background: "#fff",
      }}
    >
      <Landing />
      <section
        className="course"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="course__title">
          <h1>{t("courses.title")}</h1>
        </div>
        <div className="card-wrapper" ref={ref}>
          {data
            ? data
                ?.filter((item, i) => i < 3)
                .map((item, i) =>
                  isDesktop ? (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={animateCard}
                      transition={{ type: "tween", duration: 0.5 }}
                      key={i}
                    >
                      <Card
                        img={process.env.REACT_APP_FILE_URL + item.file_name}
                        title={item.title_ru}
                        link={item.alias}
                        date={item.created_on}
                        desc={item.short_content_ru}
                      />
                    </motion.div>
                  ) : (
                    <div key={i}>
                      <Card
                        img={process.env.REACT_APP_FILE_URL + item.file_name}
                        title={item.title_ru}
                        link={item.alias}
                        date={item.created_on}
                        desc={item.short_content_ru}
                      />
                    </div>
                  )
                )
            : ""}
        </div>
        <div className="course__btn">
          <Link to="/courses">{t("courses.button")}</Link>
        </div>
      </section>
      <Section3 />
      <Teachers />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;
