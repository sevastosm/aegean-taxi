"use client";
import React, { useState } from "react";
import Image from "next/image";

// Image imports
import SearchIcon from "./assets/search.png";
import HamburgerIcon from "./assets/hamburger.png";
import Card1Img from "./assets/card1.png";
import Card3Img from "./assets/card3.png";
import Card4Img from "./assets/card2.png";
import Card5Img from "./assets/card4.png";
import CalendarIconBlack from "./assets/calendarB.png";
import TimeIconWhite from "./assets/clockW.png";
import CalenderIconWhite from "./assets/calendarW.png";
import TimeIcon from "./assets/clock.png";
import WhatsAppIcon from "./assets/whatsapp_btn.png";
import ArrowIcon from "./assets/arrow.png";
import ArrowIconBlack from "./assets/arrowB.png";
import PopImg1 from "./assets/most_popular1.png";
import PopImg2 from "./assets/most_popular2.png";
import PopImg3 from "./assets/most_popular3.png";
import PopImg4 from "./assets/most_popular4.png";







const Blog = () => {
  
  // State to manage the selected section
  const [selectedSection, setSelectedSection] = useState("newest");

  const articles = [
    {
      category: "Engineering, Data/ML",
      date: "August 29",
      region: "Global",
      title: "Pinot for Low-Latency Offline Table Analytics",
      image: PopImg1, // Add your image paths here
    },
    {
      category: "Engineering, Data/ML",
      date: "November 07",
      region: "Global",
      title: "Presto Express: Speeding up Query Processing with Minimal Resources",
      image: PopImg2,
    },
    {
      category: "Engineering, Data/ML",
      date: "August 29",
      region: "Global",
      title: "Lucene: Uber’s Search Platform Version Upgrade",
      image: PopImg3,
    },
    {
      category: "Engineering, Backend, Mobile",
      date: "August 29",
      region: "Global",
      title: "Unified Checkout: Streaming Uber’s Payment Ecosystem",
      image: PopImg4,
    },
  ];


  

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="bg-black px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-base font-medium">
          Aegean Taxi <span className="font-bold">Blog</span>
        </div>
        {/* Action Section */}
        <div className="flex items-center space-x-4">
          <Image src={SearchIcon} alt="Search" className="w-5 h-5" />
          <button className="bg-white text-black py-2 px-4 rounded-full font-medium">
            Sign Up
          </button>
          <Image src={HamburgerIcon} alt="Menu" className="w-5 h-5" />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 pt-10 max-w-xl">
        {/* Navigation Options */}
        <div className="flex space-x-8 mb-8">
          <button
            className={`font-bold ${selectedSection === "newest" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("newest")}
          >
            Newest
          </button>
          <button
            className={`font-bold ${selectedSection === "popular" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("popular")}
          >
            Popular
          </button>
          <button
            className={`font-bold ${selectedSection === "byDate" ? "text-black" : "text-gray-500"}`}
            onClick={() => setSelectedSection("byDate")}
          >
            By Date
          </button>
        </div>

        {/* Blog Content */}
        <div className="space-y-8">
          {/* Conditionally render content based on selected section */}
          {selectedSection === "newest" && (
            <>
              {/* First Blog Card */}
              <div className="bg-[#F6F6F6] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card1Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Image src={CalendarIconBlack} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium">
                      Aegean Taxi launches fully automated WhatsApp taxi booking bot
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        // onClick={() => router.push("/blog/blogPost")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Blog Card */}
              <div className="bg-black p-8 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-white">Book a ride with Aegean Taxi</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-black underline text-white font-medium">
                        Download the Taxi App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-black underline text-white font-medium">
                        Book Online
                      </a>
                    </li>
                  </ul>
                  <button className="bg-[#52BA63] text-white px-1 h-[60px] w-[200px] rounded-lg flex items-center space-x-2">
                    <Image src={WhatsAppIcon} alt="WhatsApp" className="w-full h-full object-fill pt-1 pb-1" />
                    
                  </button>
                </div>
              </div>


               {/* third Blog Card */}
               <div className="bg-[#2B2B33] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card3Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2 text-white">
                      <Image src={CalenderIconWhite} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium text-[#0072E1]">
                    How Aegean Taxi helps fleet partners to increase their revenues                    </h3>
                    <div className="flex justify-between items-center mt-4 text-white">
                      <div className="flex items-center text-sm text-white">
                        <Image src={TimeIconWhite} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-[#0072E1] text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        // onClick={() => router.push("/blog/blogPost")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>



               {/* forth Blog Card */}
               <div className="bg-[#F6F6F6] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card4Img} alt="Blog Visual" className="h-[200px] w-full" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Image src={CalendarIconBlack} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium">
                    Aegean Taxi and the use of F1 telemetry data to optimise routing                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        // onClick={() => router.push("/blog/blogPost")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


               {/* fifth Blog Card */}
               <div className="bg-[#2B2B33] rounded-lg">
                <div className="flex flex-col space-y-4">
                  <Image src={Card5Img} alt="Blog Visual" className="h-[200px] w-full object-scale-down" />
                  <div className="pt-5 pb-5 p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-2 text-white">
                      <Image src={CalenderIconWhite} alt="Calendar" className="w-5 h-5 mr-2" />
                      May 25th 2024
                    </div>
                    <h3 className="text-xl font-medium text-[#0072E1]">
                    Aegean gives Labros Bizas a handjob and he loves it
                    </h3>
                    <div className="flex justify-between items-center mt-4 text-white">
                      <div className="flex items-center text-sm text-white">
                        <Image src={TimeIconWhite} alt="Clock" className="w-5 h-5 mr-2" />
                        5 min read
                      </div>
                      <button
                        className="bg-[#0072E1] text-white px-4 py-2 rounded-full flex items-center space-x-2"
                        // onClick={() => router.push("/blog/blogPost")}
                      >
                        <span>More</span>
                        <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex justify-between items-center pl-8  pr-8 mb-8">
          <h2 className="text-black text-bold  text-md mr-2">1/10</h2>
          <button className={`bg-white  text-black px-4 py-2 rounded-full border-[1px] border-black flex items-center space-x-2`}>
          <span>Next</span>
            <Image src={ArrowIconBlack} alt="Arrow" className="w-3.5 h-3.5" />
          </button>
        </div>



            </>
          )}

                        {/*Popular secttons */}
              {selectedSection === "popular" && (
                // Most Popular Section
                <div className="font-inter bg-white text-black max-w-3xl pt-4 mx-auto">
                  {/* Heading */}
                  <h1 className="text-2xl font-bold mb-6">Most popular</h1>
                  <hr className="mb-4 border-gray-300" />

                  {/* Article List */}
                  <div className="space-y-6">
                    {articles.map((article, index) => (
                      <div key={index} className="flex justify-between items-center pb-4">
                        {/* Left Section */}
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="text-gray-800">{article.category}</span>{" "}
                            <span>{article.date}</span> / {article.region}
                          </p>
                          <h2 className="text-base font-medium mt-1">{article.title}</h2>
                        </div>
                        {/* Image Section */}
                        <Image
                          src={article.image} // Dynamically add images
                          alt={article.title}
                          className="w-20 h-20 object-cover rounded-md"
                          width={80}
                          height={84}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}


          {/* Empty content for By Date */}
          {selectedSection === "byDate" && (
            <div className="text-center text-gray-500">No posts available by date.</div>
          )}
        </div>
      </main>

    </div>
  );
};

export default Blog;
