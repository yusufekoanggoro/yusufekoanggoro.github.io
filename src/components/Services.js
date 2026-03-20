import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Backend Development",
    // img: "img/service/1.jpg",
    description: [
      "Building fast, secure, and scalable backend services."
    ],
  },
  {
    name: "System Design & Architecture",
    // img: "img/service/2.jpg",
    description: [
      "Design clean, maintainable, and scalable system architectures for long-term growth."
    ],
  },
  {
    name: "Database Design & Optimization",
    // img: "img/service/3.jpg",
    description: [
      "Create efficient data models and optimize queries for high performance."
    ],
  },
  {
    name: "API Development & Integration",
    // img: "img/service/4.jpg",
    description: [
      "Develop RESTful APIs and integrate with third-party services and microservices."
    ],
  },
  {
    name: "Frontend Development",
    // img: "img/service/4.jpg",
    description: [
      "Build responsive and interactive user interfaces using modern frameworks like React and Next.js."
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0]}</p>
                        </div>
                        <div className="arrow" style={{display: "none"}}>
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                        style={{display: "none"}}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
