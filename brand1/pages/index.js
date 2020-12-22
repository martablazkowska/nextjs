import React, { useContext } from "react";
import axios from 'axios';
import dynamic from 'next/dynamic'

const Footer = dynamic(import('common/components/Footer'));
const Articles = dynamic(import('common/components/Articles'));
const Button = dynamic(import('../components/Button'));
const Sidebar = dynamic(import('../components/Sidebar'));

import { UserContext } from 'common/contexts/user-context';

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
