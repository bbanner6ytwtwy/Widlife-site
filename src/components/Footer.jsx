import React from 'react'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
    return (
        <>
           <div id="contact" className='w-full bg-emerald-950 flex p-5 items-center text-center'>
             <div className='w-full lg:w-4/12 md:w-full'>
             <h1 className="text-zinc-200">Contact</h1>
             <p className="text-zinc-500 lg:text-base text-xs">+4254 3653 563 53</p>
             <p className="text-zinc-500 lg:text-base text-xs">+4254 3653 563 53</p>
             <p className="text-zinc-500 lg:text-base text-xs">+4254 3653 563 53</p>
             <p className="text-zinc-500 lg:text-base text-xs">+4254 3653 563 53</p>
             </div>
             <div className='w-full lg:w-4/12 md:w-6/12'>
             <h1 className="text-zinc-200">Address</h1>
             <p className="text-zinc-500 lg:text-base text-xs">Lagos</p>
             <p className="text-zinc-500 lg:text-base text-xs">Ikeja</p>
             <p className="text-zinc-500 lg:text-base text-xs">Kaduna</p>
             <p className="text-zinc-500 lg:text-base text-xs">Osun</p>
             </div>
             <div className='w-full lg:w-4/12 md:w-6/12'>
             <h1 className='text-zinc-200'>Social media</h1>
             <p className="text-zinc-500 lg:text-base text-xs">Instagram</p>
             <p className="text-zinc-500 lg:text-base text-xs">Facebook</p>
             <p className="text-zinc-500 lg:text-base text-xs">Twitter</p>
             <p className="text-zinc-500 lg:text-base text-xs">Instagram</p>
             </div>
           </div> 
           <div className="text-xs lg:text-base text-center text-zinc-50 bg-emerald-950 pb-5">@Copyright {year} Akintunde is growing.</div>
        </>
    )
}

export default Footer
