import React, { ReactNode } from 'react';
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'DesignKit' }: Props) => (
  <div className='font-inter'>
    <Header />

    <main className='min-h-screen'>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </main>

    <Footer />
    
  </div>
)
  
export default Layout