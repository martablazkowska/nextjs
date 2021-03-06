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
                <Link href="/fetchingDataStatic">
                    <a>Static Fetching data excample</a>
                </Link>
            </li>
            <li>
                <Link href="/fetchingDataServer">
                    <a>Server Fetching data excample</a>
                </Link>
            </li>
            <li>
                <Link href="/promotions">
                    <a>Promotions</a>
                </Link>
            </li>
            <li>
                <Link href="/promotions/aaa">
                    <a>Promotion Aaa</a>
                </Link>
            </li>
            <li>
                <Link href="/language">
                    <a>Languages</a>
                </Link>
            </li>
        </ul>
    )
};

export default Menu;
