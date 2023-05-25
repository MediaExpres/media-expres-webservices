import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
                className={styles.mexlogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
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
           <p>
              We specialize in full-stack development, server administration, and providing the most affordable solutions from zero to online. Our team is dedicated to delivering fast high-quality websites tailored to any needs.
              Whether you require a simple personal website or a complex e-commerce platform, we have the expertise to bring your vision to life. 
              Our server administrators guarantee smooth operations by managing server configurations, security, and performance optimization. We handle all the technical aspects, allowing you to focus on your core business.
           </p>
          </a>
       </div>

       <footer>
    <p>© 2023 Media Expres</p>
    <p> &copy; Media Expres SRL&nbsp;<span id="year"></span> 
         <a href="mailto:sales@mediaexpres.net">sales@mediaexpres.net</a>
         &nbsp;tel: +40730656959
          </p>
        </footer>
    
        <script>document.write(new Date().getFullYear())</script>
       </main>
  </>  
    
  )
}
