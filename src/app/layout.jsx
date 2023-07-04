import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
// import Footer from '@/components/footer/Footer'
// import { ThemeProvider } from '@/context/ThemeContext' 

const Poppin = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '900'] })

export const metadata = {
  title: 'Next Blog',
  description: 'Share your knowledge with the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Poppin.className}>
        {/* <ThemeProvider> */}
          <div className="container max-w-7xl min-h-screen my-0 mx-auto px-12 flex flex-col justify-between">
            <Navbar></Navbar>
            {children}
            {/* <Footer></Footer> */}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}