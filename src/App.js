import { useEffect } from 'react';
import Home from './Pages/home';

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

  return (
    <Home/>
  );
}

export default App;
