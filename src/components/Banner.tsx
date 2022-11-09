import {useState} from 'react'
import BgOne from '../assets/backgroundImage1.png'
import proper from '../assets/Vector.png'


function Banner() {

	// creating state for the change of tabs
	const [step , setStep] = useState(1)

	//changes 
	const goGrow = () => {
		setStep(1)
	}

	const goInvest = () => {
		setStep(2)
	}

	const goDevelop = () => {
		setStep(3)
	}
	
	
  return (
	<div className=' sm:items-center sm:justify-center  md:flex md:flex-col   md:items-center md:justify-center lg:w-screen  lg:bg-white  h-[50rem] lg:flex lg:flex-row justify-around items-center'>

       <div 
	    className=' sm:mx-auto sm:-[456px] sm:w-[395px] sm:gap-y-[3rem]   md:mx-auto md:h-[456px] md:w-[395px] md:gap-y-[3rem] lg:mx-auto h-[406px] w-[395px] p-8 flex flex-col
	    items-center justify-center gap-y-[2rem] bg-white'
		>
              <div className='md:self-center lg:self-start'>
               
				 <span className='md:text-6xl lg:text-black font-urbanist font-bold text-4xl'>
				    Buy   
			 	 </span>
				 <span className='md:text-6xl ml-4 text-primaryColor2 font-urbanist font-bold text-4xl'>
				    Small
				 </span>
				  <br/>
				  <span className='md:text-6xl  text-black font-urbanist font-bold text-4xl'>
				   Grow 
				  </span>
				  <span className='md:text-6xl ml-4 text-primaryColor1 font-urbanist font-bold text-4xl'>
				    Big
				 </span>
			
			  </div>
			  <div className='md:self-center lg:self-start'>
                  <span className='text-sm font-urbanist leading-4 w-5'>
				     Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit.
				  </span>
			  </div>
			  <div className='md:self-center lg:self-start'>
                 <button className='bg-transparent border border-primaryColor1 py-5 px-10 rounded-lg text-black transition-all duration-200 ease-in-out hover:bg-transparent hover:border hover:border-primaryColor2 hover:text-primaryColor2'>
                    Get Started
				 </button>
			  </div>
	   </div>
	   <div className='hidden  lg:inline-flex'>
           <img  
		   src={BgOne} 
		   alt="Background-1"
		   className='h-[800px] w-[980px]'
		
		   
		   />
	   </div>
	<div className='hidden xl:flex xl:flex-col xl:absolute xl:bottom-[-139px] xl:left-[113px] lg:flex flex-col absolute bottom-[-139px] left-[113px]'>

	   <div className='self-end flex items-center justify-center'>
				<div 
				onClick={goGrow}
				className={step === 1 ?
				 'w-40 h-16 rounded-t-none bg-white shadow shdaow-lg flex items-center justify-center cursor-pointer'
				: 'w-40 h-16 rounded-t-none bg-primaryColor1 shadow shdaow-lg flex items-center justify-center cursor-pointer' }>
                       <span className={step === 1 ? 'text-primaryColor2 font-urbanist font-bold' : 'text-white font-urbanist font-bold'}>Grow</span>
				</div>
				<div  
				onClick={goInvest}
				className={step === 2 ? 
				 'w-40 h-16 rounded-r-none bg-white shdaow-lg flex items-center justify-center cursor-pointer' 
				: 'w-40 h-16 rounded-r-none bg-primaryColor1 shdaow-lg flex items-center justify-center cursor-pointer'
			    }>
                    <span className={step === 2 ? 'text-primaryColor2 font-urbanist font-bold' : 'text-white font-urbanist font-bold'}>Invest</span>   
				</div>
				<div 
				onClick = {goDevelop}
				className={step === 3 ? 
				'w-40 h-16 rounded-r-sm bg-white border-b-0 shdaow-lg flex items-center justify-center cursor-pointer'
				: 'w-40 h-16 rounded-r-sm bg-primaryColor1 border-b-0 shdaow-lg flex items-center justify-center cursor-pointer'
			    }>
                      <span className={step === 3 ? 'text-primaryColor2 font-urbanist font-bold' : 'text-white font-urbanist font-bold'}>Develop</span>
				</div>
                         
	   </div>
	   <div className='bg-white shadow-lg rounded-r-none w-[871px] h-[160.5px]  mb-1.5 flex '>
		      
         
			 <div className='flex justify-around  items-center w-[871px] h-[160.5px]'>
				<div className=''>
					<li className='marker:text-primaryColor2 font-urbanist' >Own properties at your pace</li>
					<li className='marker:text-primaryColor2 font-urbanist'>Stress-free</li>
					<li className='marker:text-primaryColor2 font-urbanist'>No payment plan</li>
				</div>
				<div>
					<button className='bg-transparent border border-primaryColor2 px-12 py-2 rounded-lg text-primaryColor2 font-bold font-urbanist  flex items-center gap-x-4'>
                       Learn More 
					   <img src = {proper} alt = ""  className=''/>
					</button>
				</div>
			 </div>
	   </div>

	</div>
	</div>

  )
}

export default Banner