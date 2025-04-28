import "../Stylesheets/index.scss";
import Header from "../Components/header";
import Now from "../Components/now";
import { data } from "../constants";
import Projects from "../Components/projects";
import Work from "../Components/work";

const Home = () => {
  return (
    <div>
        <Header general={data.general} />
        <Now now={data.now} />
        <Work />
        <Projects projects={data.projects} />
    </div>
  );
};

export default Home;
