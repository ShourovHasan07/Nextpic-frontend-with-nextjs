import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from 'next/link';

import { SignInButton, UserButton, Show, useUser } from "@clerk/nextjs";

export default function Navbar() {


   const { isSignedIn } = useUser();



  return (
    <div className='navbar_div'>
      <Link href="/"><Image src={logo} alt='logo' /></Link>
      <div >


        {isSignedIn ? (
          // 
          <UserButton
            afterSignOutUrl="/"       
            userProfileMode="navigation"
          />
        ) : (
          <div className="navbar_btn_div" >

            <SignInButton >
             <button className='navbar_btn hover:shadow-[0px_4px_10px_0px_#8A38F5]'>Sign Up</button>
          </SignInButton>


          </div>
          
        )}



       
      </div>
    </div>
  )
}
