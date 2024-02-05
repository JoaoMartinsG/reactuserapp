import './App.css'
import { useState } from 'react'

import AddUser from './components/UserInput/Users/AddUser'
import UsersList from './components/UserInput/Users/UsersList'

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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  )
}

export default App
