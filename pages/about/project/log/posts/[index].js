import React from 'react';
import Layout from 'com/pages/about-project-blog-post/page';
import { getAllPosts, getPost } from 'data/blog' 
import { useRouter } from 'next/router';

const Page = ( props ) => {
  return (
      <Layout {...props} breadcrumbs={`/about/project/log/${props.article.meta.slug}`}/> 
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