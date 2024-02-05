import styles from './UserInputForm.module.css'

import { useState } from 'react'

const UserInputForm = (props) => {
  const initialUserInput = {
    name: 'Joao',
    age: 26,
  }

  const [userInput, setUserInput] = useState(initialUserInput)
  const [isValid, setIsValid] = useState(true)

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (userInput.name.trim().length === 0 || userInput.age === '') {
      setIsValid(false)
      return
    }
    props.onAddUser(userInput)
  }

  const inputChangeHandler = (input, value) => {
    if (value.trim().length > 0) {
      setIsValid(true)
    }
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      }
    })
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={`${styles['input-group']} ${!isValid && styles.invalid}`}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            value={userInput.name}
            type="text"
            onChange={(event) => inputChangeHandler('name', event.target.value)}
            id="Username"
          />
        </p>
        <p>
          <label htmlFor="age">Age(Years)</label>
          <input
            value={userInput.age}
            type="number"
            onChange={(event) => inputChangeHandler('age', event.target.value)}
            id="Age"
          />
        </p>
      </div>

      <p className={styles.actions}>
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </p>
    </form>
  )
}

export default UserInputForm
