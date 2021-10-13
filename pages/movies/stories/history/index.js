import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/stories/movies-history';
import { useRouter } from 'next/router';


const Page = ( props ) => {
  var router = useRouter(); 
  const route = {  }
  const params = { ...props, route };
  params.breadcrumbs = [{name: "movies", url: '/movies'}, {name: "stories", url: '/movies/stories'}, {name: "history"}]

  return (
    <App {...params}>
      <Layout {...params}/> 
    </App>
  )
}

export default Page;