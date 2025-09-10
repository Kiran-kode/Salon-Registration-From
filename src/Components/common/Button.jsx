import React from 'react'

const Button = (props) => {
  const { children, onClick } = props

  return (
    <>
     <button className="w-60 h-11 text-cyan-800 outline-2 border-cyan-700 hover:bg-cyan-800 hover:text-white hover:font-normal transition duration-200 ease-in mb-4" >
          {children}
        </button>
    </>
  )
}

export default Button