import Link from 'next/link'
import dynamic from 'next/dynamic'
//
const Header = dynamic(import('../components/Header/Header'))
const Footer = dynamic(import('common/components/Footer'));
const Test = dynamic(import('common/components/Test'));
const Articles = dynamic(import('common/components/Articles'));

export default function Home() {
  return (
    <div>
      <Header/>
      <p>This is our homepage brand 2</p>
      <Articles/>
      <Footer/>
    </div>
  )
}
