import React from 'react'
import { ButtonPropsType} from '../typings'



export default function Button({children}: ButtonPropsType) {
  return (
	 <button className='bg-primaryColor1  transition-all duration-300 ease-in-out text-white px-6 py-2 rounded-lg hover:bg-transparent hover:border hover:border-primaryColor1  hover:text-primaryColor1'>
		{children}
	 </button>
  )
}