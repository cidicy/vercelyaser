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
       <br/> 5 Most favourite support task:
       <p>
       <br/> 1. 
       <br/> 2. 
       <br/> 3. 
       <br/> 4. 
       <br/> 5.
       </p>
       <p>
       <br/> 5 least favourite support task:
       <p>
       <br/> 1. 
       <br/> 2. 
       <br/> 3. 
       <br/> 4. 
       <br/> 5.
       </p>
       </p>

       <br/> ANSWER 2: What I wanted to learn or do more of at work is to get to know my colleagues better. I wanted to build relationship
      to as many as I could because I know that it will help me with my work.

       <br/> ANSWER 3:
       <br/> ANSWER 4:
       <br/> ANSWER 5:
       <br/> ANSWER 6:
       <br/> ANSWER 7:
       <br/> ANSWER 8:
       <br/> ANSWER 9:
       <br/> ANSWER 10:
       
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
