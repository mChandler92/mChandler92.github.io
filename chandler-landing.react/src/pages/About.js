import React, {Component} from 'react';
//import Header from '../header.js';

//import { DarkMode } from '../jsComponents.js'

  class About extends Component {
    render() {
    return (


<body>

  <main className="container">
    <section id="scroll-bio" className="section bio">
      <h1>Forgive the mess! This page is currently under construction!</h1>
      <h2>About Me</h2>
      <p className="bio">Hi! <span style={{color:'green'}}><strong>My name is Matthew Chandler</strong></span>. I have been living in Austin, Texas for about 3 years now. In fact, I have been living in Texas for my entire life! For work, I am a route scheduler with Amazon; however, I am looking to switch my career and become a web/software developer! And it is because of this that I have created this website template! I went to high school in a town called Magnolia, just outside of Houston and I went to Baylor University for my bachelor's and professional degrees. Sic 'em!</p>
      <div id="meimgframe" className="frame">
        <img id="meimg" className="img" src="./media/prof.jpeg" alt=""></img>
      </div>
    </section>
  </main>
 
</body>

    )

    }
}

export default About;