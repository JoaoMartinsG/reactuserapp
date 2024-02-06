import './App.css'
import { useState, Fragment } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersData, setUsersData] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersData((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </Fragment>
  )
}

export default App
