import React, { useRef, focus } from 'react'

export default function PracticeThree() {
  const yearRef = useRef()
  const monthRef = useRef()

  function handleChange(e) {
    console.log('testing')
    const { maxLength, value, name } = e.target
    const { fieldName, fieldIndex } = name.split("-")
    if (value.length >= maxLength) {
      const nextField = document.querySelector(`input[name=field-${fieldIndex + 1}]`)
      console.log(nextField)
      nextField.focus()
    }
  }

  return (
    <>
        <input 
          type='text'
          name='field-1'
          maxLength={2}
          placeholder='MM'
          ref={monthRef}
          onChange={handleChange}
        ></input>

        <input 
          type='text'
          name='field-2'
          maxLength={4}
          placeholder='YYYY'
          ref={yearRef}
        ></input>
    </>
  )
}
