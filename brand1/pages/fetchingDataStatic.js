import dynamic from "next/dynamic";

const Articles = dynamic(import('common/components/Articles'));
const Footer = dynamic(import('common/components/Footer'));
const Sidebar = dynamic(import('../components/Sidebar'));

import axios from 'axios';
import React, {useContext} from "react";
import {UserContext} from "common/contexts/user-context";

const fetchData = async () => await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
  .then(res => {
    return {
      error: false,
      posts: res.data,
    }
  })
  .catch(() => ({
      error: true,
      posts: null,
    }),
  );


export default function FetchingDataStaticPage(props) {

  const user = useContext(UserContext);
  console.log(props.posts.posts)

  return (
    <div>
      <Sidebar/>
      <div>
        <p>Fetching data excample for  <strong>brand 1</strong></p>
        <p>User: {user.username}</p>
        {/*<Articles articles={articles}/>*/}
        <ul>
          {props.posts.posts.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
      <Footer/>
    </div>
  )
}


export const getStaticProps = async () => {
  const data = await fetchData();

  return {
    props: {
      posts: data
    },
  };
};
