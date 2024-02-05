import styles from './UserTable.module.css'

const UserTable = (props) => {
  return (
    <table className={styles.table}>
      <tbody>
        {props.users.map((userData) => (
          <tr>
            <td>{userData.name}</td>
            <td>({userData.age} Years Old)</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
