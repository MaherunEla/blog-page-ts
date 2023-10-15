import React from 'react'

const page = () => {
  return (
    <div className='container flex flex-col items-center justify-center py-32 '>
        <div className='w-full lg:max-w-3xl mb-16'>
            <p className='text-center text-black text-base font-black leading-10 tracking-[3px] mb-3 uppercase'>Contact us</p>
           
            <h1 className='text-center mb-6'>Let’s Start a Conversation</h1>
            <p className='text-mediumgray text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>

            
        </div>

        <div className='py-12 px-16 bg-purple w-full lg:max-w-3xl'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full lg:w-[294px]'>
                <span className=' font-inter text-sm font-normal text-white opacity-60 '>Working hours</span>
                <hr className='bg-white opacity-50 mb-4 mt-4'></hr>
            <h5 className='text-white'>Monday To Friday</h5>
            <h5 className='text-white'>9:00 AM to 8:00 PM </h5>
            <span className='b1 text-white opacity-60'>Our Support Team is available 24/7</span>


                </div>
                <div className='w-full lg:w-[294px]'>
                <span className=' font-inter text-sm font-normal text-white opacity-60 '>Contact Us</span>
                <hr className='bg-white opacity-50 mb-4 mt-4'></hr>
            <h5 className='text-white'>020 7993 2905</h5>
          
            <span className='b1 text-white opacity-60'>hello@finsweet.com</span>


                </div>

            </div>
           
            </div>

       <div className='w-full lg:max-w-3xl mt-8'>
                <form action="/" className='flex flex-col gap-4 '>
                    <div>
                        <input type="text" placeholder='Full Name' className='w-full py-6 pl-6 border border-black border-opacity-50 placeholder-black font-inter text-base font-normal leading-7'/>
                    </div>
                    <div>
                        <input type="email" placeholder='Your Email' className='w-full py-6 pl-6 border border-black border-opacity-50 placeholder-black font-inter text-base font-normal leading-7'/>
                    </div>
                    <div>
                        <select id='category' name="category" className='w-full py-6 pl-6 border border-black border-opacity-50 '>
                            <option value="general">Query Related</option>
                            <option value="general">Technical Support</option>
                            <option value="general">Billing</option>
                        </select>

                    </div>
                    <div>
                        <textarea name="text" id="textarea" cols="30" rows="10" className='w-full py-6 pl-6 border border-black border-opacity-50' >Message</textarea>
                    </div>
                    <button className='button border border-yellow bg-yellow '><h4>Send Message</h4></button>

                </form>

            </div>  

    </div>
  )
}

export default page