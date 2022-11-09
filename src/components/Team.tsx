import TeamLogo from '../assets/team.png'

function Team() {
  return (
	<div className='bg-white mx-auto h-[30rem]'>
		 <div className='flex flex-col justify-center items-center gap-y-10'>

			<img src={TeamLogo} alt="" className='w-[700.13px] h-[158px]' />

			<span className='font-bold font-urbanist text-black text-3xl'>Our Team</span>

			
                 

		 </div>
	</div>
  )
}

export default Team