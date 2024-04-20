import React, {Component} from 'react';
//import Header from '../header.js'

//import { DarkMode } from '../jsComponents.js'


class Portfolio extends Component {
  render() {

    return (

      <body>
    

  

  <main className="container">
     <section id="scroll-portfolio" className="section portfolio">
       <h1>Portfolio</h1>
       <div className="projectBoard">

         <div id="card1" className="card">
           <img src="./media/memoryBoard.png" className="card-img-top preview" alt="" usemap="#image_map1"></img>
           <map name="image_map1">
             <area target="_blank" rel="noopener noreferrer" alt="Memory_Board" title="Memory_Board" href="https://github.com/mChandler92/mini-projects.git" coords="-2,1,936,547" shape="rect"></area>
           </map>
           <div className="card-body">
             <h5 className="card-title">Memory Board</h5>
             <p className="card-text">My introductory HTML project</p>
             <a href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark" rel="noopener noreferrer" target="_blank">View</a>
           </div>
         </div>

         <div id="card2" className="card">
           <img src="./media/comingSoon.jpg" className="card-img-top preview" alt="..." usemap="#image_map2"></img>
           <map name="">
             <area target="_blank" rel="noopener noreferrer" alt="Coming_Soon" title="Coming_Soon" href="" coords="18,22,2994,3325" shape="rect"></area>
           </map>
           <div className="card-body">
             <h5 className="card-title">Project_M</h5>
             <p className="card-text">Check back later, sign up for updates!</p>
             <a href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark disabled">View</a>
           </div>
         </div>

         <div id="card3" className="card">
           <img src="./media/linked.png" className="card-img-top preview" alt="..." usemap="#image_map3"></img>
           <map name="image_map3">
             <area target="_blank" rel="noopener noreferrer" alt="LinkedIn" title="LinkedIn" href="https://linkedin.com/in/matthewchandlerli" coords="24,27,577,572" shape="rect"></area>
           </map>
           <div className="card-body">
             <h5 className="card-title">LinkedIn</h5>
             <p className="card-text"></p>
             <a href="https://linkedin.com/in/matthewchandlerli" rel="noopener noreferrer" className="btn btn-dark" target="_blank">View</a>
           </div>
         </div>
        
         <div id="card4" className="card">
           <img src="./media/todo.png" className="card-img-top preview" alt="..." usemap="#image_map4"></img>
            <map name="image_map4">
            <area alt="" title="" target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" coords="3,-59,1131,188" shape="rect"></area>
           </map>
           <div className="card-body">
             <h5 className="card-title">To Do List</h5>
             <p className="card-text">C1 Mini Project</p>
             <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark">View</a>
           </div>
         </div>

         <div id="card5" className="card">
           <img src="./media/dragdrop.png" className="card-img-top preview" alt="..." usemap="#image_map5"></img>
           <map name="image_map5">
              <area alt="" title="" rel="noopener noreferrer" target="_blank" href="https://github.com/mChandler92/mini-projects.git" coords="4,11,454,411" shape="rect"></area>
            </map>
           <div className="card-body">
             <h5 className="card-title">Drag & Drop</h5>
             <p className="card-text">C1 Mini Project</p>
             <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark">View</a>
           </div>
         </div>

         <div id="card6" className="card">
           <img src="./media/quotegen.png" className="card-img-top preview" alt="..." usemap="#image_map6"></img>
           <map name="image_map6">
            <area alt="" title="" rel="noopener noreferrer" target="_blank" href="https://github.com/mChandler92/mini-projects.git" coords="1,0,722,393" shape="rect"></area>
            </map>
           <div className="card-body">
             <h5 className="card-title">Quote Generator</h5>
             <p className="card-text">C1 Mini Project</p>
             <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark">View</a>
           </div>
         </div>

          <div id="card7" className="card">
          <img src="./media/quizApp.png" className="card-img-top preview" alt="..." usemap="#image_map7"></img>
          <map name="image_map7">
          <area alt="" title="" target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" coords="32,123,572,581" shape="rect"></area>
          </map>
          <div className="card-body">
            <h5 className="card-title">Quiz App</h5>
            <p className="card-text">C1 Project</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark">View</a>
          </div>
          </div>

          <div id="card8" className="card">
           <img src="./media/calc.png" className="card-img-top preview" alt="..." usemap="#image_map8"></img>
         <map name="image_map8">
        <area alt="" title="" target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" coords="11,11,763,397" shape="rect"></area>
            </map>
           <div className="card-body">
             <h5 className="card-title">Calculator App</h5>
             <p className="card-text">C1 Project</p>
             <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/mini-projects.git" className="btn btn-dark">View</a>
           </div>
         </div>

            <div id="card9" className="card">
           <img src="./media/practiceProblems.png" className="card-img-top preview" alt="..." usemap="#"></img>
           <div className="card-body">
             <h5 className="card-title">Data Structures and Algorithms Practice</h5>
             <p className="card-text">Showcase</p>
             <a target="_blank" rel="noopener noreferrer" href="https://github.com/mChandler92/problems.git" className="btn btn-dark">View</a>
           </div>
         </div>

       </div>

     </section>
</main>

</body>




    )

  }
}

export default Portfolio