import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="100px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitles[0]}
              </p>
			  <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitles[1]}
              </p>
			  <table style={{marginBottom: "40px"}}>
				<tr class = "greeting-text-p">
					<td style={{ textAlign: "left", paddingRight: "30px", paddingBottom: "20px" }}>{greeting.areasOfInterest[0]}</td>
					<td style={{ textAlign: "left", paddingRight: "30px", paddingBottom: "20px"  }}>{greeting.areasOfInterest[1]}</td>
					<td style={{ textAlign: "left", paddingRight: "30px", paddingBottom: "20px"  }}>{greeting.areasOfInterest[2]}</td>
				</tr>
				<tr class = "greeting-text-p">
					<td style={{ textAlign: "left", paddingRight: "30px"  }}>{greeting.areasOfInterest[3]}</td>
					<td style={{ textAlign: "left", paddingRight: "30px"  }}>{greeting.areasOfInterest[4]}</td>
					<td style={{ textAlign: "left", paddingRight: "30px"  }}>{greeting.areasOfInterest[5]}</td>
				</tr>
			</table>

              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated && 0? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              
			  <img
					src={require("../../assets/images/myimage.jpg")}
					style={{ width: "50%", marginLeft: "30%", marginTop: "10%"}}
					alt=""
					className="rounded-circle shadow shadow-lg--hover"
				/>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
