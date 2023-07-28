import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
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

        <div className={styles.grid}>
          <Link
            href="/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Portfolio <span>-&gt;</span>
            </h2>
            <p>
              Here you can find some of our works:  
            </p>

           </Link>

          <Link
            href="/prices"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Prices <span>-&gt;</span>
            </h2>
            <p>
              No project is like other but our prices are alike: lowest possible, client friendly.
            </p>
          </Link>
          
          <a
            href="https://www.mediaexpres.ro/contact.aspx"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Web Admin <span>-&gt;</span>
            </h2>
            <p>
              Media Expres full admin your webiste the lowest price from zero to online. Lignum-mobilier.ro and brutariaforni.ro are the living examples of our commitement. With under 500 Euro per year.
            </p>
          </a>

          <a
            href="https://brutariaforni.ro"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              From domain reservation, webhosting to deploying we work directly with RoTLD and Romarg but not only. Lignum-mobilier.ro and brutariaforni.ro are the living examples of our commitement. With under 500 Euro per year.
            </p>
          </a>

        </div>

        <footer>
    <p>© 2023 Media Expres</p>
        </footer>
    
      </main>
 
    </>
  )
}
