import React from 'react'
import { ButtonPropsType} from '../typings'



export default function Button({children,myStyle}: ButtonPropsType) {
  return (
	 <button className={`${myStyle}`}>
		{children}
	 </button>
  )
}