import React, { useRef } from 'react'

export default function PracticeThree() {
  const yearRef = useRef()
  const monthRef = useRef()

  function handleChange(e) {

  }

  return (
    <>
        <input 
          type='text'
          maxLength={2}
          placeholder='MM'
          ref={monthRef}
        ></input>

        <input 
          type='text'
          maxLength={4}
          placeholder='YYYY'
          ref={yearRef}
        ></input>
    </>
  )
}
