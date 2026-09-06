import Magnet from '../reactbits/Magnet'

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-panel-border bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg italic text-ink">
          Sahiba
        </a>
        <ul className="hidden gap-8 font-mono text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Magnet padding={30} magnetStrength={6}>
                <a href={link.href} className="transition-colors hover:text-violet">
                  {link.label}
                </a>
              </Magnet>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-sm text-violet underline decoration-violet-dim underline-offset-4 sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
