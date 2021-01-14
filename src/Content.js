import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

const about =
  "A creative and strategic thinker motivated to build a career in Software Development. I am always keen towards learning new and modern technologies. Passionate about implementing and launching new projects. Looking to start a career as an entry-level software developer with a reputed firm driven by technology.";

const education = [
  {
    year: "2018-current",
    cource: "Bachelor's degree in Computer Science",
    grade: "CGPA-9.8",
  },
];

const projects = [
  {
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Academia Factual Information Management System",
    link: "http://v24.pythonanywhere.com/",
  },
];

const skills = [
  { domain: "Front end development", skills: "html5, CSS3, JavaScript" },
  { domain: "Back end development", skills: "Python, Java" },
  { domain: "Frameworks", skills: "ReactJS, Django, Bootstrap4" },
  { domain: "Database", skills: "SQL, SQLite" },
  { domain: "Cloud", skills: "AWS, Firebase Hosting" },
];

const socialLinks = [
  {
    label: "Linked In",
    link: "https://www.linkedin.com/in/vaishnavi-sawant-276085203/",
    icon: LinkedInIcon,
    username: "Vaishnavi Sawant",
  },
  {
    label: "Github",
    link: "https://github.com/prog-coder24?tab=repositories",
    icon: GitHubIcon,
    username: "prog-coder24",
  },
  {
    label: "Email",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavisawant1224@gmail.com",
    icon: EmailIcon,
    username: "vaishnavisawant1224@gmail.com",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/vaishnaviiswnt",
    icon: TwitterIcon,
    username: "@vaishnaviiswnt",
  },
];

export { about, education, projects, skills, socialLinks };
