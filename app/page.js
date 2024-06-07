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
      <br/> ANSWER 3: I was running a change which was handed over from a different region. The case is a very long pending case.
     Because I was new, I wasn't familiar with some hiccups that may happen.
       So, as I was running the script from the UI, the page just froze up and went on a blank screen. I wasn't sure if the script
       ran successfully and I couldn't re-run it as it would mess up the system. Then I thought of checking the localhost logs. From there,
       I was able to see that the script was still running and I just need to monitor it from the logs instead.
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
