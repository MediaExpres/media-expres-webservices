import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <>
      <Head>
        <title>MEDIA EXPRES WEBSERVICES</title>
        <meta name="description" content="The presentation page of the web developer services offered by Media Expres" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.mediaexpres.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/mediaexpres.svg"
                alt="Media Expres Logo"
                className={styles.mexlogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div>
          <h1>Welcome to </h1>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/banner_mediaexpres_webservices.svg"
            alt="Media Expres Webservices Logo"
            width={468}
            height={60}
            priority
          />
        </div>
 
    
      <div className={styles.center}>
        <div className={styles.grid}>        
          <a
            href="https://www.lignum-mobilier.ro"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Lignum Mobilier Presentation & Online Store <span>-&gt;</span>
            </h2>
            <iframe width="100%" height="100%" src="https://lignum-mobilier.ro"></iframe>
          </a>
        
          <a
            href="https://brutariaforni.ro"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Brutăria Forni Presentation & Online Store <span>-&gt;</span>
            </h2>
            <iframe width="100%" height="100%" src="https://brutariaforni.ro"></iframe>
          </a>
          <a
            href="https://mediaexpres.ro/infinitescroll/index.html"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            The Infinite Scroll page <span>-&gt;</span>
            </h2>
            <iframe width="100%" height="100%" src="https://mediaexpres.ro/infinitescroll/index.html"></iframe>
          </a>
        </div>
      </div>
        <footer>
          <p> &copy; Media Expres SRL&nbsp;{currentYear};&nbsp;
            <a href="mailto:sales@mediaexpres.net">sales@mediaexpres.net;</a>
            &nbsp;tel: +40730656959
          </p>
        </footer>

      </main>
    </>
  )
}
