import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Tribe from '../pages/Tribe';


function Routing() {
  return (
	<div>

        <Routes>
           <Route path='/' element = {<Home />}/>  
           <Route path = '/projects' element = {<Projects />}/>  
           <Route path = '/tribe' element = {<Tribe />}/> 
           <Route path = '/blog' element = {<Blog />}/>   
           <Route path = '/contact' element = {<Contact />}/>  
           <Route path = '/faq' element = {<Faq />} />  
        </Routes>
	</div>
  )
}

export default Routing