import Link from 'next/link'
import dynamic from 'next/dynamic'
//
// const Header = dynamic(import('../components/Header'))
// const Test = dynamic(import('../components/Test'))

export default function Home() {
  return (
    <div>
      <p>This is our homepage brand 2</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
    </div>
  )
}
