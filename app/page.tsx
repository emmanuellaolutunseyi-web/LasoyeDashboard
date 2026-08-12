import Image from "next/image";
import { LayoutDashboard, User, Settings, Settings2, TrendingUp, FileText, ChartColumn, Bell, ChevronDown, Search } from "lucide-react"
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6">
      <div className="py-2 px-3 ml-3.5 bg-white text-slate-800 rounded-md italic font-semibold">
        Lasoye
      </div>

      <ul className="flex gap-12 text-sm font-semibold ">
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Products</li>
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Our company</li>
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Account</li>
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Contact</li>
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

function Section() {
  return (
    <section className="grid grid-cols-[250px_1fr] gap-4 mt-14 mb-14 px-8 ">
      {/* Side bar*/}
      <aside className="bg-black min-h-screen rounded-l-xl flex flex-col pt-4">
        <div className="border border-t-0 border-b-white/25 py-3 px-2 ">
          <div className="py-2 px-3 ml-4 bg-white text-slate-800 rounded-md italic font-semibold w-20">
            Lasoye
          </div>
        </div>
        {/* */}
        <div className="py-2 px-6">
          <h4 className="text-slate-500 font-semibold text-xs mb-3">
            GENERAL
          </h4>
          <div className="text-white/80">
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <LayoutDashboard className="inline-block w-5 mr-3" />
                Dashboard
              </p>
            </div>
            <div className="mb-4 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <User className="inline-block w-5 mr-3" />
                My Account
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 px-6">
          <h4 className="text-slate-500 font-semibold text-xs mb-3">
            DEMO
          </h4>
          <div className="text-white/80">
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <FileText className="inline-block w-5 mr-3" />
                Demo 1
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <ChartColumn className="inline-block w-5 mr-3" />
                Demo 2
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <FileText className="inline-block w-5 mr-3" />
                Case Management
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <Settings className="inline-block w-5 mr-3" />
                Demo 4
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <Settings className="inline-block w-5 mr-3" />
                Demo 5
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <ChartColumn className="inline-block w-5 mr-3" />
                Demo 6
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <FileText className="inline-block w-5 mr-3" />
                Demo 7
              </p>
            </div>
            <div className="mb-2.5 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-md">
              <p className="text-sm">
                <Settings className="inline-block w-5 mr-3" />
                Demo 8
              </p>
            </div>

          </div>

        </div>


      </aside>

      {/* dashboard*/}
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">
            Case Management
          </h2>
          <div className="flex gap-7 items-center">
            <Settings className="w-5"/>
            <Bell className="w-5"/>
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-pink-400 rounded-full " >
                <User className="w-5 h-5 text-white"/>
              </div>
              
              <ChevronDown className="w-4"/>
            </div>
          </div>
        </div>
        {/* */}
        <div className="flex gap-4 mt-8">
          <h3 className="text-lg">Record History</h3>
          <div className="relative">
            <input placeholder="Search title, name" type="text" className="py-2  pl-3 pr-8 items-center text-slate-600 border border-slate-400 text-sm rounded-lg focus:outline-pink-400"/>
            <Search className="w-4 absolute top-1.75 right-3 text-slate-500"/>
          </div>
        </div>
      </div>

    </section>
  )
}
export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Section />
    </main>
  );
}
