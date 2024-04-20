import React from 'react'
import {Component} from 'react';



class Home extends Component {






  render() {
  return (


/*-------------- MINI PROJECTS TO ADD --------------
* delegation
* (DONE) fadeslide 

----------------------------------------------------------*/

/*---------------------------------- TODO ---------------------------------------------
+ adjust viewport/body dimensions (slide in effect)
+ scale dark toggle btn
+ format contact section
+ format text fade-in
+ fix dark mode for header contact modal
+ (DONE) Add additional contact form at bottom home
+ (DONE) format contact form 
+ (DONE) shorten file paths for file tree compat
+ (DONE) fix header image
+ adjust sticky header/ header image for scrollspy/header hyperlinks
+ fix mobile version of mode-toggler

--------------------------------- TODO ---------------------------------------------*/

/*------------------- TEMP ---------------------
  <div className="container">
    <h2 className="mode-status">Currently in Light Mode</h2>
    <label className="toggle-switch">
      <input type="checkbox" id="mode-toggle">
      <span className="slider"></span>
    </label>
  </div>
--------------------- TEMP ----------------------*/


<body>


  <main className ="container">
    <div id="introimgframe" classNameName="frame">
      <img id="introimg" src="./media/header.jpg" alt=""></img>
    </div>
    <hr className="break"></hr>

{/*------------------------------------- START FADE IN ------------------------------ */}

 
        <section id="scroll-intro" className="section intro">
          <div className="fade-container">
          <div className="item right">

          <div className="item__content">
            <h2>Introduction</h2>
            <p>Welcome to my personal website, hand crafted. The purpose of this website will be to serve as a sort of hub for others to observe a personal portfolio that illustrates my journey through life thus far as well as projects that I have created, technical or otherwise. Read below for more information on the mission behind this website and to learn more about me.</p>
            <p><b>Mission:</b> This website will act as a hub to promote my personal brand of content. This site will also provide access to personal projects that champion causes, philosophies and other content that I resonate with and think will benefit others! Please bear with me as this site is in its infancy. This is only the beginning!</p>
            <p><b>Projects:</b> Outside of regular posts that will discuss happenings in my life and professional journey, I plan on releasing other websites that will host information and discussions as mentioned in the mission statement above. Stay tuned.</p>
          </div>

          </div>
           <div className="item left">

          <div className="item__content">
            <h2>About Me</h2>
            <p>Hi! My name is Matthew Chandler. I have been living in Austin, Texas for about 3 years now. In fact, I have been living in Texas for my entire life! For work, I am a route scheduler with Amazon; however, I am looking to switch my career and become a web/software developer! And it is because of this that I have created this website template! I went to high school in a town called Magnolia, just outside of Houston and I went to Baylor University for my bachelor's and professional degrees. Sic 'em!</p>
            <div id="meimgframe" className="frame">

              <img id="meimg" className="img" src="./media/prof.jpeg" alt=""></img>
            </div>
          </div>
          </div>
          </div>
          </section>
     


    <hr className="break"></hr>

    {/*--------------------------------------- END FADE IN -------------------------------------*/ }
    <section id="scroll-contact" className="section contact">
      <h2>Contact Me</h2>


      {/*------------------------ DUPLICATED MODAL, NEED TO FORMAT ----------------------------------------
      
        
        <div id="contact-form" className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
           *******<h1 className="modal-title fs-5" id="exampleModalLabel">Contact Me</h1>******
          </div>
          <div className="modal-body">
            <form action="mailto: chan.man@live.com" method="post" enctype="text/plain" target="_blank">
              ********<div className="mb-3">
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="email" className="form-control" id="recipient-name" placeholder="chan.man@live.com">
          </div>--

              <div className="mb-3">
                <label for="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" placeholder="Let's get in touch!" name="Website Message"></textarea>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="Subscriber">
                <label className="form-check-label" for="flexSwitchCheckDefault">Sign me up for email updates!</label>
              </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-secondary disabled" action="example.htm" method="get" target="_blank">Am I Subscribed?</button>
            <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    ------------------------- DUPLICATED MODAL, NEED TO FORMAT ----------------------------------------*/}

     
     <div className="container">
     
     <div id="form-submitted-msg">Form successfully submitted!</div> 
     
     
     


    
    <form id="contact-form" novalidate>
      <div className="input-group">
        <label for="firstName" className="form-label">First name </label>
        <input type="text" id="firstName" name="firstName" className="form-control" required></input>
        <small className="error-msg invalid-feedback">Required</small>
      </div>
      <div className="input-group">
        <label for="lastName" className="form-label">Last name </label>
        <input type="text" id="lastName" name="lastName" className="form-control" required></input>
        <small className="error-msg invalid-feedback">Required</small>
      </div>
      <div className="input-group">
        <label for="email" className="form-label">Email </label>
        <input type="email" id="email" name="email" className="form-control" required></input>
        <small className="error-msg invalid-feedback">Required</small>
      </div>

{/*
<div className="input-group">
        <label for="msg" className="form-label">Message </label>
        <textarea id="msg" name="message" className="form-control" placeholder="Send me a message!" required><textarea>
        <small className="error-msg invalid-feedback">Required</small>
      </div>
       */}

{/*

      <div className="input-group">
        <label for="password" className="form-label">Password </label>
        <input type="password" id="password" name="password" className="form-control" required>
        <small className="error-msg invalid-feedback">Required</small>
      </div>
      <div className="input-group select">
        <label for="password" className="form-label">Select Account Type </label>
        <select id="accountType" name="accountType" className="form-select" required>
          <option value="Please select an option" selected className="text-muted">Please select an option</option>
          <option value="Free Account">Free Account</option>
          <option value="Premium Account">Premium Account</option>
        </select>
        <small className="error-msg invalid-feedback">Required</small>
      </div>


/*}

{/*
      <div className="input-group radio">
        <div className="form-check">
          <input type="radio" id="personal" name="purpose" value="Personal" className="form-check-input" required>
          <label for="personal" className="form-check-label">Personal</label>
          <small className="error-msg invalid-feedback">Required</small>
        </div>

        <div className="form-check">
          <input type="radio" id="business" name="purpose" value="Business" className="form-check-input" required>
          <label for="business" className="form-check-label">Business</label>
          <small className="error-msg invalid-feedback">Required</small>
        </div>
      </div>

      */}
      <div className="input-group checkbox form-check">
        <input type="checkbox" name="subscribe" id="subscribeYes" className="form-check-input" required></input>
        <label for="subscribeYes" className="form-check-label">Subscribe to my newsletter?</label>
        <small className="error-msg invalid-feedback">Required</small>
      </div>
      <div className="form-btns">
        <button type="submit" className="btn btn-primary submit" disabled>SUBMIT</button>
        <button type="reset" className="btn btn-secondary">CLEAR FORM</button>
      </div>
    </form>

</div>

    </section>





   {/*
         <form id="contact-form" method="post" enctype="application/x-www-form-urlencoded" action="javascript:void(0);" target="_self" autocomplete="on"> 

    
        <label for="input-name">

          <p>Full Name:</p>
          <input id="input-name" type="text">
        </label>

        <label for="input-email">
          <p>Email Address:</p>
          <input id="input-email" type="email">
        </label>

        <label for="input-message">
          <p></p>
          <textarea id="input-message" placeholder="Send me a message!"></textarea>
        </label>


        <input id="submit-btn" type="submit">

*/}

    
{/*----------------------------------------------------------------------------------------------------*/}
  </main>
</body>

  )
  }
}

export default Home