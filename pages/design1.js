import Layout from '../components/js/layout';
import design1Styles from '../styles/design1.module.scss';
import Image from 'next/image';

import Head from 'next/head';


export default function design2() {
  return (
    <Layout>
      <Head>
        <title>コンセプト案1</title>
      </Head>
      <header className={headerStyles.header}>
        <Image
            priority
            src="/images/1/logo.png"
            className={headerStyles.logo}
            width={117}
            height={26}
            alt="ロゴ"
        />
        <form>
          <input type="text"></input>
        </form> 
        <button>ログイン</button>
        <button>会員登録</button>
      </header>
      <article className={design1Styles.article}>
      <Image
            priority
            src="/images/1/nft.png"
            className={headerStyles.logo}
            width={117}
            height={26}
            alt="ロゴ"
        />
      </article>
    </Layout>
  );
}
