import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="Picture of the author" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Available Now</span>
            <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
            </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, voluptatibus, quod, voluptatum quia quas dolorum
            voluptatem quibusdam quos autem fugiat? Quisquam voluptates,
            voluptatibus, quod, voluptatum quia quas dolorum voluptatem
            quibusdam quos autem fugiat?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>

      </div>

      {/* Second Item */}

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Comming Soon</span>
            <h3 className={styles.title}>
            New serveur actions are available, partial pre-rendering is 🔥Comming up!
            </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, voluptatibus, quod, voluptatum quia quas dolorum
            voluptatem quibusdam quos autem fugiat? Quisquam voluptates,
            voluptatibus, quod, voluptatum quia quas dolorum voluptatem
            quibusdam quos autem fugiat?
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>

      </div>
    </div>
  )
}

export default Rightbar
