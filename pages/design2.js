import Layout from '../components/js/layout';
import design2Styles from '../styles/design2.module.scss';
import Image from 'next/image';

import Head from 'next/head';


export default function design2() {
  return (
    <Layout>
      <Head>
        <title>コンセプト案</title>
      </Head>
      <article className={design2Styles.article}>
        <div className={design2Styles.article__inner}>
          <div className={design2Styles.header}>
            <div className={`${design2Styles.flex} ${design2Styles.hight333}`}>
              <div className={design2Styles.article__inner__content}>
                <div className={design2Styles.semicircular}></div>
                <img
                  src="/images/2/logo.png" 
                  className={design2Styles.logo}
                />
              </div> 
              <div className={design2Styles.article__inner__content}>
                <div className={design2Styles.semicircular}></div>
              </div> 
            </div>
            <div className={design2Styles.mainmassage}>
              <p> Discover, collect, and sell extraordinary NFTsfrom Japan Discover, collect, and sell extraordinary NFTsfrom Japan Discover, collect, and sell extraordinary NFTsfrom Japan</p>
            </div>
          </div>
          <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
            <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
              <div>
                <img
                  src="/images/2/left-under.png" 
                  className={design2Styles.logo}
                />
              </div>
              <div className={design2Styles.vertical}>日本発のアートNFT</div>
              <div>
                <img
                    src="/images/2/right-under.png" 
                    className={design2Styles.logo}
                />
              </div>
            </div>
            <div>
            <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
              <div>
                <img
                  src="/images/2/left-under.png" 
                  className={design2Styles.logo}
                />
              </div>
              <div className={design2Styles.vertical}>日本発のアートNFT</div>
              <div>
                <img
                    src="/images/2/right-under.png" 
                    className={design2Styles.logo}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className={design2Styles.article__inner}>
          <div className={design2Styles.header}>
            <div className={`${design2Styles.flex} ${design2Styles.hight333}`}>
              <div className={design2Styles.article__inner__content}>
                <div className={design2Styles.semicircular}></div>
                <img
                  src="/images/2/logo.png" 
                  className={design2Styles.logo}
                />
              </div> 
              <div className={design2Styles.article__inner__content}>
                <div className={design2Styles.semicircular}></div>
              </div> 
            </div>
            <div className={design2Styles.mainmassage}>
              <p> Discover, collect, and sell extraordinary NFTsfrom Japan Discover, collect, and sell extraordinary NFTsfrom Japan Discover, collect, and sell extraordinary NFTsfrom Japan</p>
            </div>
          </div>
          <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
            <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
              <div>
                <img
                  src="/images/2/left-under.png" 
                  className={design2Styles.logo}
                />
              </div>
              <div className={design2Styles.vertical}>日本発のアートNFT</div>
              <div>
                <img
                    src="/images/2/right-under.png" 
                    className={design2Styles.logo}
                />
              </div>
            </div>
            <div>
            <div className={`${design2Styles.flex} ${design2Styles.hight677}`}>
              <div>
                <img
                  src="/images/2/left-under.png" 
                  className={design2Styles.logo}
                />
              </div>
              <div className={design2Styles.vertical}>日本発のアートNFT</div>
              <div>
                <img
                    src="/images/2/right-under.png" 
                    className={design2Styles.logo}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
