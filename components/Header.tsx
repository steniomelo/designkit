import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
   {
    title: 'About',
    url: '/about'
   },
   {
    title: 'Services',
    url: '/services',
    submenu: [
        {
            title: 'Service 1',
            url: '/service1',
        },
        {
            title: 'Service 2',
            url: '/service2',
        }
    ]
   },
   {
    title: 'Products',
    url: '/products',
    submenu: [
        {
            title: 'Product 1',
            url: '/product1',
        },
        {
            title: 'Product 2',
            url: '/product2',
        }
    ]
   },
   {
    title: 'Blog',
    url: '/blog'
   },
   {
    title: 'Contact',
    url: '/contact'
   }
]


const Header = () => (
    <header className='mx-auto max-w-7xl px-6 py-4 md:py-7 md:px-10 flex items-center  justify-between'>

        <Image src="/logo.svg" alt="DesignKit Logo" width={140} height={28} />

        <nav>

            <div className='md:hidden bg-gray-100 px-3 py-2 rounded flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                Menu
            </div>

            <div className='hidden md:flex items-center'>
                {menuItems.map((menuItem) => (
                    (!menuItem.submenu) ?
                    <Link href={menuItem.url} className='mx-5'>{menuItem.title} </Link>
                    :
                    <Link href={menuItem.url} className='mx-5 flex items-center'>{menuItem.title}
                        <svg className='ml-2 w-4 h-4' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </Link>
                ))}
            </div>
        </nav>
    </header>
)

export default Header