import aboutBackground from '../assets/aboutBackground.png'
import Nav from '../components/Nav'

export default function About() {
  return (
       <div>
          <Nav />
		  
		  <div className='w-screen h-[30rem]' >
             <img 
			 src={aboutBackground} 
			 alt="" 
			 className='w-screen h-[636px]'
			 />
		  </div>
	  </div>
    
	
  )
}
