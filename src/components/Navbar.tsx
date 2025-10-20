import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-white font-bold text-xl">Logo</div>
        </div>

       <nav className="hidden md:flex items-center gap-6 text-white">
  <Link href="#" className="hover:text-blue-200 transition">
    Home
  </Link>

  <Link href="/about" className="hover:text-blue-200 transition">
    About
  </Link>

  <Link href="#" className="hover:text-blue-200 transition">
    Features
  </Link>

  <Link href="#" className="hover:text-blue-200 transition">
    Browse Business
  </Link>

  <Link href="#" className="hover:text-blue-200 transition">
    Contact
  </Link>

  <button className="bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition">
    Sign in
  </button>

  <button className="bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] px-4 py-2 rounded-md text-white hover:opacity-90 transition">
    Get Started
  </button>
</nav>

        <div className="md:hidden text-white"> {/* mobile toggler (placeholder) */}
          <button aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  )
}
