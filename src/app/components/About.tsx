import Image from 'next/image'

export default function About() {
  return (
    <>
        <div id="about" className="grid lg:grid-cols-3 place-items-start align-middle pt-16 pb-8 md:pt-8 my-20">
            <div className="mt-16 md:mt-0 text-start">
                <span className="text-4xl lg:text-5xl font-bold  ">
                    About
                </span>
                <p className='text-slate-600'>
                    Find out more closely with us
                </p>
            </div>
            <div className="col-span-2  flex flex-col sm:flex-row gap-3">
                <p className="text-lg  text-black-600">
                    TheNextWay consist of 3 people, The Hustler - Fathimah Aqilah Zarrah, The Hacker - Muhammad Zuhair Zuhdi, The Hipster - Arsyad Ali Mahardika and The Project manager - M. Chusni
                </p>
            </div>
        </div>
    </>
  )
}