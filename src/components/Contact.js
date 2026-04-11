const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="avatar">
              <div className="img">
                <img
                  className=""
                  src="img/avatar.png"
                  alt="avatar"
                  style={{
                    width: "172px",
                    height: "172px",
                    objectFit: "cover",
                    borderRadius: "50%"
                }}
                />
              </div>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                Have an idea or project in mind? {`I'm`} open to collaboration and building
                impactful digital solutions. {`Let’s`} discuss and make it happen.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                {/* <li>
                  <span className="name">WhatsApp Me:</span>
                  <p>
                    <a className="line_effect" href="https://wa.me/6281234567890">
                      +62 859 3453 1182
                    </a>
                  </p>
                </li> */}
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:anggoroekoyusuf@gmail.com">
                      anggoroekoyusuf@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/yousufe24" target="_blank" rel="noopener noreferrer">
                      <img className="svg" src="img/svg/social/linkedin.svg"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/yusufekoanggoro" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/github.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yousufe24" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/instagram.svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
