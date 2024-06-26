import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Contact = dynamic(() => import("../containers/ContactBox"));
// const Skills = dynamic(() => import("../containers/Skills"));
// const Proficiency = dynamic(() => import("../containers/Proficiency"));
// const Education = dynamic(() => import("../containers/Education"));
// const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
// const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const ComingSoon = dynamic(() => import("../components/ComingSoon"));
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { review } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({githubProfileData}: {githubProfileData:any}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Contact />
      {/* <Skills />
      <Proficiency />
      <Education />
      <Experience /> */}
      <Feedbacks  {...githubProfileData} />
      {/* <Projects /> */}
    {/* <GithubProfileCard {...githubProfileData} /> */}
      <ComingSoon/>
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

// export const review = ["1hanzla100", "w8896699", "ShellyHanxue"];

export const getStaticProps = async () => {
  const fetchPromises = review.map(reviewer => {
    return fetch(`https://api.github.com/users/${reviewer}`)
      .then(res => res.json())
      .then(data => {
        return data;
      });
    });
    
    const githubProfileData = await Promise.all(fetchPromises);
  return {
    props: {
      githubProfileData
    }
  };
};