import Button from './Button'
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid"
import {XMarkIcon , ChevronDownIcon} from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {useState} from 'react'
import { DropDownState, ToogleState } from '../typings'
import { motion } from 'framer-motion'





export default function Nav() {

	// create a state for the navigation bar
	const [isToggle , setIsToggle] = useState<ToogleState>(false)

	const [dropDown , setDropDown] = useState<DropDownState>(false)

	const [bookDrop , setBookDrop] = useState<DropDownState>(false)


	

	//create an Onclick function to mobile view
	const switchNavigation = () => {
		setIsToggle(true)
	}

	//create an Onclick function to desktop view
	const switchToMain = () => {
		setIsToggle(false)
	}

    const enableDropDown = () => {
		setDropDown(!dropDown)
	}

	
    const enableBookDown = () => {
		setBookDrop(!bookDrop)
	}
  return (

	<div className='relative'>


		<div className='flex items-center justify-around  mx-auto bg-white w-screen h-[6rem] shadow-lg'>
		
		

				<div className=''>
					<Link to = "/">
					<img 
					src={logo} 
					alt="logo" 
					className='w-[80px] h-[45px]'
					/>
					</Link>
					
				</div>
				<div className='hidden lg:flex gap-x-[2rem]'>
					<Link to = "/" >
					<span className='hover:text-primaryColor1 font-urbanist cursor-pointer'>Home</span>
					</Link>
					<div className='relative'>
				     	<span className='lg:hover:text-primaryColor1 font-urbanist cursor-pointer flex items-center justify-center gap-x-3'>

						Our Projects

						<ChevronDownIcon 
						 className='w-4 h-4 text-black text-bold'
						 onClick = {enableDropDown}
						/>

						</span>

						{dropDown && <div className='bg-white w-[150px] h-[150px] p-2 z-10 shadow-lg absolute top-11 flex flex-col items-center justify-center gap-y-1'>
                              <li className='text-primaryColor1 font-urbanist font-bold list-none 
							  hover:cursor-pointer hover:bg-primaryColor1 p-3 w-[150px] hover:text-white'
							  >
								Grow
							 </li>
							  <li className='text-primaryColor1 font-urbanist font-bold list-none
							   hover:cursor-pointer hover:bg-primaryColor1 p-3 w-[150px] hover:text-white'
							   >
								Invest
							  </li>
							  <li className='text-primaryColor1 font-urbanist font-bold list-none
							   hover:cursor-pointer hover:bg-primaryColor1 p-3 w-[150px] hover:text-white'
							   >
								Develop
							  </li>
							 
						</div>}
					</div>
					
				
					<Link to = "/tribe">
					<span className='hover:text-primaryColor1 font-urbanist cursor-pointer'>Join Our Tribe</span>
					</Link>
					<Link to = "/about">
					<span className='hover:text-primaryColor1 font-urbanistcursor-pointer' >About</span>
					</Link>
					<Link to = "/blog">
					<span className='hover:text-primaryColor1 font-urbanistcursor-pointer' >Blog</span>
					</Link>
					<Link to = "/thift">
					<span className='hover:text-primaryColor1 font-urbanistcursor-pointer' >Thift</span>
					</Link>
					<Link to = "/contact">
					<span className='hover:text-primaryColor1 font-urbanist cursor-pointer'>Contact Us</span>
					</Link>
					<Link to = "/faq">
					<span className='hover:text-primaryColor1 font-urbanist cursor-pointer'>Faq</span>
					</Link>
				</div>
				<div className='hidden lg:inline-flex space-x-6'>
					<Button myStyle="a-btn" >Sign In</Button>

					{/* Other Buttons */}
					<div className='relative'>
						<button className='bg-primaryColor2  transition-all duration-300 ease-in-out text-white 
												px-7 py-2 rounded-lg hover:bg-transparent hover:border
												hover:border-primaryColor2  hover:text-primaryColor2 flex items-center justify-center gap-x-4'
						>
							Book Inspection

							<ChevronDownIcon 
						    	className='w-5 h-5 text-bold' 
								onClick = {enableBookDown}
							/>


							{bookDrop && <div className='bg-white w-[150px] h-[100px] p-7 z-10 shadow-lg absolute top-11 flex flex-col items-center justify-center gap-y-3'>
                              <li className='text-primaryColor1 font-urbanist font-bold list-none 
							  :cursor-pointer hover:bg-primaryColor1 p-3 w-[150px] hover:text-white'
							  >
								Physical
							 </li>
							  <li className='text-primaryColor1 font-urbanist font-bold list-none
							   hover:cursor-pointer hover:bg-primaryColor1 p-3 w-[150px] hover:text-white'
							   >
								Virtual
							  </li> 
					
							 
						      </div>}
							
						</button>

					</div>
						
					
					


				</div>

				<div className='lg:hidden'>
				<Bars3BottomRightIcon 
				 className='h-8 w-8 mx-auto text-primaryColor1 cursor-pointer'
				 onClick = {switchNavigation}
				 
				 />
				</div>

		
			
			

		

		</div>

		{/* Navigation for smaller screens */}
        {isToggle && <motion.div 
		 initial = {{
			opacity : 0,
			
			
		}}
		 animate = {{
			opacity : 1,
			
			
		}}
		transition = {{
			duration : 0.3
		}}

		 className='absolute top-0 right-0 z-10 bg-primaryColor2 shadow-lg
		 w-screen h-screen transition-all duration-700 ease-in-out 
		 flex flex-col items-center justify-center
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
					<span className='text-white hover:text-white text-2xl font-urbanist  cursor-pointer'>Home</span>
					</Link>
					<Link to = "/projects" >
					<span className='text-white hover:text-white text-2xl  font-urbanist  cursor-pointer'>Our Projects</span>
					</Link>
					<Link to = "/tribe">
					<span className='text-white hover:text-white text-2xl font-urbanist cursor-pointer'>Join Our Tribe</span>
					</Link>
					<Link to = "/blog">
					<span className='text-white hover:text-white text-2xl font-urbanist cursor-pointer' >Blog</span>
					</Link>
					<Link to = "/contact">
					<span className='text-white hover:text-white text-2xl font-urbanist cursor-pointer'>Contact Us</span>
					</Link>
					<Link to = "/faq">
					<span className='text-white hover:text-white text-2xl font-urbanist cursor-pointer'>Faq</span>
					</Link>

					<div>
				      <button className='bg-white border border-white font-bold  transition-all duration-300 ease-in-out text-primaryColor2 px-6 py-2 rounded-lg'>Sign In</button>
			        </div>
				
			  </div>
			
		   
		   
		   </motion.div>

           
		
		}
	</div>
  )
}