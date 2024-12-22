import { useEffect } from 'react';
import Home from './Pages/home';
import Books from './Pages/books';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import './Stylesheets/index.scss';
import Social from './Components/social';
import { data } from './constants';
import Bookmarks from './Pages/bookmarks';

function App() {
    useEffect(() => {
      let xs = [];
      for (let i = 0; i <= 200; i++) {
        xs.push(i);
      }
    
      let t = 0;
    
      function animate() {
        let points = xs.map(x => {
          let y = 10 + 3 * Math.sin((x + t) / 4);
          return [x, y];
        });
    
        let path = "M" + points.map(p => {
          return p[0] + "," + p[1];
        }).join(" L");
    
        document.querySelectorAll("#wavePath").forEach(function (pathElement) {
          pathElement.setAttribute("d", path);
        });
    
        t += 0.1;
    
        requestAnimationFrame(animate);
      }
    
      animate();
  }, []);

  const path = window.location.pathname;

  return (
    <div className='main'>
        <div className='container'>
        <Navbar activeElement={path} />
         <Routes>
            <Route path="/lucifer" element={<Home />} />
            <Route path="/lucifer/books" element={<Books books={data.books}/>} />
            <Route path="/lucifer/bookmarks" element={<Bookmarks />} />
         </Routes>
         <Social socials={data.socials} updatedOn={data.updatedOn} />
         </div>
      </div>
  );
}

export default App;
