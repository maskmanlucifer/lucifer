import '../Stylesheets/index.scss'
import Header from '../Components/header';
import Now from '../Components/now';
import Projects from '../Components/projects';
import { data } from '../constants';
import Social from '../Components/social';
import Books from '../Components/books';

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <Header general={data.general} />
        <Now now={data.now} />
        <Projects projects={data.projects} />
        <Books books={data.books} />
        <Social socials={data.socials} updatedOn={data.updatedOn}/>
      </div>
    </div>
  );
}

export default Home;
