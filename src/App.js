import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Project4 from './components/pages/Project4';
import Project5 from './components/pages/Project5';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/projects' component={Projects} />
            <Route path='/project-1' component={Project1} />
            <Route path='/project-2' component={Project2} />
            <Route path='/project-3' component={Project3} />
            <Route path='/project-4' component={Project4} />
            <Route path='/project-5' component={Project5} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
