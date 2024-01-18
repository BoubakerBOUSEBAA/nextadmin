import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchUsers } from "@/app/lib/data"

const UsersPage = async () => {

  const users = await fetchUsers();

  console.log(users)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created at</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image 
                src="/noavatar.png" 
                alt="avatar"
                width={40}
                height={40} 
                className={styles.userImage}
              />
                John Doe
              </div>  
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/dashboard/users/[id]" as="/dashboard/users/1">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
            </tr>
        </tbody>


      </table>
        <Pagination />
    </div>
  )
}

export default UsersPage
