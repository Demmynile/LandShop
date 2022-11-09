
import MissionPic from '../assets/mission.png'

function Mission() {
  return (
	<div className='h-[30rem] mx-auto bg-white flex items-center justify-around'>

       <img src={MissionPic} alt="" className='w-[326px] h-[318px]' />

	   <div className='flex flex-col gap-y-4'>
            <div>
				<span className='font-bold text-3xl font-urbanist'>
				 Everything Real Estate
				</span>
				
			</div>
			<div>
			<span className='text-xl font-urbanist text-primaryColor1'>
			   What it takes exactly to succeed
				
			</span>
			 
            </div>
			<div>
			<span className='text-sm font-urbanist'>
				Landshop’s driving philosophy is to inspire majority of <br/>
				Nigerians to invest in real estate by being property<br/>
				owners or profit participants irrespective of status,<br/>
				credit rating or location. By providing the widest,<br/>
				most authentic real estate opportunities across several payment models.
			</span>
			
			</div>
	   </div>
	</div>
  )
}

export default Mission