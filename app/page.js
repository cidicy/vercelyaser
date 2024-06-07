import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
          <p>
            Hello from Yaser!
          </p>

      </div>
      <div className={styles.center}>
        <p>
       <br/> ANSWER 1:
       <br/> ANSWER 2:
       <br/> ANSWER 3:
        </p>
      </div>

      <div className={styles.center}>
      <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
        />
        </a>
      </div>
    </main>
  )
}
