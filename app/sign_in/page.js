"use client";


import li_icon from "@/public/assets/li_icon_2.png";
import sign_in from "@/public/assets/sign_in.png";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";




import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";

import { SignInButton, useSignIn } from "@clerk/nextjs";
import { useState } from "react";




import { useClerk, useUser } from "@clerk/nextjs";







export default function Home() {

  const [loading, setLoading] = useState(false);

   const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();



   // Frontend triggered login (optional, mostly for session creation)
   const handleNextPickLogin = async () => {
    if (!isSignedIn) {
      openSignIn({
        redirectUrl: "/",
      });
      return;
    }
  
    setLoading(true);
    setLoading(false);
  };







  return (
    <div className="relative bg-[url('/assets/bg_sign_in.svg')] sign_up_page_bg">
      <div className="sign_up_page_bg_2"></div>
      {/* sign up section */}
      <div className="relative pricing_section px-4 md:px-0">
        <div className="signup_page_box">
          <Image src={logo} alt="logo" className="signup_page_logo"/>
          <h4 className="get_started_text">Get Started</h4>
          <p className="get_started_text_line">Sign in or create your account to continue</p>

           <button
          className="subscrive_page_signin_btn"
          onClick={handleNextPickLogin}
          disabled={loading}
        >

          <Image src={sign_in} alt="sign_in" />

          <span>
            {loading ? "Signing..." : "Join NextPick"}
          </span>

        </button>


          <p className="benifits_text">Benefits of Subscription</p>
          <ul>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Unlimited access to Movies, Series & Books
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              AI-powered personalized recommendations
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Save unlimited Watchlists & Reading Lists
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Premium ad-free experience
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Sync across all devices
            </li>
            <li className="subscrive_page_ul_li">
              <span className="ul_li_span">
                <Image src={li_icon} alt="li_icon" />
              </span>
              Cancel anytime
            </li>
          </ul>
          <p className="sigh_in_page_pricing_bottom_text">Join 70,000+ satisfied subscribers</p>
        </div>
      </div>
    </div>
  );
}
