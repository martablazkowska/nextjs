import React, { useContext } from "react";
import { UserContext } from 'common/contexts/user-context';

const Articles = ({ articles }) => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2>Articles</h2>
      <h4>User: {user.username}</h4>
      <ul>
        {articles.map((article) => {
          return(<li key={article.id}>{article.title}</li>)
        })}
      </ul>
    </div>
  )
};


export default Articles;
