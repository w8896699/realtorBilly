import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
// const Skills = dynamic(() => import("../containers/Skills"));
// const Proficiency = dynamic(() => import("../containers/Proficiency"));
// const Education = dynamic(() => import("../containers/Education"));
// const Experience = dynamic(() => import("../containers/Experience"));
// const Projects = dynamic(() => import("../containers/Projects"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
// const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const ComingSoon = dynamic(() => import("../components/ComingSoon"));
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { openSource } from "../portfolio";
import SEO from "../components/SEO";
// import { GithubUserType } from "../types";

export default function Home({}: {}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      {/* <Skills />
      <Proficiency />
      <Education />
      <Experience /> */}
      {/* <Feedbacks /> */}
      {/* <Projects /> */}
      {/* <GithubProfileCard {...githubProfileData} /> */}
      <ComingSoon/>
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

// export async function getStaticProps() {
//   const githubProfileData: GithubUserType = await fetch(
//     `https://api.github.com/users/${openSource.githubUserName}`
//   ).then(res => res.json());

//   return {
//     props: { githubProfileData },
//   };
// }
