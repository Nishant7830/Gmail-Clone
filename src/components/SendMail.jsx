import React from 'react'
import { RxCross2 } from "react-icons/rx";
const SendEmail = () => {
    return (
        <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md '>
            <div className='flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxCross2 />
                </div>
            </div>
            <form className='flex flex-col p-3 gap-2'>
                <input name="recipients" 
                  type="text"
                  placeholder='Recipients'
                  className='outline-none py-1' />
                <input name="subject"
                  type="text"
                  placeholder='Subject'
                  className='outline-none py-1' />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className='outline-none py-1'>
                   </textarea>
                <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
            </form>
        </div>
    )
}

export default SendEmail