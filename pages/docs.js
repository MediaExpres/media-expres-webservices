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
        <meta name="description" content="The portfolio page of the web developer Media Expres" />
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
          <h1>PORTFOLIO</h1>
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
          
          {/* --- Exemplu CARD NORMAL (pentru site-uri responsive) --- */}
          <a href="https://www.lignum-mobilier.ro" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>LIGNUM MOBILIER</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://lignum-mobilier.ro" title="Lignum Mobilier"></iframe>
            </div>
          </a>

          <a href="https://brutariaforni.ro" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>BRUTARIA FORNI</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://brutariaforni.ro" title="Brutaria Forni"></iframe>
            </div>
          </a>

          <a href="https://mediaexpres.ro/infinitescroll/index.html" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>THE INFINITE SCROLL</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://mediaexpres.ro/infinitescroll/index.html" title="The Infinite Scroll"></iframe>
            </div>
          </a>

          <a href="https://scurtpe2.ro/?page_id=16041" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>SCURT PE 2 ONLINE</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://scurtpe2.ro/?page_id=16041" title="Scurt pe 2 Online"></iframe>
            </div>
          </a>

          <a href="https://pictures.mediaexpres.net" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>MEDIA EXPRES PICTURES</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://pictures.mediaexpres.net" title="Media Expres Pictures"></iframe>
            </div>
          </a>

          <a href="https://valahiadelta.ro/" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>PENSIUNEA VALAHIA</strong>
            <div className={styles.iframeContainer}>
              <iframe className={styles.portfolioIframe} src="https://valahiadelta.ro/" title="Pensiunea Valahia"></iframe>
            </div>
          </a>

          {/* --- Exemplu CARD SPECIAL (pentru site-ul non-responsiv) --- */}
          <a href="https://citestepetrebarbu.ro/proiect-3d/index.html" className={styles.card} target="_blank" rel="noopener noreferrer">
            <strong>CITEȘTE PETRE BARBU</strong>
            {/* Folosim Același container 16:9 */}
            <div className={styles.iframeContainer}>
              {/* Dar aplicăm ambele clase pe iframe: cea generală + cea specială pentru scalare */}
              <iframe 
                className={`${styles.portfolioIframe} ${styles.scaledIframe}`} 
                src="https://citestepetrebarbu.ro/proiect-3d/index.html" 
                title="Citește Petre Barbu Proiect 3D"
                style={{ '--scale-factor': 320 / 1280 }} // Aici calculăm factorul de scalare dinamic
                >
              </iframe>
            </div>
          </a>

        </div>

        <footer>
          <p> &copy; Media Expres SRL&nbsp;{currentYear};&nbsp;
            &nbsp;tel: +40730656959
          </p>
        </footer>
      </main>
    </>
  )
}