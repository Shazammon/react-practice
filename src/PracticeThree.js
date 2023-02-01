import React, { useRef } from 'react'

export default function PracticeThree() {
  const yearRef = useRef()
  const monthRef = useRef()

  function handleChange(e) {
    const { maxLength, value, name } = e.target;
    console.log(name)
    console.log(name.split('-'))
    const fieldIndexArray = name.split("-");
    console.log(fieldIndexArray)
    if (value.length >= maxLength) {
      const nextField = document.querySelector(`input[name=field-${parseInt(fieldIndexArray[1], 10) + 1}]`)
      console.log(nextField)
      nextField.focus()
    }
  }

  return (
    <>
        <input 
          type='text'
          name="field-1"
          maxLength={2}
          placeholder='MM'
          ref={monthRef}
          onChange={handleChange}
        ></input>

        <input 
          type='text'
          name="field-2"
          maxLength={4}
          placeholder='YYYY'
          ref={yearRef}
        ></input>
    </>
  )
}
