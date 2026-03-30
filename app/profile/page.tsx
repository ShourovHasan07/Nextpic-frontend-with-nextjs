"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import evans from "@/public/assets/evans.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import arrow_grow from "@/public/assets/arrow-grow.png";
import calender from "@/public/assets/calender.png";
import eye_crossed from "@/public/assets/eye_crossed.png";
import credit_card from "@/public/assets/credit_card.png";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import bookmark_white from "@/public/assets/bookmark_white.png";
import movie_card_icon from "@/public/assets/movie_card_icon.png";
import series_card_icon from "@/public/assets/series_card_icon.png";
import book_card_icon from "@/public/assets/book_card_icon.png";
import movie2 from "@/public/assets/movie2.png";
import book3 from "@/public/assets/book3.png";
import book1 from "@/public/assets/book1.png";
import empty_poster from "@/public/assets/empty_poster.png";
import cross_small from "@/public/assets/cross_small.png";
import warning from "@/public/assets/warning.png";
import star_white from "@/public/assets/star_white.png";
import sigh_out from "@/public/assets/sign_out.png";
import trash from "@/public/assets/trash.png";
import dummyBooks from "../components/profileComponents/components/BookGrid";
import menu_dots from "@/public/assets/menu_dots.png";
import undo_btn from "@/public/assets/view_white.png";
import undo from "@/public/assets/undo.png";
import undo_black from "@/public/assets/undo_black.png";
import view_black from "@/public/assets/view_black.png";
import Navbar from "../components/home/components/Navbar";


// Profile  interface
interface Movie {
  id: number;
  title: string;
  image: string | null;
  rating: number;
}

interface ProfileData {
  profile: {
    id: string;
    email: string;
    name: string;
    image: string;
    memberSince: string;
  };
  hidden: {
    movies: Movie[];
    series: any[];
  };
  bookmarks: any[];
  subscription: any;
  transactions: any[];
}

interface ProfileResponse {
  success: boolean;
  data: ProfileData;
  message: string;
}

export default function Home() {

 const [selected, setSelected] = useState("bookmarked");



 const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

const getProfile = async () => {
  setLoading(true);
  try {
    const res = await fetch("/api/profile");
    const data: ProfileResponse = await res.json();

    console.log("API Response:", data);

    if (data.success) {
      setProfile(data.data); //  correct
    }
  } catch (err) {
    console.error(err);
    setProfile(null);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    getProfile();
  }, []);



  
  const subscriptionEndDate = profile?.subscription?.endDate;

const renewText = subscriptionEndDate
  ? (() => {
      const now = new Date();
      const end = new Date(subscriptionEndDate);
      const diffTime = end - now;

      if (diffTime > 0) {
        // difference in days
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // convert to weeks
        const diffWeeks = Math.ceil(diffDays / 7);

        return `Your subscription will renew in ${diffWeeks} week${diffWeeks > 1 ? "s" : ""} from now`;
      } else {
        return "Your subscription has expired";
      }
    })()
  : "No active subscription";




 
  return (
    <div className="min-[769px]:pb-20 pb-10">
      {/* navbar */}

      <Navbar/>
    
      {/* profile heading section */}
      <div className="profile_heading_div">
        <div className="profile_heading_container">
          <div className="min-[769px]:flex justify-between lg:items-center gap-5 lg:flex-row flex-col">
            <div className="profile_heading_left_container">
              <div className="profile_heading_left_container_div1">
                <div className="profile_img_main_div1">
                  <Image
               src={profile?.profile?.image || evans}
  alt="profile"
                    className="profile_img_heading_left"
                    height={164}
                    width={164}
                  />
                </div>
                <div className="xl:flex gap-8 items-start flex-wrap">
                  <div>
                    <h3 className="profile_img_heading_left_name">
                     {}
                    </h3>
                    <p className="profile_img_heading_left_subtitle">
                     {profile?.profile?.email}
                    </p>
                    <div className="profile_page_btns_div">
                      <button className="premium_member_btn">
                        <Image src={crown} alt="crown" className="" />
                        <span>Premium Member</span>
                      </button>
                      <div className="profile_calender_div">
                        <Image src={calender} alt="calender" />
                       <span>
  Member since{" "}
  {profile?.profile?.memberSince
    ? new Date(profile.profile.memberSince).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })
    : ""}
</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile_img_heading_right">
              {/* card 1 */}
              <div className="profile_img_heading_right_card_div max-lg:w-1/2">
                <p>Bookmarked</p>
                <div className="profile_img_heading_right_card_inner_div">
                  <h4 className="profile_img_heading_right_card_inner_div_no">
                  {(profile?.bookmarks?.movies?.length || 0) +
         (profile?.bookmarks?.series?.length || 0)}
                  </h4>
                  <div className="profile_img_heading_right_card_inner_div_img">
                    <Image src={heart} alt="heart" />
                  </div>
                </div>
               
              </div>
              {/* card 2 */}
              <div className="profile_img_heading_right_card_div max-lg:w-1/2">
                <p>Passed</p>
                <div className="profile_img_heading_right_card_inner_div">
                  <h4 className="profile_img_heading_right_card_inner_div_no">
                   {(profile?.hidden?.movies?.length || 0) +
         (profile?.hidden?.series?.length || 0)}
                  </h4>
                  <div className="profile_img_heading_right_card_inner_div_img">
                    <Image src={eye_crossed} alt="eye_crossed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* profile details section */}
      <div className="profile_page_section_container">
        <h2 className="profile_page_section_heading">Profile Details</h2>
        <h2 className="profile_page_section_subheading">
          Manage your personal information
        </h2>
        <div className="profile_detail_section_grid">
          <div>
            <p className="profile_page_labels">Name</p>
            <p>  {profile?.profile?.name}</p>
          </div>
          <div>
            <p className="profile_page_labels">User ID</p>
            <p>user-{profile?.profile?.id}</p>
          </div>
          <div>
            <p className="profile_page_labels">Email</p>
            <p>{profile?.profile?.email}</p>
          </div>
          <div>
            <p className="profile_page_labels">Phone</p>
            <p>+0123456789</p>
          </div>
        </div>
      </div>
      {/* Subscription details section */}
      <div className="profile_page_section_container">
        <h2 className="profile_page_section_heading">Subscription Details</h2>
        <h2 className="profile_page_section_subheading">
          Manage your Nextpick subscription and billing
        </h2>
        <div className="subscription_detail_cards_div">
          {/* card 1 */}
          <div className="subscription_detail_card_div">
            <button className="subscription_detail_card_active_btn">
              Active
            </button>
            <div className="subscription_detail_card_div_inner">
              <div className="subscription_detail_card_img_div bg-gradient-to-b from-[#D3C3FF] to-[#6C3DF0]">
                <Image src={crown} alt="crown" />
              </div>
              <div>
                <p>Current Plan</p>
                <h3 className="subscription_detail_card_title">{profile?.subscription?.interval}ly Premium</h3>
              </div>
            </div>
            <p>Unlimited recommendations and advanced features</p>
            <h3 className="subscription_detail_card_prices">$10/month</h3>
            <button className="subscription_detail_card_subscrive_btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>
              Cancel Subscription
            </button>
            {/* Bookmark Modal */}
            <dialog
              className="modal"
              id="my_modal_2"
            >
              <div className="modal-box relative bg-[#282e3f] rounded-[40px] md:py-12 md:px-8 max-w-[626px]">
                <Image src={cross_small} alt="cross_small" className="subscription_cancel_modal_close_btn" onClick={()=>document.getElementById('my_modal_2').close()}/>
                <div className="modal_warning_img_div">
                  <Image src={warning} alt="warning" className="mx-auto"/>
                </div>
                <h2 className="modal_warning_title">Cancel Subscription</h2>
                <p className="modal_warning_text">Are you sure you want to cancel your Premium subscription? You'll lose access to all premium features at the end of your current billing period.</p>
                <div className="subscription_list_ul_div">
                  <h5 className="subscription_list_ul_title">What happens next:</h5>
                  <ul className="subscription_list_ul">
                    <li>Your subscription will remain active until December 7, 2024</li>
                    <li>You'll keep all premium features until then</li>
                    <li>No additional charges will be made</li>
                    <li>You can reactivate anytime before expiration</li>
                  </ul>
                </div>
                <div className="subscription_modal_grid">
                  <button className="subscription_keep_btn" onClick={()=>document.getElementById('my_modal_2').close()}>Keep Subscription</button>
                  <button className="subscription_cancle_btn">Confirm Cancel</button>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          {/* card 2 */}
          <div className="subscription_detail_card_div">
            <div className="subscription_detail_card_div_inner">
              <div className="subscription_detail_card_img_div bg-gradient-to-b from-[#97FFEA] to-[#00B187]">
                <Image src={calender} alt="calender" />
              </div>
              <div>
                <p>Expired In</p>
                <h3 className="subscription_detail_card_title">
                {profile?.subscription?.endDate
  ? new Date(profile.subscription.endDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  : ""}
                </h3>
                {/* <p className="text-[#00DDA9]">Auto-renewed enabled</p> */}
              </div>
            </div>
            <p className="subscription_detail_card_hr">
            {renewText}
            </p>
            <div className="subscription_detail_card_auto_renew_div pb-[15px]">
              <p>Auto-Renewal Status</p>
              <button className="subscription_detail_card_enable_btn">
                Enabled
              </button>
            </div>
            {/* <div className="subscription_detail_card_auto_renew_div">
              <p>Renewal Amount</p>
              <p>$90.99</p>
            </div> */}
          </div>
        </div>
        <h5 className="transection_heading">Recent Transactions</h5>

        {profile?.transactions.map((txn) => (
        <div key={txn._id} className="flex flex-col min-[769px]:gap-6 gap-4 min-[769px]:pb-12 pb-4">
          {/* card 1 */}
          <div className="subscription_detail_card_div">
            <div className="transaction_card_div_inner">
              {/* Image Div */}
              <div className="transaction_img_div bg-gradient-to-b from-[#97FFEA] to-[#00B187]">
                <Image src={credit_card} alt="credit_card" />
              </div>

              {/* Plan and Price Parent Div */}
              <div className="transaction_card_plan_div">
                {/* Plan Details Div */}
                <div>
                <p>TxnID: {txn.stripeInvoiceId}</p>
                  <h3 className="subscription_detail_card_title py-0 min-[769px]:py-1">
                    Premium Plan
                  </h3>
                  <p>
              {new Date(txn.paidAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
                </div>
                <div>
                <p className="subscription_price_profile">${txn.amount / 100}</p>
            <button
              className={
                txn.status === "paid"
                  ? "compleated_btn_subscribtion"
                  : "cancelled_btn_subscribtion"
              }
            >
              {txn.status === "paid" ? "Completed" : "Cancelled"}
            </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>))}
        <div className="item_center">
          <button className="book_show_more_btn">Load More</button>
        </div>
      </div>
      {/* not subscribe section */}
      <div className="profile_page_section_container py-20">
        <div className="not_subscribe_div">
          <div className="item_center pb-6">
            <div className="subscription_detail_card_img_div bg-gradient-to-b from-[#D3C3FF] to-[#6C3DF0]">
              <Image src={crown} alt="crown" />
            </div>
          </div>
          <h2 className="profile_page_unsubscribe_heading">
            No active subscription yet
          </h2>
          <p className="pb-12">
            Start your journey with unlimited recommendations and personalized
            picks.
          </p>
          <div className="item_center">
            <button className="premium_member_btn items-center">
              <Image src={star_white} alt="star_white" className="h-4 w-4" />
              <span>Premium Member</span>
            </button>
          </div>
        </div>
      </div>
      {/* Your Content Library section */}
      <div className="profile_page_section_container">
        <h2 className="profile_page_section_heading">Your Content Library</h2>
        <h2 className="profile_page_section_subheading">
          Discover and manage your personalized recommendations
        </h2>
        <div className="switch_library">
          <div className="flex justify-center bg-[#393d52] p-[5px] rounded-[15px] min-[769px]:text-2xl text-sm relative max-w-[1428px] mx-auto">


            {/* Bookmarked Radio */}
            <label
              className={`flex-1 cursor-pointer flex items-center justify-center gap-1 py-2 rounded-[15px] transition ${
                selected === "bookmarked"
                  ? "bg-[#6C3DF0] text-white"
                  : "text-white"
              }`}
            >
              <input
                type="radio"
                name="librarySwitch"
                value="bookmarked"
                className="hidden"
                checked={selected === "bookmarked"}
                onChange={() => setSelected("bookmarked")}
              />
              <Image
                src={heart}
                alt="heart"
                className="h-5 w-5 md:h-auto md:w-auto"
              />
              <p>
                Bookmarked ({profile?.bookmarks?.movies?.length || 0})
              </p>
            </label>

            {/* Passed Radio */}
            <label
              className={`flex-1 cursor-pointer flex items-center justify-center gap-1 py-2 rounded-[15px] transition ${
                selected === "passed" ? "bg-[#6C3DF0] text-white" : "text-white"
              }`}
            >
              <input
                type="radio"
                name="librarySwitch"
                value="passed"
                className="hidden"
                checked={selected === "passed"}
                onChange={() => setSelected("passed")}
              />
              <Image
                src={eye_crossed}
                alt="eye"
                className="h-5 w-5 md:h-auto md:w-auto"
              />
             <p>Passed ({profile?.hidden?.movies?.length || 0})</p>
            </label>
          </div>
        </div>


        

        {/* Book Grid */}
        
        {selected === "bookmarked" && (
          <div className="">
            {/* profile page card grid */}
            <div className="saved_page_container_sm px-0">
              <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">
                Movies
              </h3>
              <div className="profile_cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5">
                {/* card 1 */}
                {profile?.bookmarks?.movies?.map((movie, index) => (
                  <div
                    className="min-w-[207px] flex-shrink min-[769px]:min-w-0"
                    key={movie.id}
                  >
                    <div className="saved_compact_page_card_container">
                      {/* Image section */}
                      <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                        <Image
                          src={movie.image}
                          alt="movie2"
                          width={207}
                          height={311}
                          className="card_poster_img h-full"
                        />

                        {/* Movie tag */}
                        {/* <div className="profile_card_category_tag">
                                                    <Image
                                                        src={movie_card_icon}
                                                        alt="movie_card_icon"
                                                        width={14}
                                                        height={14}
                                                    />
                                                    <span>Movies</span>
                                                </div> */}
                        {/* Series tag */}
                        <div className="profile_card_category_tag text-[#F316B0]">
                          <Image
                            src={series_card_icon}
                            alt="series_card_icon"
                            width={14}
                            height={14}
                            className="pb-0.5"
                          />
                          <span>movies</span>
                        </div>
                        {/* Book tag */}
                        {/* <div className="profile_card_category_tag text-[#0C8CE9]">
                                            <Image
                                                src={book_card_icon}
                                                alt="book_card_icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span>Books</span>
                                        </div> */}

                        {/* mobile menu dots */}
                        <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                          <div
                            tabIndex={0}
                            role="button"
                            className="mobile_menu_dots bg-[#0C8CE9]"
                          >
                            <Image src={menu_dots} alt="menu_dots" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1"
                          >
                            <li>
                              <a className="flex justify-end">
                                {" "}
                                <Image src={view_black} alt="View" />{" "}
                                <span>View Details</span>
                              </a>
                            </li>
                            <li>
                              <a className="flex justify-end">
                                <Image src={undo_black} alt="View" />{" "}
                                <span>Undo</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Title gradient at bottom */}
                        <div className="saved_compact_page_card_title_gradient">
                          <h3 className="card_title pl-3 pb-3">
                            {movie.title}
                          </h3>
                        </div>

                        {/* Hover overlay with Undo button */}
                        <div className="saved_compact_page_card_overlay">
                          <button className="view_compact_page_card_undo_btn bg-[#0C8CE9] hover:bg-[#0D7DCF]">
                            <Image src={undo_btn} alt="undo_btn" />
                            <span>View Details</span>
                          </button>
                          <button
                            className={`saved_compact_page_card_undo_btn`}
                          >
                            <Image src={undo} alt="undo_btn" />
                            <span>Undo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



           {/* series div  */}

           {showAll &&

            <div className="saved_page_container_sm px-0">
              <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">
                Series
              </h3>
              <div className="profile_cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5">
                {/* card 1 */}
                {profile?.bookmarks?.series?.map((serie, index) => (
                  <div
                    className="min-w-[207px] flex-shrink min-[769px]:min-w-0"
                    key={serie.id}
                  >
                    <div className="saved_compact_page_card_container">
                      {/* Image section */}
                      <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                        <Image
                          src={serie.image}
                          alt="movie2"
                          width={207}
                          height={311}
                          className="card_poster_img h-full"
                        />

                        {/* Movie tag */}
                        {/* <div className="profile_card_category_tag">
                                                    <Image
                                                        src={movie_card_icon}
                                                        alt="movie_card_icon"
                                                        width={14}
                                                        height={14}
                                                    />
                                                    <span>Movies</span>
                                                </div> */}
                        {/* Series tag */}
                        <div className="profile_card_category_tag text-[#F316B0]">
                          <Image
                            src={series_card_icon}
                            alt="series_card_icon"
                            width={14}
                            height={14}
                            className="pb-0.5"
                          />
                          <span>series</span>
                        </div>
                        {/* Book tag */}
                        {/* <div className="profile_card_category_tag text-[#0C8CE9]">
                                            <Image
                                                src={book_card_icon}
                                                alt="book_card_icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span>Books</span>
                                        </div> */}

                        {/* mobile menu dots */}
                        <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                          <div
                            tabIndex={0}
                            role="button"
                            className="mobile_menu_dots bg-[#0C8CE9]"
                          >
                            <Image src={menu_dots} alt="menu_dots" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1"
                          >
                            <li>
                              <a className="flex justify-end">
                                {" "}
                                <Image src={view_black} alt="View" />{" "}
                                <span>View Details</span>
                              </a>
                            </li>
                            <li>
                              <a className="flex justify-end">
                                <Image src={undo_black} alt="View" />{" "}
                                <span>Undo</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Title gradient at bottom */}
                        <div className="saved_compact_page_card_title_gradient">
                          <h3 className="card_title pl-3 pb-3">
                            {serie.title}
                          </h3>
                        </div>

                        {/* Hover overlay with Undo button */}
                        <div className="saved_compact_page_card_overlay">
                          <button className="view_compact_page_card_undo_btn bg-[#0C8CE9] hover:bg-[#0D7DCF]">
                            <Image src={undo_btn} alt="undo_btn" />
                            <span>View Details</span>
                          </button>
                          <button
                            className={`saved_compact_page_card_undo_btn`}
                          >
                            <Image src={undo} alt="undo_btn" />
                            <span>Undo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>}
          </div>
        )}

        {/* Passed Grid */}
        {selected === "passed" && (
          <div className="">
            {/* profile page card grid */}
            <div className="saved_page_container_sm px-0">
              <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">
                Movies
              </h3>
              <div className="profile_cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5">
                {/* card 1 */}
                {profile?.hidden?.movies?.map((movie, index) => (
                  <div
                    className="min-w-[207px] flex-shrink min-[769px]:min-w-0"
                    key={movie.id}
                  >
                    <div className="saved_compact_page_card_container">
                      {/* Image section */}
                      <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                        <Image
                          src={movie.image}
                          alt="movie2"
                          width={207}
                          height={311}
                          className="card_poster_img h-full"
                        />

                        {/* Movie tag */}
                        {/* <div className="profile_card_category_tag">
                                                    <Image
                                                        src={movie_card_icon}
                                                        alt="movie_card_icon"
                                                        width={14}
                                                        height={14}
                                                    />
                                                    <span>Movies</span>
                                                </div> */}
                        {/* Series tag */}
                        <div className="profile_card_category_tag text-[#F316B0]">
                          <Image
                            src={series_card_icon}
                            alt="series_card_icon"
                            width={14}
                            height={14}
                            className="pb-0.5"
                          />
                          <span>movies</span>
                        </div>
                        {/* Book tag */}
                        {/* <div className="profile_card_category_tag text-[#0C8CE9]">
                                            <Image
                                                src={book_card_icon}
                                                alt="book_card_icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span>Books</span>
                                        </div> */}

                        {/* mobile menu dots */}
                        <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                          <div
                            tabIndex={0}
                            role="button"
                            className="mobile_menu_dots bg-[#0C8CE9]"
                          >
                            <Image src={menu_dots} alt="menu_dots" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1"
                          >
                            <li>
                              <a className="flex justify-end">
                                {" "}
                                <Image src={view_black} alt="View" />{" "}
                                <span>View Details</span>
                              </a>
                            </li>
                            <li>
                              <a className="flex justify-end">
                                <Image src={undo_black} alt="View" />{" "}
                                <span>Undo</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Title gradient at bottom */}
                        <div className="saved_compact_page_card_title_gradient">
                          <h3 className="card_title pl-3 pb-3">
                            {movie.title}
                          </h3>
                        </div>

                        {/* Hover overlay with Undo button */}
                        <div className="saved_compact_page_card_overlay">
                          <button className="view_compact_page_card_undo_btn bg-[#0C8CE9] hover:bg-[#0D7DCF]">
                            <Image src={undo_btn} alt="undo_btn" />
                            <span>View Details</span>
                          </button>
                          <button
                            className={`saved_compact_page_card_undo_btn`}
                          >
                            <Image src={undo} alt="undo_btn" />
                            <span>Undo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



           {/* series div  */}

           {showAll &&

            <div className="saved_page_container_sm px-0">
              <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">
                Series
              </h3>
              <div className="profile_cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5">
                {/* card 1 */}
                {profile?.hidden?.series?.map((serie, index) => (
                  <div
                    className="min-w-[207px] flex-shrink min-[769px]:min-w-0"
                    key={serie.id}
                  >
                    <div className="saved_compact_page_card_container">
                      {/* Image section */}
                      <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                        <Image
                          src={serie.image}
                          alt="movie2"
                          width={207}
                          height={311}
                          className="card_poster_img h-full"
                        />

                        {/* Movie tag */}
                        {/* <div className="profile_card_category_tag">
                                                    <Image
                                                        src={movie_card_icon}
                                                        alt="movie_card_icon"
                                                        width={14}
                                                        height={14}
                                                    />
                                                    <span>Movies</span>
                                                </div> */}
                        {/* Series tag */}
                        <div className="profile_card_category_tag text-[#F316B0]">
                          <Image
                            src={series_card_icon}
                            alt="series_card_icon"
                            width={14}
                            height={14}
                            className="pb-0.5"
                          />
                          <span>series</span>
                        </div>
                        {/* Book tag */}
                        {/* <div className="profile_card_category_tag text-[#0C8CE9]">
                                            <Image
                                                src={book_card_icon}
                                                alt="book_card_icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span>Books</span>
                                        </div> */}

                        {/* mobile menu dots */}
                        <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                          <div
                            tabIndex={0}
                            role="button"
                            className="mobile_menu_dots bg-[#0C8CE9]"
                          >
                            <Image src={menu_dots} alt="menu_dots" />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1"
                          >
                            <li>
                              <a className="flex justify-end">
                                {" "}
                                <Image src={view_black} alt="View" />{" "}
                                <span>View Details</span>
                              </a>
                            </li>
                            <li>
                              <a className="flex justify-end">
                                <Image src={undo_black} alt="View" />{" "}
                                <span>Undo</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Title gradient at bottom */}
                        <div className="saved_compact_page_card_title_gradient">
                          <h3 className="card_title pl-3 pb-3">
                            {serie.title}
                          </h3>
                        </div>

                        {/* Hover overlay with Undo button */}
                        <div className="saved_compact_page_card_overlay">
                          <button className="view_compact_page_card_undo_btn bg-[#0C8CE9] hover:bg-[#0D7DCF]">
                            <Image src={undo_btn} alt="undo_btn" />
                            <span>View Details</span>
                          </button>
                          <button
                            className={`saved_compact_page_card_undo_btn`}
                          >
                            <Image src={undo} alt="undo_btn" />
                            <span>Undo</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>}
          </div>
        )}

        <div className="item_center">
  <button
    className="book_show_more_btn"
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? "Show Less" : "Show More"}
  </button>
</div>
      </div>
      {/* Account management section */}
      <div className="profile_page_section_container">
        <h2 className="profile_page_section_heading">Account Management</h2>
        <h2 className="profile_page_section_subheading">
          Manage your account settings and data
        </h2>
        <div className="account_profile_btn_div">
          <button className="profile_log_out">
            <Image src={sigh_out} alt="crown" />
            <span>Log Out</span>
          </button>
          <button className="profile_delete">
            <Image src={trash} alt="crown" />
            <span>Delete My Account</span>
          </button>
        </div>
        <div className="contact_profile_div">
          <p>
            Need help? Our support team is available 24/7 to assist you.
            Consider reaching out before deleting your account - we might be
            able to resolve any issues you're experiencing.
          </p>
          <button className="profile_contact_btn">Contact Support</button>
        </div>
      </div>
    </div>
  );
}
