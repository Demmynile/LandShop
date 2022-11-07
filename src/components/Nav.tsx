import Button from './Button'
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"
import {XMarkIcon} from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {useState} from 'react'
import { ToogleState } from '../typings'




export default function Nav() {

	// create a state for the navigation bar
	const [isToggle , setIsToggle] = useState<ToogleState>(false)

	//create an Onclick function to mobile view
	const switchNavigation = () => {
		setIsToggle(true)
	}

	//create an Onclick function to desktop view
	const switchToMain = () => {
		setIsToggle(false)
	}


  return (

	<div className='relative'>


		<div className='flex items-center justify-around  mx-auto bg-white w-screen h-[6rem] shadow-xl'>
		
		

				<div className=''>
					<Link to = "/">
					<img 
					src={logo} 
					alt="logo" 
					className='w-[80px] h-[45px]'
					/>
					</Link>
					
				</div>
				<div className='sm:hidden md:hidden lg:flex gap-x-[3.5rem]'>
					<Link to = "/" >
					<span className='hover:text-primaryColor1 cursor-pointer'>Home</span>
					</Link>
					<Link to = "/projects" >
					<span className='hover:text-primaryColor1 cursor-pointer'>Our Projects</span>
					</Link>
					<Link to = "/tribe">
					<span className='hover:text-primaryColor1 cursor-pointer'>Join Our Tribe</span>
					</Link>
					<Link to = "/blog">
					<span className='hover:text-primaryColor1 cursor-pointer' >Blog</span>
					</Link>
					<Link to = "/contact">
					<span className='hover:text-primaryColor1 cursor-pointer'>Contact Us</span>
					</Link>
					<Link to = "/faq">
					<span className='hover:text-primaryColor1 cursor-pointer'>Faq</span>
					</Link>
				</div>
				<div className='sm:hidden md:hidden lg:inline-flex'>
					<Button>Sign In</Button>
				</div>

				<div className='lg:hidden'>
				<Bars3BottomRightIcon 
				 className='h-8 w-8 mx-auto text-primaryColor1 cursor-pointer'
				 onClick = {switchNavigation}
				 
				 />
				</div>

		
			
			

		

		</div>

		{/* Navigation for smaller screens */}
        {isToggle && <div 
		 className='absolute top-0 right-0 z-10 bg-primaryColor2 shadow-lg
		 w-screen h-screen transition-all duration-700 ease-in-out 
		 flex flex-col items-center justify-center
		 md:hidden
		 lg:hidden'
		 >
           
			  <div className='absolute top-0 right-0 p-5'>
			   <XMarkIcon
				className='h-12 w-12 text-white cursor-pointer'
				onClick = {switchToMain}
				/>
			  </div>
               
		

              
			  <div className='flex flex-col gap-y-[3rem] items-center justify-center'>
			  
					<Link to = "/" >
					<span className='text-white hover:text-white text-3xl cursor-pointer'>Home</span>
					</Link>
					<Link to = "/projects" >
					<span className='text-white hover:text-white text-3xl cursor-pointer'>Our Projects</span>
					</Link>
					<Link to = "/tribe">
					<span className='text-white hover:text-white text-3xl cursor-pointer'>Join Our Tribe</span>
					</Link>
					<Link to = "/blog">
					<span className='text-white hover:text-white text-3xl cursor-pointer' >Blog</span>
					</Link>
					<Link to = "/contact">
					<span className='text-white hover:text-white text-3xl cursor-pointer'>Contact Us</span>
					</Link>
					<Link to = "/faq">
					<span className='text-white hover:text-white text-3xl cursor-pointer'>Faq</span>
					</Link>
				
			  </div>
		   
		   
		   </div>

           
		
		}
	</div>
  )
}