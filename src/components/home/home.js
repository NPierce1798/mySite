import me from '../../images/me.jpg'
import ai from '../../images/ai.jpeg'
import wd from '../../images/wd.jpeg'
import Hero from './hero';
import AboutCard from "./aboutCard"
import MyCard from "./MyCard";
import Contact from "./contact"

function Home() {

  const aiContent = "Two years of experience working with Large Language Models as well as Classification and Regression machine learning models."
  const wdContent = "Experience building responsive, sleek, and effective interfaces for websites and applications."

    return (

      <div className="home__container">
        <div className="home__body-container">
            <Hero />
            <AboutCard/>
            <div className="home__card-container">
              <MyCard img={ai} title="Machine Learning" content={aiContent} />
              <MyCard img={wd} title="Web Development" content={wdContent} />
            </div>
            <Contact/>
        </div>
      </div>
    );
  }
  
  export default Home;