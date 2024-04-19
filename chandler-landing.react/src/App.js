/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>

      <CSSModuleComponent />

*/

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Header from './components/header.js'

import Home from './pages/Home.js'
/*import About from './pages/About.js'*/
import Portfolio from './pages/Portfolio.js'
import Posts from './pages/Posts.js'



function App() {



  return (

    
      <>
  
        
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/about" element={<About />} />*/}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/posts" element={<Posts/>} />
          
          </Routes>
        

</>

  )
    
    }
  
    export default App