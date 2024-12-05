import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import  Avatar from 'react-avatar'

const Navbar = () => {
  return (
    // this the outer most div
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}
            alt=""
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>

      {/*This is the second part*/}
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />

          <input
            type="text"
            placeholder="Seach mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* this is the third part */}
      <div  className='md:block hidden'>
        <div className ='flex items-center gap-2'>
          <div className = "p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <IoSettingsOutline size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer' >
          <PiDotsNineBold size={"20px"} />
          </div>
          <div className="relative cursor-pointer">
          <Avatar size="40" round={true}/>
          </div>
        </div>
      </div>

      {/* this is the front part */}
      {/* <div className='flex items-center gap-10'>
      <div className='flex items-center gap-2'>
        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <RxHamburgerMenu size={'20px'} />
        </div>
        <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
        <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
      </div>
    </div> */}
      {/* this is the middle this */}
      {/* <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seach mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div> */}
      {/* This is the side four thing */}
      {/* <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="relative cursor-pointer">
            <Avatar
              onClick={() => setToggle(!toggle)}
              src={authUser?.photoURL}
              googleId="118096717852922241760"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
