import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Buy() {
  return (
    <>
      <Head>
        <title>Buy Subtitles Services - Media Expres</title>
        <meta name="description" content="Buy human subtitle verification services from Media Expres." />
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
        <div> <h1>Buy Subtitles Services</h1></div>
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
        <div className={styles.buyContent}>
          <h2>What We Offer</h2>
          <p>
            Media Expres provides <strong>human subtitle verification services</strong> for movies, series, and documentaries. 
            Our services include proofreading and editing subtitles for accuracy and quality.
          </p>
          <h3>Pricing</h3>
          <ul>
            <li>Price: <strong>1 to 5 EURO per minute of movie depending from where we start</strong></li>
            <li>Minimum amount payable: <strong>5 minutes</strong> (for shorter videos like trailers)</li>
            <li>Emergency delivery (within 24 hours): <strong>Double the price</strong></li>
            <li>Regular delivery time: <strong>48 hours</strong></li>
          </ul>
          <h3>Languages Supported</h3>
          <p>
            Our native human verification is performed in <strong>Romanian</strong>, translating from any of the following large circulation languages:
            <ul>
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
              <li>Russian</li>
              <li>Chinese</li>
              <li>All European Union and the geographical Europe languages</li>
            </ul>
          </p>
          <h3>Contact Us</h3>
          <p>
            To place an order or discuss your project, please contact us via email at 
            <a href="mailto:sales@mediaexpres.net"> sales [at] mediaexpres.net</a>, <a href="mailto:media.expres@gmail.com"> media.expres [at] gmail.com</a>, WhatsApp or call us at <strong>+40730656959</strong>.
          </p>
        </div>
        <footer>
        </footer>
      </main>
    </>
  );
}