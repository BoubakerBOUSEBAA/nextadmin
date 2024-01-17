import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image
                src="/noavatar.png" 
                width={40} 
                height={40} 
                alt="user" 
                className={styles.userImage} />
                Boubaker Bousebaa
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12/12/2020</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png" 
                width={40} 
                height={40} 
                alt="user" 
                className={styles.userImage} />
                John Snow
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>12/12/2020</td>
            <td>$3.300</td>
          </tr> 
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png" 
                width={40} 
                height={40} 
                alt="user" 
                className={styles.userImage} />            
                Carole Danvers
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>12/12/2023</td>
            <td>$1.300</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png" 
                width={40} 
                height={40} 
                alt="user" 
                className={styles.userImage} />
                Lise Smith
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>10/12/2021</td>
            <td>$1.100</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png" 
                width={40} 
                height={40} 
                alt="user" 
                className={styles.userImage} />
                Patrick Jane
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>15/10/2020</td>
            <td>$3.200</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Transactions
