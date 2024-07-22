import '../Stylesheets/index.css'
import Header from '../Components/header';
import Now from '../Components/now';
import Projects from '../Components/projects';
import { data } from '../constants';
import Social from '../Components/social';

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <Header general={data.general} />
        <Now now={data.now} />
        <Projects projects={data.projects} />
        <Social socials={data.socials} updatedOn={data.updatedOn}/>
      </div>
    </div>
  );
}

export default Home;
