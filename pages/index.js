import Head from 'next/head';
import Layout, { siteTitle } from '../components/js/layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <Link href="/design2">
            <a>コンセプト案1 </a>
          </Link>
          <p></p>
          <Link href="/design3">
            <a>コンセプト案2 </a>
          </Link>
          
    </section>
    
      
    </Layout>
  );
}
