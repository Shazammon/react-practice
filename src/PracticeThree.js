import React from 'react'

export default function PracticeThree() {
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
