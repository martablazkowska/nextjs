import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header/Header'))
const Footer = dynamic(import('common/components/Footer/Footer'));
const Test = dynamic(import('common/components/Test/Test'));
const Button = dynamic(import('../components/Button'));

export default function Home() {
  return (
    <div>
      <Header/>
      <p>This is our homepage brand 1</p>
      <Test/>
      <Footer/>
      <Button
        href='https://google.com'
        rel='noopener'
      >I'm a primary button</Button>
      <Button secondary>I'm a secondary button</Button>
    </div>
  )
}
