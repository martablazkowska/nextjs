import dynamic from "next/dynamic";

const Articles = dynamic(import('common/components/Articles'));
const Footer = dynamic(import('common/components/Footer'));
const Sidebar = dynamic(import('../components/Sidebar'));

import axios from 'axios';
import React, {useContext} from "react";
import {UserContext} from "common/contexts/user-context";

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


export default function FetchingDataPage({error, articles}) {

  const user = useContext(UserContext);

  return (
    <div>
      <Sidebar/>
      <div>
        <p>Fetching data excample for  <strong>brand 1</strong></p>
        <p>User: {user.username}</p>
        <Articles articles={articles}/>
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
