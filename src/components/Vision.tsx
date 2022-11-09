
import 	VisionPic from '../assets/vision.png'

function Vision() {
  return (
	<div className='h-[30rem] mx-auto bg-white flex items-center justify-around'>

       

	   <div className='flex flex-col gap-y-4'>
            <div>
				<span className='font-bold text-3xl font-urbanist'>
			        Our Vision
				</span>
				
			</div>
			<div>
			<span className='text-xl font-urbanist text-primaryColor2'>
			 To fill the real estate deficit for every generation<br/>
			 of Nigeria’s growing population
			</span>
			 
            </div>
			<div>
			<span className='text-sm font-urbanist'>
			Landshop’s ultimate goal is to create a future <br/>
			where homelessness drastically diminishes <br/>
			and access to property ownership becomes commonplace. <br/>
			So that Nigerians of every creed become a landlord,<br/>
			through Landshop’s expansive real estate supply to meet demand.
			</span>
			
			</div>
	   </div>
	   
	   <img src={VisionPic} alt="" className='w-[502px] h-[255px]' />
	</div>
  )
}

export default Vision