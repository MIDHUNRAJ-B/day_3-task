import React from 'react';
import './Tt.css';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
function App()
{
  return(
    <>
    <Router>
    <nav>
          <ol>
              <li>
                  <button><Link to="/">Home</Link></button>
              </li>
              <li>
                  <button><Link to="/AboutUs">AboutUs</Link></button>
              </li>
              <li>
                  <button><Link to="/ContactUs">ContactUs</Link></button>
              </li>
          </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <footer>
      &copy; Designed by Midhun Raj
    </footer>
    </Router></>

  )
}
export default App;