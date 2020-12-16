const Articles = () => {

  const articles = [
    {id: 1, name: 'aaa'},
    {id: 2, name: 'bbb'},
    {id: 3, name: 'ccc'},
    {id: 4, name: 'ddd'},
    ];

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return(<li key={article.id}>{article.name}</li>)
        })}
      </ul>
    </div>
  )
};

export default Articles;
