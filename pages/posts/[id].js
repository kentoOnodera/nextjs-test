import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/js/layout';
import Date from '../../components/js/date';
import utilStyles from '../../styles/utils.module.scss';
import Header from "../../components/js/Header";

import Head from 'next/head';


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header/>
      <article>

        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  };
}
