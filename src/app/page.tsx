import Image from 'next/image'
import Jumbotron from '../app/components/Jumbotron'
import About from '../app/components/About'
import Vision from '../app/components/Vision'
import Products from '../app/components/Products'
import Logos from '../app/components/Logos'
import Contact from '../app/components/Contact'
import CTA from '../app/components/CTA'

export default function Home() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto px-5'>
          <Jumbotron />
          <About  />
          <Vision />
          <Logos />
          <Products />
          <Contact />
          <CTA />

      </div>
    </>
  )
}
