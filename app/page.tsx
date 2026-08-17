"use client"

import Image from "next/image";
import {useState} from "react"
import { LayoutDashboard, User, Settings, Settings2, TrendingUp, FileText, ChartColumn, Bell, ChevronDown, Search, ChevronLeft, ChevronRight, Grid, List, Filter, Plus, EllipsisVertical } from "lucide-react"
import Link from "next/link"
const grievances = [
  {
    id: "GRV001",
    title: "Broken Water Pipeline in Sector 4",
    complainant: "Alfred Beckett",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Environmental",
    urgency: "High",
    attachments: 2,
    status: "Unresolved",
  },
  {
    id: "GRV002",
    title: "Ongoing Noise Pollution from Industrial Area",
    complainant: "Sophia Greene",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Environmental",
    urgency: "Medium",
    attachments: 1,
    status: "In Progress",
  },
  {
    id: "GRV003",
    title: "Delayed Response to Emergency Health Request",
    complainant: "Mary Harold",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Health",
    urgency: "Low",
    attachments: 1,
    status: "In Progress",
  },
  {
    id: "GRV004",
    title: "Harassment by Security Personnel",
    complainant: "Hassan Mohammed",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Infrastructure",
    urgency: "Medium",
    attachments: 1,
    status: "Unresolved",
  },
  {
    id: "GRV005",
    title: "Lack of Access to Public Transportation",
    complainant: "Adekule Michael",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Safety",
    urgency: "High",
    attachments: 1,
    status: "In Progress",
  },
  {
    id: "GRV006",
    title: "Open Manhole Posing Safety Risk",
    complainant: "John Okafor",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Environmental",
    urgency: "Medium",
    attachments: 1,
    status: "Resolved",
  },
  {
    id: "GRV007",
    title: "Unlawful Waste Dumping Behind Residential Area",
    complainant: "Michael Johnson",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Infrastructure",
    urgency: "Medium",
    attachments: 1,
    status: "Resolved",
  },
  {
    id: "GRV008",
    title: "Lack of Access to Public Toilets",
    complainant: "Ava Carter",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Environmental",
    urgency: "Low",
    attachments: 1,
    status: "Resolved",
  },
  {
    id: "GRV009",
    title: "Harassment by Security Personnel",
    complainant: "Adams Cole",
    dateSubmitted: "15 Jan, 2024",
    grievanceType: "Environmental",
    urgency: "High",
    attachments: 1,
    status: "Resolved",
  },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6">
      <div className="py-2 px-3 ml-3.5 bg-white text-slate-800 rounded-md italic font-semibold">
        Lasoye
      </div>

      <ul className="flex gap-12 text-sm font-semibold ">
        <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Products</li>
        <Link href={"/motionlessvibes"}>
          <li className="hover:translate-y-0.5 transition-all duration-200 cursor-pointer">Motionless Vibes</li>
        </Link>
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

  const [renderType, setRenderType] = useState("grid")
  const [active, setActive] = useState("grid")

  const handleRenderType = (type: any)=>{
    setRenderType(type)
    setActive(type)
  };
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
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">
            Case Management
          </h2>
          <div className="flex gap-7 items-center">
            <Settings className="w-5" />
            <Bell className="w-5" />
            <div className="flex gap-2 items-center">
              <div className="bg-pink-400 rounded-full p-2 flex items-center">
                <User className="w-5 h-5 text-white  " />
              </div>

              <ChevronDown className="w-4" />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex  gap-4 mt-8 items-center">
          <h3 className="text-lg">Record History</h3>
          <div className="relative">
            <input placeholder="Search title, name" type="text" className="py-2 pr-8 pl-3 text-sm text-slate-600   focus:outline-pink-400   border border-slate-400 rounded-lg" />
            <Search className="absolute
w-4 top-1.75 right-3 text-slate-500"/>
          </div>
          <p className="text-slate-600">
            1-9 of 32
          </p>
          <div className="flex ">
            <ChevronLeft className="w-5 text-slate-400" />
            <ChevronRight className="w-5" />
          </div>
          <div className="flex  gap-1 border border-slate-600 rounded-sm   justify-center items-center ">
            <div className={`px-2 rounded-r-sm cursor-pointer ${active ==="list" ?"bg-pink-200 text-pink-400":""}`} onClick={()=>handleRenderType("list")}>
              <List className="w-4 " />
            </div>
            <div className={`px-2 rounded-r-sm cursor-pointer ${active ==="grid" ? "bg-pink-200 text-pink-400":""}`} onClick={()=>handleRenderType("grid")}>
              <Grid className="w-4" />
            </div>
          </div>

          <div className="border border-slate-400 rounded-sm py-1 px-3">
            <p>
              Filter <Filter className="inline-block w-4" />
            </p>
          </div>

          <div >
            <select className="p-2 border border-slate-400 rounded-sm">
              <option>
                Jan, 2024
              </option>
              <option>
                Feb, 2024
              </option>
              <option>
                Mar, 2024
              </option>
            </select>
          </div>

          <div className="text-white bg-pink-400 py-2 px-4 rounded-sm hover:bg-pink-500 transition-all duration-200">
            + Add New
          </div>

        </div>
        <div className="flex gap-1.5 mt-4">
          <p className="text-slate-400 text-xs">
            Total No of Cases: <span className="text-black">32</span>
          </p>
          <p className="text-slate-400 text-xs">
            Resolved Cases: <span className="text-green-500">20</span>
          </p>
          <p className="text-slate-400 text-xs">
            In Progress Cases: <span className="text-red-400">6</span>
          </p>
          <p className="text-slate-400 text-xs">
            Unresolved Cases: <span className="text-red-500">6</span>
          </p>
        </div>
        {/*Grid*/}
        {renderType==="grid" && <div className="grid grid-cols-3 gap-5 mt-8 border border-black/10 p-4">
          {
            grievances.map((item) => (
              <div key={item.id} className="border rounded-sm border-black/10 hover:shadow-lg transition-all duration-200">
                <div className="flex py-2 px-3 bg-black/10 rounded-sm">
                  <p className="truncate text-sm text-gray-900 ">
                    {item.id}-<span>{item.title}</span>
                  </p>
                  <EllipsisVertical className="w-4 text-slate-500" />
                </div>
                <div className="px-3 py-4 flex items-center justify-between border-b border-b-black/10">
                  <div className="flex flex-col gap-1 ">
                    <p className="text-slate-500 text-xs">
                      Complainant:
                    </p>
                    <p className="text-sm text-gray-900">
                      <User className="inline-block w-4 " /> {item.complainant}
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-slate-500 text-xs">
                      Date Submitted:
                    </p>
                    <p className="text-sm text-gray-900">
                      {item.dateSubmitted}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-4 flex items-center justify-between border-b border-b-black/10">
                  <div className="flex flex-col gap-1 ">
                    <p className="text-slate-500 text-xs">
                      Grievance Type:
                    </p>
                    <p className="text-sm text-gray-900">
                      <User className="inline-block w-4" /> {item.grievanceType}
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-slate-500 text-xs">
                      Urgency Level:
                    </p>
                    <p className="text-sm text-gray-900">
                      {item.urgency}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-4 flex items-center justify-between border-b border-b-black/10">
                  <div className="flex gap-1 items-center">
                    <p className="text-slate-500 text-xs">
                      Attachments:
                    </p>
                    <p className="text-sm text-gray-900">
                      {item.attachments}
                    </p>
                  </div>
                  <div className={`rounded-xl ${item.status === "Unresolved" ? "bg-red-200 text-red-800" : item.status === "In Progress" ? "text-amber-800 bg-amber-200" : "bg-emerald-200 text-emerald-800"} py-1 px-2 text-xs`}>
                    {item.status} <ChevronDown className="w-2.5 inline-block" />
                  </div>
                </div>
              </div>
            ))
          }

        </div>}
        {/* List */}
        {renderType==="list" && <div className="mt-8 hidden lg:flex lg:flex-col ">
          <div className="grid grid-cols-8 bg-black/10 py-4 rounded-t-sm gap-5 px-4 font-semibold text-sm text-slate-700">
            <h3>
              ID
            </h3>
            <h3>
              Date Created
            </h3>
            <h3>
              Case Title
            </h3>
            <h3>
              Type
            </h3>
            <h3>
              Complainant
            </h3>
            <h3 className="ml-7">
              Severity
            </h3>
            <h3 className="ml-5">
              Status
            </h3>
            <h3>
              Actions
            </h3>

          </div>
          {grievances.map((item)=>(
            <div key={item.id} className="grid grid-cols-8 text-sm px-4 border border-slate-200 py-3 gap-4 w-full hover:bg-black/5 items-center">
              <h3 className="text-slate-900">
              {item.id}
              </h3>
              <h3 className="text-slate-900">
                {item.dateSubmitted}
              </h3>
              <h3 className="truncate text-slate-900">
                {item.title}
              </h3>
              <h3>
                {item.grievanceType}
              </h3>
              <h3 className="text-nowrap">
                <User className="inline-block w-4 mr-1" />
                {item.complainant}
              </h3>
              <h3 className="ml-10">   
                {item.urgency}
              </h3>
              <h3 className={`rounded-xl w-25 ${item.status === "Unresolved" ? "bg-red-200 text-red-800" : item.status === "In Progress" ? "text-amber-800 bg-amber-200" : "bg-emerald-200 text-emerald-800"} px-1 text-xs flex items-center justify-center`}>
                {item.status} <ChevronDown className="w-2.5 inline-block" />
              </h3>
              <EllipsisVertical className="w-4 text-xs text-slate-600 ml-5"/>
              
            </div>
        ))}
        </div>}

        
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
