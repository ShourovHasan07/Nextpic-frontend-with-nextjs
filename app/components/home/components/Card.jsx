"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import thumbs from "@/public/assets/thumbs-up.png";
import pass from "@/public/assets/pass.png";
import plus from "@/public/assets/sign_in.png";
import eye from "@/public/assets/eye.png";
import Insta from "@/public/assets/Insta.png";
import x from "@/public/assets/x.png";
import facebook from "@/public/assets/facebook.png";
import links from "@/public/assets/links.png";
import author from "@/public/assets/author.png";
import cross_small from "@/public/assets/cross_small.png";
import GamesBMd from "@/public/assets/GamesBMd.png";
import MoviesBMd from "@/public/assets/MoviesBMd.png";
import SeriesBMd from "@/public/assets/SeriesBMd.png";
import BooksBMd from "@/public/assets/BooksBMd.png";
import bookmark_white_2 from "@/public/assets/bookmark_white_2.png";
import sign_in from "@/public/assets/sign_in.png";
import star from "@/public/assets/star.png";
import { useId, useRef } from "react";
import { useRouter } from "next/navigation";





// Helper function to get the correct bookmark icon path
const getBookmarkIcon = (type) => {
  switch (type) {
    case "movie":
      return "/assets/bookmark.png";
    case "series":
      return "/assets/bookmark-series.png";
    case "book":
      return "/assets/bookmark-book.png";
    case "game":
      return "/assets/bookmark-game.png";
    default:
      return "/assets/bookmark.png";
  }
};

export default function Card({ item, type,onClick,details})



{

  const router = useRouter();

  const data = details || item;// here 2 api dat are mearge  popular movie and movie by id 

   console.log ("detailsData in card jsx component props ",details)




  

  const openModal = async () => {
    if (onClick) {
      await onClick(); // 
    }
    modalRef.current?.showModal(); 
  };







  const bookmarkIcon = getBookmarkIcon(type);
  const modalRef = useRef(null);


  // Generate a stable unique base ID for this component instance
  const baseId = useId();


 // console.log("items in card jsx componnet props ",item)

  const shadowColor = {
    movie: "hover:shadow-[0_5px_10px_rgba(138,56,245,1)]",
    series: "hover:shadow-[0_5px_10px_rgba(243,22,176,1)]",
    game: "hover:shadow-[0_5px_10px_rgba(246,80,9,1)]",
    book: "hover:shadow-[0_5px_10px_rgba(12,140,233,1)]",
  };

  // Reference for bookmark modal
  const bookmarkModalRef = useRef(null);

  // const openModal = () => {
  //   modalRef.current?.showModal(); // open main card modal
  // };

  const closeModal = () => {
    modalRef.current?.close(); // close main card modal
  };

  const handleClick = (e) => {
    e.preventDefault(); // stop default behavior
    e.stopPropagation(); // stop bubbling to parent (card onClick)
    bookmarkModalRef.current?.showModal(); // open bookmark modal
  };

 

  const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    // { name: "Apple TV+", img: "/assets/apple.png" },
    // { name: "HBO Max", img: "/assets/hbo.png" }
  ];

  return (
    <div className="h-full">
      <div
        className={`card_div transition-all duration-300 ease h-full flex flex-col ${
          shadowColor[type] || ""
        }`}
      >
        {/* Image section */}
        <div
          className="relative overflow-hidden max-h-[303px] cursor-pointer"
          onClick={openModal} // opens main modal
        >
          <Image
            src={data.image}
            alt={data.title}
            width={210}
            height={315}
            className="card_poster_img"
          />

          {/* rating */}
          <div className="card_tag_div_3">
            <Image src={star} alt="star" />
            <span>{data.rating}/10</span>
          </div>
          {/* Bookmark icon */}
          <label
            className="card_bookmark_img hover:opacity-100 md:opacity-80"
            onClick={handleClick} // calls handleClick with stopPropagation
          >
            <Image src={bookmarkIcon} alt="bookmark" width={34} height={34} />
          </label>

          {/* Bookmark Modal */}
          <dialog
            ref={bookmarkModalRef}
            className="modal"
            onClick={(e) => e.stopPropagation()} // Prevents bubbling to parent
          >
            <div className="modal-box relative bg-white/20 backdrop-blur-[10px] rounded-[40px] py-12 px-6 text-center border-2 border-[#7B808F]">
              <div
                className={`filter_option_img_div ${
                  type === "movie"
                    ? "bg-[#8A38F5]" // purple for movie
                    : type === "series"
                    ? "bg-[#F316B0]" // pink for series
                    : type === "book"
                    ? "bg-[#0C8CE9]" // blue for book
                    : "bg-gray-500" // fallback
                }`}
              >
                <Image src={bookmark_white_2} alt="bookmark_white_2" />
              </div>
              <h3 className="bookmark_modal_box_title">
                Please log in to save bookmarks
              </h3>
              <p>Log in to save and access your favorite content anytime</p>
              <div className="bookmark_modal_box_btn_div">
                <button
                  className="bookmark_modal_box_cancel_btn"
                  onClick={() => bookmarkModalRef.current?.close()}
                >
                  Cancel
                </button>
                <button
                  className={`bookmark_modal_box_log_btn ${
                    type === "movie"
                      ? "bg-[#8A38F5]" // purple for movie
                      : type === "series"
                      ? "bg-[#F316B0]" // pink for series
                      : type === "book"
                      ? "bg-[#0C8CE9]" // blue for book
                      : "bg-gray-500" // fallback
                  }`}
                >
                  <Image src={sign_in} alt="sign_in" />
                  <span>Log in</span>
                </button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        {/* Content section */}
        <div className="card_content_div flex flex-col flex-grow">
          <div className="text_section flex-grow">
            {/* Title */}
            <h3 className="card_title">{data.title}</h3>

            {/* Year and Tags */}
            <div className="card_tag_div">
              <span>{data.year}</span>
              {data.genres.map((genre, idx) => (
                <span key={idx} className="card_year">
                  {genre}
                </span>
              ))}
            </div>

          
            {/* Description */}
<div className="flex items-center ">
  <p className="card_description truncate ">
    {item.description}
  </p>

  <span
    className="text-[#5799EF] cursor-pointer shrink-0"
    onClick={openModal}
  >
    More
  </span>
</div>
          </div>

          {/* Buttons pinned at bottom */}
          <div className="card_btn_div">
            <button className="card_like_btn">
              <Image src={thumbs} alt="thumbs" />
              Like
            </button>
            <button className="card_pass_btn">
              <Image src={pass} alt="pass" />
              Pass
            </button>
          </div>
        </div>
      </div>

      {/* popup section */}
      <dialog
        ref={modalRef}
        className="modal modal-middle w-full px-5"
        style={{ maxHeight: "100vh" }} // limit dialog height to 90% viewport height
        onClick={(e) => {
          if (e.target === modalRef.current) {
            closeModal(); // closes only when clicking backdrop
            e.stopPropagation(); //prevents reopening from card click
          }
        }}
      >
        <div
          className="modal-box relative w-full max-w-[1440px] overflow-hidden bg-[#1F2842] rounded-[15px]"
          style={{ maxHeight: "90vh", overflowY: "auto" }} // make content scrollable
        >
          {/* Blurred background image */}
          <div
            className="absolute z-0 inset-0 bg-cover bg-center filter opacity-50 blur-[50px]"
            style={{
              backgroundImage: `url(${item.backgroundImage || item.image})`,
              // filter: "blur(50px)",
              // zIndex: 0,
            }}
          ></div>

          {/* Content on top */}
          <div className="relative z-10 md:pt-14 md:pb-12 pt-8 pb-4 md:px-6 px-[0px]">
            {/* Close button in top right */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // ✅ stops bubbling to card
                closeModal();
              }}
              className="absolute md:right-6 right-[-8px] md:top-[-2px] top-[-10px] text-white cursor-pointer md:border-1 border-white hover:border-transparent rounded-full md:px-5 px-3 py-2 z-20 flex gap-2 hover:bg-[#FF4F6D] items-center font-medium"
            >
              <span className="hidden md:block pb-0.5">Close</span>{" "}
              <Image
                className="md:w-[14px] md:h-[14px] w-4 h-4"
                src={cross_small}
                alt="cross_small"
              />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:max-w-[319px] xl:h-[479px] md:w-auto w-full rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={210}
                  height={315}
                  className="lg:min-w-[319px] w-full rounded-[20px]"
                />
              </div>
              <div className="bg-black/30 w-full p-6 rounded-[20px] text-white text-sm pt-2.5 relative">
                <div className="absolute md:right-6 right-3 md:top-7 top-3">
                  <div className="relative md:w-[90px] md:h-[90px] w-12 h-12 rounded-full flex items-center justify-center">
                    {/* Progress circle */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#FFB900 ${
                          75 * 3.6
                        }deg, #423D0F 0deg)`,
                      }}
                    ></div>

                    {/* Inner circle (5px smaller) */}
                    <div
                      className="absolute rounded-full flex items-center justify-center"
                      style={{
                        inset: "5px", // makes the border thickness = 5px
                        backgroundColor: "#211e07",
                        // opacity: "30%",
                      }}
                    >
                      <span className="md:text-xl font-bold text-white">
                       {data?.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="cards_popup_titles_top_div">{item.title}</h1>
                  <div className="flex gap-2.5 items-center pt-2.5">
                    <p>{item.year}</p>
                    <img src="/assets/white_dot.png" alt="dot" />
                    <p>PG-13</p>
                    <img src="/assets/white_dot.png" alt="dot" />
                    <p>2h 28m</p>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-2.5 text-yellow-400 py-6 text-2xl font-bold">
                    <FaStar />{" "}
                    <span className="text-white">{item.rating}/10</span>
                  </div>
                  {/* Year and Tags */}
                  <div className="text-sm text-[#7B808F] mt-1 flex flex-wrap gap-2.5 items-center">
                    {item.genres.map((genre, idx) => (
                      <span
                        key={idx}
                        className="text-white px-2.5 py-0.5 rounded-full text-[14px] border-1 border-[#7B808F]"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold pt-6 pb-2.5 text-base">
                    Overview
                  </h4>
                  <p className="text-base">
                   {data.description}
                  </p>
                  <p className="text-base pt-6 pb-2.5">
                    <span className="font-semibold">Directors: </span>
                    
                   {details ? (
  details.directors?.length > 0 ? (
    details.directors.map((director, index) => (
      <span key={index} className="text-[#8A38F5]">
        {director}
        {index < details.directors.length - 1 && ", "}
      </span>
    ))
  ) : (
    <span className="text-gray-400">N/A</span>
  )
) : (
  <span className="text-gray-400">""</span>
)}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* bottom popup section */}
          <div className="md:px-6 px-[0px] md:pb-10 pb-0">
            {type === "book" ? (
              <h2 className="cards_popup_titles">Top Billed Cast</h2>
            ) : (
              <h2 className="cards_popup_titles">Top Billed Cast</h2>
            )}
            <div className="flex flex-col md:flex-row md:gap-6 gap-4 pt-6">
              {type === "book" ? (
                /* Book details section */
                <div className="w-full">
                  <div>
                    <div className="bg-black/30 p-6 rounded-[20px] text-white text-sm overflow-x-auto">
                      <table className="w-full border-separate border-spacing-y-2">
                        <tbody>
                          <tr>
                            <td className="book_popup_table">ISBN:</td>
                            <td className="book_popup_table_info">
                              9780063453982, 0063453983
                            </td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Published:</td>
                            <td className="book_popup_table_info">
                              2015-02-10
                            </td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Publisher:</td>
                            <td className="book_popup_table_info">
                              Harper Collins
                            </td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Author:</td>
                            <td className="book_popup_table_info">
                              Yuval Noah Harari
                            </td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Page count:</td>
                            <td className="book_popup_table_info">464</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Format:</td>
                            <td className="book_popup_table_info">
                              April 26, 2019
                            </td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Language:</td>
                            <td className="book_popup_table_info">English</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">
                              Country of Origin:
                            </td>
                            <td className="book_popup_table_info">USA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h3 className="cards_popup_titles pt-12 pb-6">Author</h3>
                    <div className="rounded-[20px] h-full overflow-hidden transition-transform duration-300 min-w-[180px] md:min-w-auto max-w-[204px]">
                      <div className="relative w-full h-48">
                        <Image
                          src={author}
                          alt="profile author"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 text-center text-white bg-black/30 h-full">
                        <h4 className="font-bold text-sm">Yuval Noah Harari</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Cast section */
                <div className="md:grid flex xl:gap-6 gap-4 overflow-x-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 max-w-[888px] w-full">
                  {details?.top_cast?.map((hero, idx) => (
                    <div
                      key={idx}
                      className="rounded-[20px] h-full overflow-hidden transition-transform duration-300 min-w-[180px] md:min-w-auto"
                    >
                      <div className="relative w-full  h-48">
                        <Image
                          src={hero?.image || "/chris.png"}
                          alt={hero.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 text-center text-white bg-black/30 h-full">
                        <h4 className="font-bold">{hero.name}</h4>
                        <p className="text-white">({hero.character})</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="bg-black/30 p-6 w-full xl:max-w-[432px] lg:max-w-[380px] md:max-w-[300px] rounded-[20px] text-white relative">


               <button
      onClick={() => router.push("/sign_in")} // এখানে correct route
      className="bg-[#8A38F5] hover:opacity-90 w-full rounded-full text-white py-[15px] flex gap-2.5 justify-center items-center mb-6"
    >
      <Image src={plus} alt="plus" width={24} height={24} />
      <span>Sign Up to Bookmark</span>
    </button>
                
                <p className="font-semibold">Watch Now  
                ( {details?.watch_region} )</p>
                <div className="filter2_movies_platform_div flex-nowrap md:grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-3 flex md:flex-none overflow-x-auto md:overflow-visible pt-6">
                  {details?.watch_providers.map((platform, index) => {
                    const id = `${baseId}-platform-${index}`;;
                    return (
                      <div key={id} className="min-w-[120px] md:min-w-0">
                        {" "}
                        {/* ensures horizontal scroll on mobile */}
                        <input
                          id={id}
                          type="checkbox"
                          name={`popup_movie_platform`}
                          value={platform.name}
                          className="movie-platform-checkbox"
                        />
                        <label
                          htmlFor={id}
                          className="popup_platform_option_div"
                        >
                          <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                            <img
                              src={platform.image || "/defult23.png"}
                              alt={platform.name}
                              className="mx-auto w-[30px] h-[30px]"
                            />
                          </div>
                          <h5 className="filter2_option_title pt-[14px]">
                            {platform.name}
                          </h5>
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* status div */}
                <div>
                  <div className="pb-6 pt-9">
                    <h5 className="font-semibold pb-[5px]">Status</h5>
                    <p className="font-light">{details?.status}</p>
                  </div>
                  <div className="pb-6">
                    <h5 className="font-semibold pb-[5px]">
                      Original Theatrical Release
                    </h5>
                    <p className="font-light">{details?.release_date}</p>
                  </div>
                  <div className="pb-6">
                    <h5 className="font-semibold pb-[5px]">
                      Original Language
                    </h5>
                    <p className="font-light">{details?.original_language}</p>
                  </div>
                  
                  
                </div>
                <div className="flex gap-6 justify-center items-center">
                  <span>Share</span>
                  <div className="flex gap-[15px] items-center">
                    <Image className="cursor-pointer" src={Insta} alt="Insta" />
                    <Image className="cursor-pointer" src={x} alt="x" />
                    <Image
                      className="cursor-pointer"
                      src={facebook}
                      alt="facebook"
                    />
                    <Image className="cursor-pointer" src={links} alt="links" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
