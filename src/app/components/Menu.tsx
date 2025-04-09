'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Repeat, PlusCircle, User } from 'lucide-react'

export default function Menu() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Inicio', icon: <Home size={20} /> },
    { href: '/cartas', label: 'Cartas', icon: <BookOpen size={20} /> },
    { href: '/intercambios', label: 'Intercambios', icon: <Repeat size={20} /> },
    { href: '/crear-oferta', label: 'Crear', icon: <PlusCircle size={20} /> },
    { href: '/perfil', label: 'Perfil', icon: <User size={20} /> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-md">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <div className={`flex flex-col items-center text-sm ${pathname === link.href ? 'text-blue-600' : 'text-gray-600'}`}>
            {link.icon}
            <span>{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  )
}
