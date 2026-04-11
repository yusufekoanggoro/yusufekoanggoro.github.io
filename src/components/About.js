const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">5+</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Yusuf Eko A.</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                With 5+ years of experience building scalable and reliable applications.
                I enjoy solving problems, designing systems, and collaborating with teams to deliver impactful solutions.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="Yusuf Eko Anggoro - Resume - EN.pdf" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
