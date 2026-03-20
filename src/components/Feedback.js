const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/testimonials/${dark ? 2 : 1}.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Awesome website! Easy to use and edit, it has a lot of
                  options to design whatever you need, it is professional and
                  fun. I was very successful creating my profile using designer
                  which gave me unbelievable reach &amp; appreciation.”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Albert Walkers</span>
                </h3>
                <span className="job">Vivaco Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
