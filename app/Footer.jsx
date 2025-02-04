// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { name: "FAQ's", href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Ordering', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Personalization Policies', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm leading-6 text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-300">
            &copy; 2023 BOTOL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
