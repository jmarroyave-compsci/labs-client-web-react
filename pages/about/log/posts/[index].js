import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/blog/page';
import { getAllPosts, getPost } from 'components/pages/blog/data/posts' 
import { useRouter } from 'next/router';

const Page = ( props ) => {
  const params = { ...props };
  params.breadcrumbs = [{name: "about", url: '/about'}, {name: "log", url: '/about/log'}, {name: props.article.meta.title}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}


export async function getStaticProps({ ...ctx }) {
    const slug  = ctx.params.index;

    return {
        props: {
            article: getPost(slug)
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPosts().map(file => ({
        params: {
            index: file.slug,
            slug: file.slug,
        }
    }))
    

    return {
        paths,
        fallback: false,
    }
}

export default Page;