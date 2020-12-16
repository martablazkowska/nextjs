import Link from 'next/link'
import dynamic from 'next/dynamic'
//
const Header = dynamic(import('../components/Header/Header'))
const Footer = dynamic(import('common/components/Footer/Footer'));
const Test = dynamic(import('common/components/Test/Test'));

export default function Home() {
  return (
    <div>
      <Header/>
      <p>This is our homepage brand 1</p>
      <Test/>
      <Footer/>
    </div>
  )
}
