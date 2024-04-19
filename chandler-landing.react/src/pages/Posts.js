import React, {Component} from 'react';
//import Header from '../header.js'

class Posts extends Component {
  render() {

  return (

<body>
<main className='container'>

 <section id="scroll-posts" className="section posts">
      <h1>Posts & Updates (Under Construction!)</h1>
     
    
        <div className="accordion accordion-flush" id="post-accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> + August 2023 </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
              <div className="accordion-body">
                <strong>- Web Developer: Journey thus far</strong><br></br>
                <p>What a month this past July has been. I moved up within Amazon and landed a higher level position, one that will also afford me a small bit of time to practice coding during the day. I also started a front-end software developer course that will likely open some doors for me and allow me to fulfill my next immediate goal of transitioning to a new career in technology—specifically, web/software development. Hopefully, after landing a front-end focused role I can continue to learn and become a full-stack developer. As I am continuing to learn more front-end web development tools, I hope to start creating a portfolio of websites that really showcase my skills—a few of which will serve as personal projects that will hopefully contribute some meaningful content the world. This month is a short post as I am struggling to balance things and manage my time right now. Thanks for taking the time to read, stay tuned for future posts! &#128591</p>
                <strong>- Web Developer: Journey thus far</strong><br></br>
                <p>- Coming soon...</p>
                <strong>- Entry #3</strong><br></br>
                <p>content</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> + September 2023 </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
              <div className="accordion-body">
                <strong>- Entry #1</strong>
                <p>content</p>
                <strong>- Entry #2</strong>
                <p>content</p>
                <strong>- Entry #3</strong>
                <p>content</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> + October 2023 </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
              <div className="accordion-body">
                <strong>- Entry #1</strong>
                <p>content</p>
                <strong>- Entry #2</strong>
                <p>content</p>
                <strong>- Entry #3</strong>
                <p>content</p>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  </main>


</body>



  )
  
  }
}

export default Posts