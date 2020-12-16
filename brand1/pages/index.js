import Link from 'next/link'
import dynamic from 'next/dynamic'
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

  return (
    <div>
      <p>This is our homepage brand 1</p>
      <Articles articles={articles}/>
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
