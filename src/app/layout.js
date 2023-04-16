import './globals.css'

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
      	<body>{children}</body>
    </html>
  )
}
