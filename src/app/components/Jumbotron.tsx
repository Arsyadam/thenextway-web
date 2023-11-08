/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Jumbotron() {
  return (
    <>
        <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
  <div className="py-6 md:order-1 block">
    <Image
      src='/airplane.webp'
      alt="Astronaut in the air"
      width={500}
      height={100}
      className='grayscale'
    />
  </div>
  <div>
    <h1 className="text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight">
    <b>Building</b>  The Next Way <b>of The Future</b>
    </h1>
    <p className="text-lg mt-4 text-slate-600 max-w-xl">
    </p>
    <div className="mt-6 flex flex-row gap-3">
      <a href="#contact" className="bg-black px-4 py-2 ml-3 rounded-sm text-white hover:text-black hover:bg-gray-300 border-black border-2 transition-colors" >
          Contact
      </a>
      <a 
      href="#Contact" 
      className="bg-gray-300  px-4 py-2 ml-3 rounded-sm text-black  border-black border-2 transition-colors" >
        <Image width={30} height={30} className="inline pr-3" src="/github.svg" alt="github" /> View Repo
      </a>
    </div>
  </div>
</main>
    </>
  )
}