'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/cartas', label: 'Cartas' },
    { href: '/intercambios', label: 'Intercambios' },
    { href: '/crear-oferta', label: 'Crear Oferta' },
    { href: '/perfil', label: 'Perfil' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-md">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <span className={`text-sm ${pathname === link.href ? 'font-bold text-blue-600' : 'text-gray-600'}`}>
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
