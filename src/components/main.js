import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  //<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
  //</BrowserRouter>
);

export default Main;
