import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Header() {


  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.getElementById('master').className = theme;
    document.querySelector('body').className = theme;
    document.querySelector('.mode-status').innerHTML = theme;

  }, [theme]);



  
  return (
 /*
    <div className={`App ${theme}`}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>Hello, world!</h1>
  </div>
  */

 
 <body>    
  
 <header id="scrolltop">
    <nav id="navbar" className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
       <Link className="navbar-brand" to="/">mC</Link>
        <button id="hamburger" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            {/*<Link className="nav-link" to="/about">Introduction</Link>*/}
            {/*<Link className="nav-link" to="/about">Bio</Link>*/}
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/posts">Posts & Updates</Link>
            <Link className="nav-link" to="/">Contact</Link>
            <Link className="nav-link disabled" to="/">Coming Soon...</Link>
          </div>
        
            <div className="toggle-switch-indicator">
            <img id="indicator-image" src="" alt=""></img>
            </div>

          <div className="navbar-addon">
            <p className="mode-status">Light</p>
            <label className="toggle-switch">
              <input type="checkbox" id="mode-toggle" onClick={toggleTheme}></input>
              <span className="slider"></span>
            </label>
          </div>
          <button id="registerbtn" type="button" data-bs-toggle="modal" data-bs-target="#registermod" className="btn btn-outline-secondary">Contact</button>
        </div>
      </div>
    </nav>
  </header>

  <div className="no-dark modal fade" id="registermod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Contact Me</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="mailto: chan.man@live.com" method="post" enctype="text/plain" target="_blank">
      <div className="modal-body">
        {/*<div className="mb-3">
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="email" className="form-control" id="recipient-name" placeholder="chan.man@live.com">
          </div> */}
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text" placeholder="Let's get in touch!" name="Website Message"></textarea>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="Subscriber"></input>
            <label className="form-check-label" for="flexSwitchCheckDefault">Sign me up for email updates!</label>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-secondary disabled" action="example.htm" method="get" target="_blank">Am I Subscribed?</button>
        <button type="submit" className="btn btn-primary">Send message</button>
              </div>
        </form>

    </div>
  </div>
</div>
  </body>

  )

}

export default Header;