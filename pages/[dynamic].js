import Head from "next/head";
import { useRouter } from "next/router";

const Dynamic = () => {
    const router = useRouter();
    const query = router.query.dynamic;
   
    return <div>
        <Head>
        
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VPHL96LY7Q"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VPHL96LY7Q');
</script>
            <title>
                {query}
            </title>
        </Head>
        Hello, this will be showcasing the {query} router</div>
}

export default Dynamic;