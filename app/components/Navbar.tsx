import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6">
      <Link href="/">
        <div className="py-2 px-3 ml-3.5 bg-white text-slate-800 rounded-md italic font-semibold">
          Lasoye
        </div>
      </Link>
      

      <ul className="flex gap-12 text-sm font-semibold ">
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Products</li>
        <Link href={"/motionlessvibes"}>
          <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Motionless Vibes</li>
        </Link>
        <Link href={"/Our-company"}>
          <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Our company</li>
        </Link>
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Account</li>
        <Link href={"/contact"}>
          <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Contact</li>
        </Link>
      </ul>
      <div className="space-x-4 mr-6">
        <button className="bg-pink-400 font-medium py-2 px-3 cursor-pointer hover:bg-white hover:text-pink-400 transition-all duration-200">
          Sign Up
        </button>
        <button className="bg-white font-medium text-black py-2 px-3 cursor-pointer hover:text-pink-400 transition-all duration-200">
          Log In
        </button>
      </div>
    </nav>
  )
}