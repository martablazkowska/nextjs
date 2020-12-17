import Link from 'next/link'
import dynamic from 'next/dynamic'

//const Header = dynamic(import('../components/Header/Header'))
// const Footer = dynamic(import('common/components/Footer/Footer'));
// const Test = dynamic(import('common/components/Test/Test'));
const Button = dynamic(import('../components/Button'));

import React, { useContext } from "react";
import { UserContext } from 'common/contexts/user-context';
//
//const Header = dynamic(import('../components/Header/Header'))
const Footer = dynamic(import('common/components/Footer'));
const Test = dynamic(import('common/components/Test'));
const Articles = dynamic(import('common/components/Articles'));

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
      <p>This is our homepage brand 1</p>
      <p>User: {user.username}</p>
      <Articles articles={articles}/>
      <Footer/>
      <Button
        href='https://google.com'
        rel='noopener'
      >I'm a primary button</Button>
      <Button secondary>I'm a secondary button</Button>
    </div>
  )
}


export const getServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}
