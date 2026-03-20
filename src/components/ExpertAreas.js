import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Trainings", value: 219 },
  { name: "Written Book", value: 48 },
  { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "Node.js", value: "90", icon: "img/svg/code.svg" },
  { name: "TypeScript", value: "90", icon: "img/svg/code.svg" },
  { name: "Golang", value: "90", icon: "img/svg/code.svg" },
  { name: "PHP", value: "85", icon: "img/svg/code.svg" },
  { name: "MongoDB", value: "90", icon: "img/svg/code.svg" },
  { name: "PostgreSQL", value: "90", icon: "img/svg/code.svg" },
  { name: "Elasticsearch", value: "90", icon: "img/svg/code.svg" },
  { name: "Cloud Storage", value: "90", icon: "img/svg/code.svg" },
  { name: "Firebase", value: "80", icon: "img/svg/code.svg" },
  { name: "REST API", value: "90", icon: "img/svg/code.svg" },
  { name: "Redis", value: "90", icon: "img/svg/code.svg" },
  { name: "Kafka", value: "85", icon: "img/svg/code.svg" },
  { name: "RabbitMQ", value: "90", icon: "img/svg/code.svg" },
  { name: "Docker", value: "85", icon: "img/svg/code.svg" },
  { name: "Git", value: "85", icon: "img/svg/code.svg" },
  { name: "React.js", value: "80", icon: "img/svg/code.svg" },
  { name: "Next.js", value: "80", icon: "img/svg/code.svg" },
  { name: "JavaScript", value: "80", icon: "img/svg/code.svg" },
  { name: "HTML & CSS", value: "80", icon: "img/svg/code.svg" },
];

const experiences = [
  {
    company: "ENB Mobile Care",
    designation: "Backend Engineer",
    time: "2025 - Present",
  },
  {
    company: "PT Telkom Indonesia Tbk",
    designation: "Backend Developer",
    time: "2019 - 2025",
  },
];

const educations = [
  {
    institution: "Universitas Indraprasta PGRI (UNINDRA)",
    certificate: "Bachelor Degree in Informatics Engineering",
    time: "2020 - 2024",
  },
  {
    institution: "Arkademy",
    certificate: "Full Stack Mobile Developer Bootcamp",
    time: "2019",
  },
  {
    institution: "SMKN 24 Jakarta",
    certificate: "Software Engineering (Rekayasa Perangkat Lunak)",
    time: "2017 - 2019",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    I focus on backend development, building scalable APIs and reliable systems that handle real-world workloads. 
                    I work with technologies like Node.js, TypeScript, MongoDB, and PostgreSQL to deliver efficient and maintainable solutions.
                  </p>
                  <p>
                    I have experience in system design, data processing, and integrating multiple
services, ensuring performance, consistency, and clean architecture.
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section" style={{display: "none"}}>
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
