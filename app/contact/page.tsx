import Navbar from "../components/Navbar";


function Contact(){
  return(
    <div className=" h-150 inline-block mb-20">
      <h1 className="flex justify-center text-2xl md:text-5xl font-semibold my-15">How would you like to contact Lasoye?</h1>
      <div className=" grid grid-cols-2 mx-40 gap-10 text-white">
        <div className="h-118 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 px-7 text-white">
          <h2 className="font-bold pt-7 ">Request a call.</h2>
          <p className="text-sm pt-2">Give us some info so the right person can get back to you.</p>
          <div className="flex gap-5 my-5 ">
            <input className="border w-45 text-sm py-0.5 rounded-xs px-1 " placeholder="First name" type="name"></input>
            <input className="border w-45 text-sm py-0.5 rounded-xs px-1 " placeholder="Last name" type="name"></input>            
          </div>
          
          <input className="border w-95 block text-sm mb-5 py-0.5 rounded-xs px-1 " placeholder="Email" type="email"></input>
          <input className="border w-95 block text-sm mb-5 py-0.5 rounded-xs px-1 " placeholder="Phone" type="tel"></input>
          <label className="text-sm">Country/Region</label>
          <select className="border text-sm w-95 py-1 block mb-5 rounded-xs px-1">
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Argentina</option>
            <option>Australia</option>
            <option>Nigeria</option>
          </select>
          <select className="border text-sm w-95 py-1 block mb-5 rounded-xs px-1">
            <option className=""></option>
          </select>
          <p className="text-sm mb-5">By clicking <span className="contact me text-white font-semibold">contact me</span>, you agree to the processing of your personal data by Lasoye</p>
          <div className="flex justify-center py-1 rounded-sm text-black bg-white  text-sm w-95 px-1 cursor-pointer">
            <h1>CONTACT ME</h1>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="h-35 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 p-4">
            <h1 className="font-semibold">Give us a call</h1>
            <p className="mt-2 text-sm">+44 7xxxxxxxxx</p>
            <p className="text-sm mt-2 text-white underline cursor-pointer">Not in the UK? Find your local office</p>
            <p className="text-sm mt-2 text-white underline cursor-pointer">Get tech support</p>
          </div>
          <div className="h-35 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 p-4 mt-4">
            <h1 className="font-semibold">Chat with us.</h1>
            <p className="mt-2 text-sm">Get product info, login help, and live chat with an agent.</p>
            <div className="bg-white  w-25 py-1.5 px-1 text-black text-sm items-center flex justify-center mt-5 cursor-pointer rounded-sm">
              <h1>LET'S CHAT</h1>
            </div>
          </div>
          <div className="h-40 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 p-4 mt-4">
            <h1 className="mt-2 font-semibold">Leave us some feedback.</h1>
            <p className="mt-2 text-sm">Good or bad, we love to hear it all.</p>
            <div className="bg-white cursor-pointer  w-35 py-1.5 px-1 text-black text-sm items-center flex justify-center mt-5 rounded-sm">
              <h1>SEND FEEDBACK</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function page(){
  return(
    <>
      <Navbar/>
      <Contact/>
    </>
    
  );
}