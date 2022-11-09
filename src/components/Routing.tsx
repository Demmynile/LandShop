import React from 'react'
import {Routes , Route} from 'react-router-dom'
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Thift from '../pages/Thift';
import Tribe from '../pages/Tribe';


function Routing() {
  return (
	<div>

        <Routes>
           <Route path='/' element = {<Home />}/>  
           <Route path = '/projects' element = {<Projects />}/>  
           <Route path = '/about' element = {<About />}/>  
           <Route path = '/tribe' element = {<Tribe />}/> 
           <Route path = '/blog' element = {<Blog />}/>   
           <Route path = '/thift' element = {<Thift />}/> 
           <Route path = '/contact' element = {<Contact />}/>  
           <Route path = '/faq' element = {<Faq />} />  
        </Routes>
	</div>
  )
}

export default Routing