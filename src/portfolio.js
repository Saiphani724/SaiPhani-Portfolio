/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import codingPerson from "./assets/lottie/codingPerson";
import robot from "./assets/lottie/robot";
import fullstack from "./assets/lottie/fullstack";
import cloudinfra from "./assets/lottie/cloudinfra";

// Splash Screen

const splashScreen = {
	enabled: true, // set false to disable splash screen
	animation: splashAnimation,
	duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
	animated: true // Set to false to use static SVG
};

const greeting = {
	username: "Sai Phani",
	title: "Hi all, I'm Sai Phani",
	subTitles: [emoji(
		"I am a Grad student from Stony Brook University, New York, pursuing my MS in Computer Science. I have previously worked at Microsoft as a Software Development Engineer, after completing my BTech in Computer Science from Amrita School of Engineering, Coimbatore, India."),
		"I strive to gain experience in wide range of domains in Computer Science. I love to develop AI Systems that solves real-world problems and also I enjoy building sites and applications that look creative and work effictive. Here are some areas I am passionate about:"
	],
	areasOfInterest : [
		emoji("⚡ Computer Vision"),
		emoji("⚡ Robotics"),
		emoji("⚡ Natural Language Processing"),
		emoji("⚡ Reinforcement Learning"),
		emoji("⚡ Internet of Things"),
		emoji("⚡ Full Stack Development"),
		emoji("⚡ Competitive Programming"),
	],
	resumeLink:
		"https://drive.google.com/file/d/1iZ6bHSTmICp1Box0XHK16B-ZT7D7MpHe/view?usp=share_link", // Set to empty to hide the button
	displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/saiphani724",
	linkedin: "https://www.linkedin.com/in/sai-phani-p/",
	gmail: "saiphani724@gmail.com",
	// gitlab: "https://gitlab.com/saadpasta",
	// facebook: "https://www.facebook.com/saad.pasta7",
	// medium: "https://medium.com/@saadpasta",
	instagram: "https://www.instagram.com/saiphani724/",
	kaggle: "https://www.kaggle.com/saiphani724",
	codeforces: "https://codeforces.com/profile/Saiphani724",
	codechef: "https://www.codechef.com/users/saiphani724",
	// Instagram, Twitter and Kaggle are also supported in the links!
	// To customize icons and social links, tweak src/components/SocialMedia
	display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	display: true,
	data: [
		{
			title: "AI / Machine Learning",
			animation: robot,
			subTitle: "LAZY AI ENTHUSIST FINDING WAYS TO AUTOMATE EVERY STEP IN DAILY LIFE.",
			skills: [
				emoji(
					"⚡ Build Vision Models that can look around and understand the world to do required task."
				),
				emoji("⚡ Build Language Models that can infer the context and respond mimicing humans and sometimes better."),
				emoji(
					"⚡ Build Robots / AI Agents that can learn from its mistakes and get better day to day."
				)
			],

			/* Make Sure to include correct Font Awesome Classname to view your icon
		  https://fontawesome.com/icons?d=gallery */

			softwareSkills: [
				{
					skillName: "Python",
					fontAwesomeClassname: "vscode-icons:file-type-python"
				},
				{
					skillName: "TensorFlow",
					fontAwesomeClassname: "logos:tensorflow"
				},
				{
					skillName: "Pytorch",
					fontAwesomeClassname: "logos:pytorch-icon"
				},
				{
					skillName: "PytorchLightning",
					fontAwesomeClassname: "simple-icons:pytorchlightning"
				},
				{
					skillName: "Sklearn",
					fontAwesomeClassname: "simple-icons:scikit-learn"
				},
				{
					skillName: "Scipy",
					fontAwesomeClassname: "simple-icons:scipy"
				},
				{
					skillName: "Matplotlib",
					fontAwesomeClassname: "logos:matplotlib"
				},
				{
					skillName: "Opencv",
					fontAwesomeClassname: "logos:opencv"
				},
				{
					skillName: "Pandas",
					fontAwesomeClassname: "simple-icons:pandas"
				},
				{
					skillName: "Numpy",
					fontAwesomeClassname: "vscode-icons:file-type-numpy"
				},
				{
					skillName: "Matlab",
					fontAwesomeClassname: "vscode-icons:file-type-matlab"
				},
				{
					skillName: "Spacy",
					fontAwesomeClassname: "simple-icons:spacy"
				}
			],
			display: true // Set false to hide this section, defaults to true
		},
		{
			title: "Full Stack Devlopment",
			animation: fullstack,
			subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
			skills: [
				emoji(
					"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
				),
				emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
				emoji(
					"⚡ Integration of third party services such as Firebase / Azure / AWS / Digital Ocean"
				)
			],

			/* Make Sure to include correct Font Awesome Classname to view your icon
		  https://fontawesome.com/icons?d=gallery */

			softwareSkills: [
				{
					skillName: "html-5",
					fontAwesomeClassname: "vscode-icons:file-type-html"
				},
				{
					skillName: "CSS",
					fontAwesomeClassname: "vscode-icons:file-type-css"
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript"
				},
				{
					skillName: "ReactJs",
					fontAwesomeClassname: "logos:react"
				},
				{
					skillName: "nodejs",
					fontAwesomeClassname: "logos:nodejs"
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "vscode-icons:file-type-typescript-official"
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java"
				},
				{
					skillName: "Android",
					fontAwesomeClassname: "ic:baseline-android"
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django"
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql"
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase"
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo"
				}
				
			],
			display: true // Set false to hide this section, defaults to true
		},
		{
			title: "Cloud Infra-Architecture",
			animation: cloudinfra,
			subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms, i.e., Azure, AWS, GCP."),
				emoji("⚡ Working on PAAS Applications which invloves data processing and orchestration in cloud using pipelines and backend flow."),
				emoji(
					"⚡ Hosting and maintaining websites and applications on virtual machine instances along with integration of databases."
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Microsoft's Azure DevOps and Github Actions."
				)
			],

			/* Make Sure to include correct Font Awesome Classname to view your icon
		  https://fontawesome.com/icons?d=gallery */
		  softwareSkills: [
			// ? Check README To get icon details
			{
				skillName: "AWS",
				fontAwesomeClassname: "logos:aws",
			},
			{
				skillName: "Azure",
				fontAwesomeClassname: "logos:microsoft-azure",
			},
			{
				skillName: "GCP",
				fontAwesomeClassname: "logos:google-cloud",
			},
			{
				skillName: "Heroku",
				fontAwesomeClassname: "logos:heroku-icon",
			},
			{
				skillName: "Github",
				fontAwesomeClassname: "akar-icons:github-fill",
			},
			{
				skillName: "Docker",
				fontAwesomeClassname: "logos:docker-icon",
			},
			{
				skillName: "Github Actions",
				fontAwesomeClassname: "logos:github-actions",
			},
			{
				skillName: "Azure DevOps",
				fontAwesomeClassname: "cib:azure-devops",
			}
		],
			
			display: true // Set false to hide this section, defaults to true
		}
	]
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: "Stony Brook University",
			logo: require("./assets/images/sbuLogo.png"),
			subHeader: "Master of Science in Computer Science",
			duration: "August 2022 - December 2023",
			desc: "GPA: 3.67/4",
			descBullets: [
				"Teaching Assistant for CSE 337: Scripting Languages"
			]
		},
		{
			schoolName: "Amrita University, Coimbatore",
			logo: require("./assets/images/amritaLogo.png"),
			subHeader: "Bachelor of Technology in Computer Science and Engineering",
			duration: "July 2017 - June 2021",
			desc: "GPA: 9.1/10 with Distinction",
			descBullets: ["Senior Member of Code@Amrita", "Event Lead and Manager @ Anokha, Amrita’s techfest"]
		}
	]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend/Design", //Insert stack or technology you have experience in
			progressPercentage: "80%" //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "80%"
		},
		{
			Stack: "Competitive Programming",
			progressPercentage: "90%"
		},
		{
			Stack: "Computer Vision", //Insert stack or technology you have experience in
			progressPercentage: "80%" //Insert relative proficiency in percentage
		},
		{
			Stack: "Natural Language Processing",
			progressPercentage: "80%"
		},
		{
			Stack: "Data Analysis and Processing",
			progressPercentage: "90%"
		},
		{
			Stack: "Robotics", //Insert stack or technology you have experience in
			progressPercentage: "80%" //Insert relative proficiency in percentage
		},
		{
			Stack: "Android",
			progressPercentage: "70%"
		},
		{
			Stack: "Internet of Things",
			progressPercentage: "70%"
		},
		{
			Stack: "Reinforcement Learning",
			progressPercentage: "60%"
		}
	],
	displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Software Engineer",
			company: "Microsoft",
			companylogo: require("./assets/images/microsoftLogo.png"),
			date: "July 2021 – August 2022",
			desc: "",
			descBullets: [
				"Built a chatbot called “AutoOps Bot”, which allows the users to complete mundane tasks like managing Azure services effortlessly via Teams app, which saves around 40 hours/month of team effort.",
				"Automated data Inbounding and Outbounding process from Workday to Microsoft’s SQL Db, and vice versa.",
				"Designed, developed and maintained tools for Microsoft’s finance forecasting and budgeting management."
			]
		},
		{
			role: "Software Engineer",
			company: "Microsoft",
			companylogo: require("./assets/images/microsoftLogo.png"),
			date: "Jan 2021 – June 2021",
			descBullets: ["Designed and implemented Reuse Dictionary project - a ReactJs, .NET based tool for sharing any reusable work done within Microsoft organization and also allows searching for works published across multiple sites like GitHub, nugget repository, Azure DevOps, etc., from a single place."]			
		},
		{
			role: "Software Engineer",
			company: "Microsoft",
			companylogo: require("./assets/images/microsoftLogo.png"),
			date: "May 2020 – July 2020",
			descBullets: [ "Built Feedback Engine (on Microsoft’s Procurement Website), a tool that extracts user activity data as feedback using Azure Application Insights and improves the search results based on users’ actions."]
		},
		// {
		// 	role: "Software Engineer",
		// 	company: "Airbnb",
		// 	companylogo: require("./assets/images/microsoftLogo.png"),
		// 	date: "Jan 2015 – Sep 2015",
		// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		// }
		
	]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Projects",
	subtitle: "FEW OF MY LATEST PROJECTS I AM EXCITED TO SHOWCASE.",
	projects: [
		{
			image: require("./assets/images/shadowremoval.png"),
			projectName: "Shadow Removal using Diffusion",
			projectDesc: " A deep learning model that removes the shadow in an image and restores the image contents using Diffusion technique.",
			footerLink: [
				{
					name: "GitHub",
					url: "https://github.com/Saiphani724/shadow-removal-diffusion"
				}
				//  you can add extra buttons here.
			]
		},
		{
			image: require("./assets/images/stateinference.png"),
			projectName: "PASTA Inference Classification",
			projectDesc: "A model to classify if the given inference statement is warranted by the given story. Models are trained to understand the world state for the given story to predict whether the world state is consistent with the inference statement.",
			footerLink: [
				{
					name: "GitHub",
					url: "https://github.com/Saiphani724/pasta-inference-classification"
				}
			]
		}
	],
	display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

	achievementsCards: [
		{
			title: "Google Code-In Finalist",
			subtitle:
				"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
			image: require("./assets/images/codeInLogo.webp"),
			imageAlt: "Google Code-In Logo",
			footerLink: [
				{
					name: "Certification",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
				},
				{
					name: "Award Letter",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
				},
				{
					name: "Google Code-in Blog",
					url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
				}
			]
		},
		{
			title: "Google Assistant Action",
			subtitle:
				"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
			image: require("./assets/images/googleAssistantLogo.webp"),
			imageAlt: "Google Assistant Action Logo",
			footerLink: [
				{
					name: "View Google Assistant Action",
					url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
				}
			]
		},

		{
			title: "PWA Web App Developer",
			subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
			image: require("./assets/images/pwaLogo.webp"),
			imageAlt: "PWA Logo",
			footerLink: [
				{ name: "Certification", url: "" },
				{
					name: "Final Project",
					url: "https://pakistan-olx-1.firebaseapp.com/"
				}
			]
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
	displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
	blogs: [
		{
			url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [
		{
			title: "Build Actions For Google Assistant",
			subtitle: "Codelab at GDG DevFest Karachi 2019",
			slides_url: "https://bit.ly/saadpasta-slides",
			event_url: "https://www.facebook.com/events/2339906106275053/"
		}
	],
	display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
	],
	display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Contact Me ☎️"),
	subtitle:
		"Discuss a project or just want to say hi? My Inbox is open for all.",
	number: "+1-9342218554",
	email_address: "saiphani724@gmail.com"
};

// Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
	display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
	illustration,
	greeting,
	socialMediaLinks,
	splashScreen,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	isHireable
};
