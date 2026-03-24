import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from 'next/link';
import header_img from "@/public/assets/header_img.svg";

export default function Navbar() {
    return (
        <div className='navbar_div'>
            <Link href="/"><Image src={logo} alt='logo' /></Link>
            <h2 className="filter_heading hidden lg:block">
                <span>
                    Discover Your Next Favorite{" "}
                    <span className="inline-flex items-center ">
                        Pick
                        <Image
                            src={header_img}
                            alt="header_img"
                            className="ml-2.5 inline-block w-5 md:w-auto"
                        />
                    </span>
                </span>
            </h2>
            <div className="navbar_btn_div">
                <button className='navbar_btn hover:shadow-[0px_4px_10px_0px_#8A38F5]'>Sign Up</button>
            </div>
        </div>
    )
}
