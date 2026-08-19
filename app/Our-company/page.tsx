import Navbar from "../components/Navbar";

export default function About(){
  return(
    <>
      <Navbar/>
      <h1 className="flex justify-center text-4xl font-bold my-15">About Us</h1>
      <div className="grid grid-cols-2 p-15 min-h-100  bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 text-white gap-20">
        <div>
          <h1 className="text-sm ">Our Story</h1>
          <p className="text-lg mb-5">Scent Your Story<br></br>Express Your Identity<br></br>Leave a Lasting Impression</p>
          <img className="rounded-md w-120" src="/images.jpg"/>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-5">
            <img className="rounded-md h-52" src="/images.jpg"/>
            <img className="rounded-md" src="/office.jpg"/>
          </div>
          <p className="mt-5">At Lasoye, we believe fragrance is more than a scent — it is a part of who you are.</p>
          <p className="mt-3">We create thoughtfully crafted perfumes for everyone, bringing together distinctive aromas, timeless elegance, and modern expression. Whether you're looking for something subtle for everyday moments or a signature scent that commands attention, Lasoye is made to become part of your story.</p>
          <div className="grid grid-cols-4 text-nowrap text-sm gap-4 mt-5">
            <div className="pr-500">
              <p className="text-3xl font-semibold">50+</p>
              <p>Distinctive Perfumes</p>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">10K+</p>
              <p>Happy Customers</p>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">100%</p>
              <p>Made With Care</p>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">24/7</p>
              <p>Online Experience</p>
            </div>
          </div>

        </div>

      </div>
  </>
  )
  
  
}