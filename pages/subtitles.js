import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Subtitles() {
  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        const icons = document.querySelectorAll(`.${styles.icon}`);
        icons.forEach(icon => {
          icon.classList.toggle(styles.paused);
        });
      }
    };

    const handleIconClick = (event) => {
      window.open('https://www.mediaexpres.ro/contact.aspx', '_blank');
    };

    document.addEventListener('keydown', handleSpacebarPress);
    const icons = document.querySelectorAll(`.${styles.icon}`);
    icons.forEach(icon => {
      icon.addEventListener('click', handleIconClick);
    });

    return () => {
      document.removeEventListener('keydown', handleSpacebarPress);
      icons.forEach(icon => {
        icon.removeEventListener('click', handleIconClick);
      });
    };
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
          <p> &copy; Media Expres SRL <script>document.write(new Date().getFullYear());</script> 
            <a href="mailto:sales@mediaexpres.net">sales@mediaexpres.net</a>
            tel: +40730656959
          </p>
        </div>
        <div> <h1>Welcome to </h1></div>
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
        <div>
          <a
            href="https://www.mediaexpres.ro/contact.aspx"
            className={styles.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            <container>
              <p>Media Expres offers <strong>MOVIES, SERIES and DOCUMENTAIRES SUBTITLE EDITING SERVICES</strong> in and out of the Romanian language, for which we offer <strong>HUMAN PROOFREADING</strong> to any language of target and from any language of origin. To discuss your projects, and our terms and conditions please drop us a line in the contact form or call us directly.</p>

              <p>Silly screen? Press <strong>SPACE</strong> to pause the mounting icons and click Play to get in touch with us.</p>
            </container>
          </a>
        </div>
        <div className={styles.bubblesContainer}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </div>
        <footer>
        </footer>
      </main>
    </>
  )
}
