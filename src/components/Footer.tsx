export default function Footer(){
  return (
    <footer className="bg-[#0b0710] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="text-white font-bold text-lg">Logo</div>
          <p className="mt-4 text-sm">Connect, promote and grow your business with Biz Unite.</p>
        </div>

        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Privacy policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm">© {new Date().getFullYear()} Biz Unite. All rights reserved.</div>
    </footer>
  )
}
