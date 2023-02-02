import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

const Home: NextPage = () => (
  
  <Layout>
    <section className='bg-gray-100 py-10 md:py-32'>
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center flex-col md:flex-row">
        <div className='w-full mb-10 md:mb-0 md:max-w-sm md:mr-24 lg:mr-36 '>
          <Image src="/media.jpg" alt="Media Podcast Image" className='w-full' width={376} height={376} />
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl md:text-4xl font-semibold'>Podcast Name</h1>
            <div>
              <span className='text-black/50 mr-2'>hosted by</span>
              John Smith
            </div>
          </div>

          <div>
            <p className='md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
          </div>

          <div>
            <button type="button" className='w-full md:w-auto text-lg rounded-md bg-black text-white px-5 py-4'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-gray-100 py-10 pt-0 md:py-32 md:pt-0 '>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>Recent episodes:</div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-9 mb-10 md:mb-20">
          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='w-full h-4 bg-gray-300 block'></span>
              <span className='w-full h-4 bg-gray-300 block'></span>
              <span className='w-3/4 h-4 bg-gray-300 block'></span>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Continue Reading</a>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <span className='w-full h-4 bg-gray-300 block'></span>
              <span className='w-full h-4 bg-gray-300 block'></span>
              <span className='w-3/4 h-4 bg-gray-300 block'></span>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Continue Reading</a>
            </div>
          </div>


          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Listen now</a>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Listen now</a>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Listen now</a>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 flex flex-col gap-5 md:gap-10">
            <div>
              <h3 className="text-xl mb-3.5 font-semibold">Episode #01: Episode Title Goes Here Lorem Ipsum Dolor Sit Amet</h3>
              <div className='text-sm'>
                <span className='text-black/50 mr-2'>by</span>
                John Smith
                <span className='text-black/50 ml-2 mr-2'>on</span>
                January 24, 2020
              </div>
            </div>

            <div>
              <a href="" className='px-4 py-2 bg-gray-100 text-sm'>Listen now</a>
            </div>
          </div>
          
        </div>

        <div className='md:px-10 flex justify-center md:justify-between items-center'>
          <a href="" className='hidden md:block px-4 py-2 text-base border border-solid border-black rounded '>Previous</a>

          <div className='flex items-center justify-center gap-1'>
            <a href="" className='px-4 py-2 text-base border border-solid border-black rounded '>1</a>
            <a href="" className='px-4 py-2 text-base border border-solid border-black rounded '>2</a>
            <a href="" className='px-4 py-2 text-base border border-solid border-black rounded '>3</a>
            <a href="" className='px-4 py-2 text-base border border-solid border-black rounded '>4</a>
            <a href="" className='hidden md:block px-4 py-2 text-base border border-solid border-black rounded '>5</a>
            <a href="" className='px-4 py-2 text-base border border-solid border-transparent rounded '>...</a>
            <a href="" className='px-4 py-2 text-base border border-solid border-black rounded '>25</a>
          </div>

          <a href="" className='hidden md:block px-4 py-2 text-base border border-solid border-black rounded '>Next</a>

        </div>
      </div>
    </section>


    <section className='bg-white py-10 md:py-32'>
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center flex-col md:flex-row">
        <div className='w-full md:w-1/2 md:mr-24 lg:mr-36 order-2 md:order-1 '>
          <Image src="/media.jpg" alt="Media Podcast Image" className='w-full' width={376} height={376} />
        </div>

        <div className='flex flex-col gap-6 md:w-1/2 order-1 md:order-2 text-center md:text-left mb-10 md:mb-0'>
          <div className='flex flex-col gap-2'>
            <div className='text-xs tracking-wider uppercase mb-6 md:mb-10'>about host</div>

            <h1 className='text-2xl md:text-4xl font-semibold'>Content Section Headline Goes Here</h1>
          </div>

          <div className='flex flex-col gap-4 mb-6 items-center md:items-start'>
            <span className='w-full h-4 bg-gray-300 block'></span>
            <span className='w-3/4 h-4 bg-gray-300 block'></span>
          </div>


          <div>
            <button type="button" className='w-full md:w-auto text-lg rounded-md bg-black text-white px-5 py-4'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
      
  </Layout>
)


export default Home
