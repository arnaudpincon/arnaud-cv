import { BrowserRouter, Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from 'react';
import AboutDetails from './pages/AboutDetails';


const App = () => {

  const location = useLocation();
  const history = useHistory();

  // Navigation au scroll

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + '/';

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 200);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 200);
        }
      }

      switch(window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('portfolio')
            }, 200);
          } 
          break;
        case url + "portfolio":
          wheelRouter('about', '');
          break;
        case url + "about":
          wheelRouter('contact', 'portfolio');
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('about')
            }, 200);
          } 
          break;
        default:
          console.log('nothing');
      }
    }

    window.addEventListener('wheel', handleScrollToElement)
  }, [history])

  // Fin navigation au scroll

  return (

    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/aboutDetails" component={AboutDetails} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
