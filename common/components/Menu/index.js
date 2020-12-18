import Link from 'next/link';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/fetchingData">
          <a>Fetching data excample</a>
        </Link>
      </li>
    </ul>
  )
};

export default Menu;
