import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});


export default function Layout({children}){

  return (
      <html>
        <body className={`${inter.className} antialiased`} >
          {
            children
          }
        </body>
      </html>
  )

}