/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image'


export default function Navbar() {
    const menuitems = [
        {
          title: "About",
          path: "/#about",
        },
        {
          title: "Vision",
          path: "/#vision",
        },
        {
          title: "Product",
          path: "/#products",
        },
        {
          title: "Survey",
          path: "/survey",
        },
      ];
    return (
        <>
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"  rel="stylesheet" />

<nav className="bg-blur border-gray-200 bg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
            src='/thenextway-black.svg'
            alt="TheNextWay"
            width={100}
            height={20}
            />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
        
        
        {
                    menuitems.map((item, index) => (
                        <>

                        {(
                            <li>
                           
                            <a href={item.path} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 " aria-current="page">{item.title}</a>
                            </li>
                            
                        )}
                        </>
                    ))
                    }
      </ul>
    </div>
  </div>
</nav>

        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

        </>
    )
}
