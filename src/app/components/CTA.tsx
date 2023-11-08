import Image from 'next/image'

export default function CTA() {
  return (
    <>
        <div id="contact"  className="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
            <h2 className="text-white font-bold text-3xl md:text-6xl">Lets Work Togather</h2>
           
            <div className="flex mt-5">
                <a href="mailto:work@thenextway.tech" target='_blank' className="bg-black px-4 py-2 ml-3 rounded-sm text-white hover:text-black hover:bg-gray-300 border-white  border-2 transition-colors" >
                    Email
                </a>
                <a href="https://instagram.com/@thenextway.id/" target='_blank' className="bg-black px-4 py-2 ml-3 rounded-sm text-white hover:text-black hover:bg-gray-300 border-white  border-2 transition-colors" >
                    Instagram
                </a>
                <a href="https://github.com/TheNextWay/" target='_blank' className="bg-black px-4 py-2 ml-3 rounded-sm text-white hover:text-black hover:bg-gray-300 border-white  border-2 transition-colors" >
                    Github
                </a>
            </div>
        </div>

    </>
  )
}