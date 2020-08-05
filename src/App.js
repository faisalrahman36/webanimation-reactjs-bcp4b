import React from 'react';
import './App.css';
import VideoSection from './VideoSection';
import WorksWith from './WorksWith';
import About from './About';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";

export default function App() {

  return (
    <Router>
    <nav className="Nav" >
    <Link to="/"> <img className= "linkmut" alt="some alt" src="https://mutify.app/images/mutify-logo-6ab64e5ad7.png" /><p className="linkmut"> <strong>Mutify Demo </strong> </p> </Link>

      <Link to="/" className="NavLink">Home</Link>
      
      <Link to="/workswith" className="NavLink">Works With</Link>
      <Link to="/about" className="NavLink">About</Link>
      <Link to="/somesection" className="NavLink">Some Section</Link>
      <Link to="/download" className="myButton">Download</Link>
       
      </nav>
    <Routes>
      <Route path="/" element={
      <div>   <VideoSection /> <br /> <br /> <WorksWith /> </div>} />
      <Route path="about" element={<About />}/>
      <Route path="workswith" element={<WorksWith />}/>
      <Route path="somesection" element={<SomeSection />}/>
      <Route path="download" element={<Download />}/>
     
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

  );
}


function NotFound () {
  return (
<div>
  <h1>Not found!</h1>
  <p>Sorry your page was not found!</p>
</div>
);
}


function SomeSection () {
  return (
<div>
  <h1>Just a demo section!</h1>
  <p>Cheers!</p>
</div>
);
}


function Download () {
  return (
<div>
  <h1>Just a demo download page!</h1>
  <p>Cheers!</p>
</div>
);
}

