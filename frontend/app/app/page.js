import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>

      <div><Image className={styles.image} src="/chatting.svg" height={900} width={700} alt="logo"/>
      </div>
      </div>
      {/* </div> */}
      </div>
  )
}
