const Articles = ({ articles }) => {

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.slice(1, 10).map((article) => {
          return(<li key={article.id}>{article.title}</li>)
        })}
      </ul>
    </div>
  )
};


export default Articles;
