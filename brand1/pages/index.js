import Link from 'next/link'
import dynamic from 'next/dynamic'


import React, { useContext } from "react";
import { UserContext } from 'common/contexts/user-context';

const Footer = dynamic(import('common/components/Footer'));
const Articles = dynamic(import('common/components/Articles'));
const Button = dynamic(import('../components/Button'));
const Sidebar = dynamic(import('../components/Sidebar'));

import axios from 'axios';

const fetchData = async () => await axios.get('https://jsonplaceholder.typicode.com/albums')
  .then(res => {
    return {
      error: false,
      articles: res.data,
    }
  })
  .catch(() => ({
      error: true,
      articles: null,
    }),
  );

export default function Home({error, articles}) {

  const user = useContext(UserContext);

  return (
    <div>
      <Sidebar/>
      <div>
        <p>This is our homepage  <strong>brand 1</strong></p>
        <Button
          href='https://google.com'
          rel='noopener'
        >I'm a primary button</Button>
        <Button secondary>I'm a secondary button</Button>
      </div>
      <Footer/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}
