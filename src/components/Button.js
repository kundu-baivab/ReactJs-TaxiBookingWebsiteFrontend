import React from 'react'

const Button = ({ color, text, onClick, isDisabled }) => {
  return (
    <button
      type='submit'
      className={`btn b mb-3 col-lg-2 text-center btn-${color}`}
      onClick={onClick}
      disabled={isDisabled}      
    >
      {text}
    </button>
  )
}

export default Button
