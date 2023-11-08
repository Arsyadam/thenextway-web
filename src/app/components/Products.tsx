import Image from 'next/image'

export default function Products() {
  return (

            <div id="products" className="mt-24">
                <h2 className="text-center text-slate-500">The Product(s)</h2>
                <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
                    <a href="thedashboard.thenextway.tech/dashboard">
                        <Image
                            src="/thebrambang.svg"
                            alt="Typescript Logo"
                            width={300}
                            height={100}
                        />
                    </a>
                    
                    
                </div>
            </div>
  )
}
