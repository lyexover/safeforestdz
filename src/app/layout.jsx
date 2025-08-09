import {Inter} from 'next/font/google';

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