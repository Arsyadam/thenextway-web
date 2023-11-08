import Image from 'next/image'

export default function Navbar() {
    const menuitems = [
        {
          title: "About",
          path: "#about",
        },
        {
          title: "Vision",
          path: "#vision",
        },
        {
          title: "Product",
          path: "#products",
        },
      ];
    return (
        <>
        <div className="mx-auto px-5 max-w-screen-xl ">
            <header className="flex flex-col lg:flex-row justify-between items-center my-5 max-w-screen-xl " x-data="{ open: false }" x-init="$watch('open', value => console.log(value))">
                <div className="flex w-full lg:w-auto items-center justify-between">
                <a href="/" className="text-lg" >
                <Image
                    src='/thenextway-black.svg'
                    alt="TheNextWay"
                    width={100}
                    height={20}
                    />
                </a>
                <div className="hidden">
                {/* @click="open = !open" */}
                    <button className="text-gray-800">
                    <svg
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path
                        x-cloak
                        x-show="open"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                        ></path>
                        <path
                        x-show="!open"
                        fill-rule="evenodd"
                        d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                        ></path>
                    </svg>
                    </button>
                </div>
                </div>
                {/* :class="{ 'block': open, 'hidden': !open }" */}
                <nav
                className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0"
                
                x-transition>
                <ul className="flex flex-col lg:flex-row lg:gap-3">
                    {
                    menuitems.map((item, index) => (
                        <>

                        {(
                            <li>
                            <a
                                href={item.path}
                                className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                                {item.title}
                            </a>
                            </li>
                        )}
                        </>
                    ))
                    }
                </ul>
                <a href="#contact" className="bg-black px-4 py-2 ml-3 rounded-sm text-white hover:text-black hover:bg-gray-300 hover:border-black hover:border-2 transition-colors" >
                    Contact
                </a>
                </nav>
                
            </header>
        </div>
        </>
    )
}
