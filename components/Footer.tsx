import * as React from 'react'
import Image from 'next/image'

type Props = {
    menuItems: []
}

const Footer = () => (
    <footer className="bg-black text-white py-16">

      <div className='mx-auto max-w-7xl px-6 md:px-10'>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-10 mb-10'>
          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Main menu</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">About</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Services</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">Service #1</a>
              <a href="">Service #2</a>
              <a href="">Service #3</a>
              <a href="">Service #4</a>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Products</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">Product #1</a>
              <a href="">Product #2</a>
              <a href="">Product #3</a>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Category #1</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">Link item #1</a>
              <a href="">Link item #2</a>
              <a href="">Link item #3</a>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Category #2</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">Link item #1</a>
              <a href="">Link item #2</a>
              <a href="">Link item #3</a>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Category #3</div>

            <div className='flex flex-col text-sm gap-2'>
              <a href="">Link item #1</a>
              <a href="">Link item #2</a>
              <a href="">Link item #3</a>
            </div>
          </div>
          
        </div>

        <div className='border-t border-solid pt-10 gap-8 flex flex-col md:flex-row text-center md:text-left justify-between '>
          <div className="gap-3 flex flex-col items-center md:items-start">
            <Image src="/logo-white.svg" alt="DesignKit Logo" width={140} height={28} className='fill-white'/>
            <small className='text-base'>© 2020 Company Name. All rights reserved.</small>
          </div>

          <div className='flex flex-col justify-end items-center md:items-end gap-5 md:gap-3 '>
            <div className='flex gap-2 align-middle justify-end'>
              <a href="" className='block px-2 py-2 text-base border border-solid border-white rounded '>
                <Image src="/twitter.svg" alt="Twitter Logo" width={16} height={16} className='fill-white'/>
              </a>
              <a href="" className='block px-2 py-2 text-base border border-solid border-white rounded '>
                <Image src="/facebook-square.svg" alt="Twitter Logo" width={16} height={16} className='fill-white'/>
              </a>
              <a href="" className='block px-2 py-2 text-base border border-solid border-white rounded '>
                <Image src="/linkedin.svg" alt="Twitter Logo" width={16} height={16} className='fill-white'/>
              </a>
            </div>

            <div>
              <a href="">Privacy Policy</a>{' / '}
              <a href="">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
)

export default Footer