import "./About.scss";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-page__container">
        <h1 className="about-page__title">о нас</h1>
        <div className="about-page__wrapper">
          <div className="about-page__right">
            <div className="about-wrapper">
              <div className="about-card">
                <h1>Учебный центр Виноградства</h1>
                <p className="about-page__desc">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="about-page__left">
            <div className="about-left-imgWrapper">
              <img src="/images/course-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
