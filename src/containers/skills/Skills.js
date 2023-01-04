import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
		<h1 className="skills-heading">Skills</h1>
		<div className="skillsbox-container">
		{skillsSection.data.map((skillsSection, i) => {
                return (
                  
					<div className="skills-main-div">
					<Fade left duration={1000}>
					  <div className="skills-image-div">
						{illustration.animated ? (
						  <DisplayLottie animationData={skillsSection.animation} />
						) : (
						  <img
							alt="Man Working"
							src={require("../../assets/images/developerActivity.svg")}
						  ></img>
						)}
					  </div>
					</Fade>
					<Fade right duration={1000}>
					  <div className="skills-text-div">
						<h2
						  className={isDark ? "dark-mode " : ""}
						>
						  {skillsSection.title}
						</h2>
						<p
						  className={
							isDark
							  ? "dark-mode subTitle skills-text-subtitle"
							  : "subTitle skills-text-subtitle"
						  }
						>
						  {skillsSection.subTitle}
						</p>
						<SoftwareSkill skillIndex = {i}/>
						<div>
						  {skillsSection.skills.map((skills, i) => {
							return (
							  <p
								key={i}
								className={
								  isDark
									? "dark-mode subTitle skills-text"
									: "subTitle skills-text"
								}
							  >
								{skills}
							  </p>
							);
						  })}
						</div>
					  </div>
					</Fade>
				  </div>
                );
              })}
		</div>
			  
    </div>
  );
}
