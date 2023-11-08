import Image from 'next/image'

export default function Logos() {
  return (
    <>
            <div className="mt-24">
                <h2 className="text-center text-slate-500">Works with your technologies</h2>
                <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
                    <Image
                        src="/react.png"
                        alt="React"
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/typescript.webp"
                        alt="Typescript Logo"
                        width={200}
                        height={100}
                    />
                    <Image
                        src="/nextjs.png"
                        alt="Next JS"
                        width={200}
                        height={100}
                    />
                    <Image
                        src="/arduino.png"
                        alt="Arduino"
                        width={200}
                        height={100}
                        className="grayscale"
                    />
                    
                    
                </div>
            </div>
    </>
  )
}