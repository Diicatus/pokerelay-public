import './globals.css'
import Menu from './components/Menu'

export const metadata = {
  title: 'Pokerelay',
  description: 'App de intercambios de cartas Pokémon TCG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="relative min-h-screen pb-16">
        {children}
        <Menu />
      </body>
    </html>
  )
}
