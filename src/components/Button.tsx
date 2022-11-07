import React from 'react'

type ButtonPropsType = {
	children : string
 }

export default function Button({children}: ButtonPropsType) {
  return (
	 <button className='bg-black text-white px-6 py-2 rounded-md hover:bg-transparent border border-black hover:text-black'>
		{children}
	 </button>
  )
}