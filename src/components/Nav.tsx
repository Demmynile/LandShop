import React from 'react'
import Button from './Button'
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'




export default function Nav() {
  return (
	<div className='flex items-center justify-around  mx-auto bg-white w-screen h-[6rem] shadow-xl'>
    
       

			<div className=''>
				<Link to = "/">
				  LOGODGDHDG
				</Link>
				
			</div>
			<div className='sm:hidden md:hidden lg:flex gap-x-[3.5rem]'>
				<Link to = "/" >
			      <span className='hover:text-amber-600 cursor-pointer'>Home</span>
				</Link>
				<Link to = "/projects" >
			      <span className='hover:text-amber-600 cursor-pointer'>Our Projects</span>
				</Link>
				<Link to = "/tribe">
				  <span className='hover:text-amber-600 cursor-pointer'>Join Our Tribe</span>
				</Link>
				<Link to = "/blog">
				  <span className='hover:text-amber-600 cursor-pointer' >Blog</span>
				</Link>
				<Link to = "/contact">
				<span className='hover:text-amber-600 cursor-pointer'>Contact Us</span>
				</Link>
			    <Link to = "/faq">
				<span className='hover:text-amber-600 cursor-pointer'>Faq</span>
				</Link>
			</div>
			<div className='sm:hidden md:hidden lg:inline-flex'>
				<Button>Sign In</Button>
			</div>

			<div className='lg:hidden'>
			  <Bars3BottomRightIcon  className='h-8 w-8 mx-auto text-black cursor-pointer'/>
			</div>

	
		
        

    

	</div>
  )
}