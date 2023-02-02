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
      <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Month</label>
    <input type="text" 
            name="field-1"
            maxLength={2}
            placeholder='MM'
            ref={monthRef}
            onChange={handleChange}
    id="large-input" 
    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>
      {/* <label>Month
        <input 
          type='text'
          name="field-1"
          maxLength={2}
          placeholder='MM'
          ref={monthRef}
          onChange={handleChange}
        ></input> */}

      {/* </label> */}

        <input 
          type='text'
          name="field-2"
          maxLength={4}
          placeholder='YYYY'
          ref={yearRef}
          style={{ padding: "20px 20px", margin: "100px", textAlign: "left", color: "white" }}
        ></input>
    </>
  )
}
