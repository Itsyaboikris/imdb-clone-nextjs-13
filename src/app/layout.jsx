import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      	<body>
			{/* <Providers> */}
				<Header />

				{children}
			{/* </Providers> */}
		</body>
    </html>
  )
}
