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

        <div>
          <a
            href="https://www.mediaexpres.ro/contact.aspx"
           
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <h1 className={styles.center}>Welcome to MediaExpres Web Services</h1>
           
            <p>
              We specialize in full-stack development, server administration, and providing the most affordable solutions for taking your web presence from zero to online. Our team is dedicated to delivering high-quality websites tailored to your needs.
            </p>
            <br>
            <p>
              Whether you require a simple personal website or a complex e-commerce platform, we have the expertise to bring your vision to life. Our full-stack developers ensure that both the front-end and back-end of your website are robust, user-friendly, and visually appealing.
            </p>
            <br>
            <p>
              Our server administrators guarantee smooth operations by managing server configurations, security, and performance optimization. We handle all the technical aspects, allowing you to focus on your core business.
            </p>
            <br>
            <p>
              MediaExpres Web Services prides itself on providing cost-effective solutions. We understand the challenges faced by startups and small businesses, and we offer affordable packages to get your website up and running without breaking the bank.
            </p>
            <br>
            <p>
              Contact us today to discuss your web development needs and let us help you establish a strong online presence.
            </p>
                
          </a>

       </div>

    <footer>
       <p>&copy; Media Expres SRL - <script>document.write(new Date().getFullYear());</script> | <a href="mailto:sales@mediaexpres.net">sales@mediaexpres.net</a> | +40730656959</p>
     </footer>
    
      </main>
      
    </>
  )
}
