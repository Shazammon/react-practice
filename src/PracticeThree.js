import React, { useRef } from 'react'

export default function PracticeThree() {
  const yearRef = useRef()

  function handleChange(e) {
    
  }

  return (
    <>
        <input 
          type='text'
          maxLength={2}
          placeholder='MM'
        ></input>

        <input 
          type='text'
          maxLength={4}
          placeholder='YYYY'
        ></input>
    </>
  )
}
