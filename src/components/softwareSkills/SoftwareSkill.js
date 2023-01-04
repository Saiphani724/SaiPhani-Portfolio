import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { Icon } from "@iconify/react";

export default function SoftwareSkill({ skillIndex }) {
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{skillsSection.data[skillIndex].softwareSkills.map((skill, i) => {
						return (
							<li
								key={i}
								className="software-skill-inline"
								name={skill.skillName}
							>
								<div
										className="icon-lg icon-shape shadow shadow-sm"
										id={skill.skillName.replace(/\s/g, '')}
									>
										<Icon
											icon={
												skill.fontAwesomeClassname
											}
											data-inline="false"
										></Icon>
									</div>
								<p>{skill.skillName}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
