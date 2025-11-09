import { useEffect, useState } from 'react';
import Home from './Pages/home';
import Books from './Pages/books';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import './Stylesheets/index.scss';
import Social from './Components/social';
import { data } from './constants';
import Bookmarks from './Pages/bookmarks';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('theme', theme);
      } catch (error) {
        // ignore persistence errors (e.g., Safari private mode)
      }
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
        <Navbar path={path} theme={theme} onToggleTheme={handleThemeToggle} />
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lucifer" element={<Home />} />
              <Route path="/books" element={<Books books={data.books}/>} />
              <Route path="/bookmarks" element={<Bookmarks />} />
           </Routes>
         <Social socials={data.socials} updatedOn={data.updatedOn} />
         </div>
      </div>
  );
}

export default App;
