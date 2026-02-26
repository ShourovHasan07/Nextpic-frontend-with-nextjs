import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar_div'>
      <Link href="/"><Image src={logo} alt='logo' /></Link>
      <div className="navbar_btn_div">
        <button className='navbar_btn hover:shadow-[0px_4px_10px_0px_#8A38F5]'>Sign Up</button>
      </div>
    </div>
  )
}
