import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

//import { getSortedPostsData } from '../lib/posts'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Home() {

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data);

  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog {process.env.customKey}</h2>
        {error && <div>failed to load</div>}
        {!data && <div>loading...</div>}
        <ul className={utilStyles.list}>
          {data && data.map(({ id, userId, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              id: {id}
              <br />
              user: {userId}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
