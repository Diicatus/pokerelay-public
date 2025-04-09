import './globals.css'
import Menu from './components/Menu'
import SplashScreen from './components/SplashScreen'

export const metadata = {
  title: 'PokeRelay',
  description: 'App de intercambios de cartas Pokémon TCG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
        <meta name="theme-color" content="#facc15" />
      </head>
      <body className="relative min-h-screen pb-16">
        <SplashScreen />
        {children}
        <Menu />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => {
                      console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch(error => {
                      console.log('Service Worker registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
