import { useState, useRef } from 'react'

import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().lenght === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (no empty values).',
      })
      return
    }
    if (enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return
    }
    props.onAddUser(enteredName, enteredUserAge)
    // avoid this , manipulating DOM without React, ok in this ccase since its user input field
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form className={styles.form} onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
