import './App.css'
import { useState } from 'react'
import UserInputForm from './components/UserInput/UserInputForm'
import UserTable from './components/UserTable/UserTable'
import AddUser from './components/UserInput/Users/AddUser'

function App() {
  const initialUsersData = [{ name: 'Max', age: 32 }]
  const [usersData, setUserData] = useState(initialUsersData)

  const addUserHandler = (user) => {
    setUserData((prevUsers) => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser />
      {/* {usersData && <UserInputForm onAddUser={addUserHandler} />} */}
      <UserTable users={usersData} />
    </div>
  )
}

export default App
