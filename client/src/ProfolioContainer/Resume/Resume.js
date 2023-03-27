import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 100 },
    { skill: "Django", ratingPercentage: 100 },
    { skill: "Django Rest Framework", ratingPercentage: 100 },
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "React JS", ratingPercentage: 100 },
    { skill: "Express JS", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
    { skill: "Mongo Db", ratingPercentage: 100 },
    { skill: "HTML", ratingPercentage: 100},
    { skill: "CSS", ratingPercentage: 100 },
    { skill: "SASS", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Online Shopping Portal",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Online shop sample that offers features such as products, shopping carts, an option to leave reviews on products, and checkout",
      subHeading: "Built with ExpressJS, NodeJS, MongoDB and Mongoose Database, with EJS,Passport."
    },
    {
      title: "StackDevHelp",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "This is a friendly & simplified clone of StackOverflow",
      subHeading:
        "built with ReactJS, NodeJS,ExpressJS, MongoDB, Mongoose, Styled-Components, and MaterialUI.",
    },
    {
      title: "Simon Game",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        " It's a web app version of the Digital Simon game. The program chooses a sequence of colors and makes the player repeat the same sequence to advance to the next round",
      subHeading:
        "Built with Vanilla JavaScript, HTML & CSS grid system",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
<ResumeHeading
        heading={"General Assembly"}
        subHeading={"Software Engineering Immersive Graduate "}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Odessa I.I.Mechnikov National University"}
        subHeading={"Bachelor of Pharmacy - BPharm"}
        fromDate={"2007"}
        toDate={"2012"}
      />
    </div>,


    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
        heading={"Bitewell"}
        subHeading={"FULL STACK DEVELOPER"}
        fromDate={"2022"}
        toDate={"2022"}
      />
        <div className="experience-description">
          <span className="resume-description-text">
                  Worked as part of a team to develop and maintain the company's application development using modern technologies such as JavaScript, Sass, Python, and Django.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Collaborated with designers and other engineers to ensure that the applications were user-friendly and visually appealing.
          </span>
          <br />
          <span className="resume-description-text">
            -Contributed to the development of new features and enhancements according to business and technical specifications.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Coordinated decomposition meetings, ticket scoring, and other team-related activities.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Traveling"
            description="For me, traveling is the ultimate adventure. I love stepping outside of my comfort zone and immersing myself in a new environment. It's a chance to try new foods, meet interesting people, and learn about the history and traditions of different cultures."
          />
          <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Gaming"
        description="Of course, gaming isn't just a hobby - it's a skill. I'm always striving to improve my gameplay, whether that means mastering new techniques or just getting better at reading my opponents. And the feeling of finally nailing a move you've been practicing for hours is just unbeatable."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


































  

