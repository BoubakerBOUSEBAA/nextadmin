import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LabsWeb Design</div>
        <div className={styles.text}>&#169; All rights reserved.</div>
    </div>
  )
}

export default Footer
