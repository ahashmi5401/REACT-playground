import React, { useState } from 'react'
import styles from './Practice.module.css'

const Practice = () => {
  const [Text, setText] = useState('')

const change = (e) => {
  e.preventDefault()

  console.log("Form submitted by:", Text)
  alert(`Form submitted by: ${Text}`)
}


  return (
    <div className={styles.container}>
      <form onSubmit={change} className={styles.form}>
        <h2 className={styles.heading}>Practice Form</h2>

        <input
          type="text"
          value={Text}
          placeholder="Enter your name"
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Practice
