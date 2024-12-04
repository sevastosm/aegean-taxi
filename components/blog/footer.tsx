import React from "react";
import Image from "next/image";


import AegeanTaxi from "public/assets/blog/aegeanTaxi.png";
import Instagram from "public/assets/blog/insta.png";
import Facebook from "public/assets/blog/facebook.png";
import Twitter from "public/assets/blog/twitter.png";
import Linkedin from "public/assets/blog/linkedin.png";
import TikTok from "public/assets/blog/tiktok.png";
import GooglePlay from "public/assets/blog/googleplay.png";
import AppleStore from "public/assets/blog/applebtn.png";





const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-8">
         <Image src={AegeanTaxi} alt="AegeanTaxi" className="w-full h-[200px]" />
      <div className="max-w-6xl mx-auto flex flex-col items-center px-10">
        {/* Logo Section */}
        
       

        {/* Follow Us Section */}
        <div className="flex flex-col w-full mt-6">
          {/* "Follow us" Heading */}
          <h3 className="text-blue-500 font-bold text-lg">Follow us</h3>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-6 mt-3">
  <Image 
    src={Instagram} 
    alt="Instagram" 
    width={34} 
    height={34} 
    className="p-1 rounded-full border border-black" 
  />
  <Image 
    src={Facebook} 
    alt="Facebook" 
    width={34} 
    height={34} 
    className="p-1 rounded-full border border-black" 
  />
  <Image 
    src={Twitter} 
    alt="Twitter" 
    width={34} 
    height={34} 
    className="p-1 rounded-full border border-black" 
  />
  <Image 
    src={Linkedin} 
    alt="LinkedIn" 
    width={34} 
    height={34} 
    className="p-1 rounded-full border border-black" 
  />
  <Image 
    src={TikTok} 
    alt="TikTok" 
    width={30} 
    height={30} 
    className="p-1 rounded-full border border-black" 
  />
</div>


          {/* Divider Line */}
          <div className="w-full border-t border-gray-300 mt-6 mb-6"></div>

          {/* Sitemap Section */}
          <h3 className="text-blue-500 font-bold text-lg">Sitemap</h3>
          <div className="grid grid-cols-2 gap-8 w-full mt-4">
            {/* Left Column */}
            <div className="space-y-3">
              <a href="#" className="block text-base font-bold hover:underline">
                Home
              </a>
              <a href="#" className="block text-base font-bold hover:underline">
                Taxi
              </a>
              <a
                href="#"
                className="block text-base font-bold hover:underline"
              >
                Airport Transfers
              </a>
              <a
                href="#"
                className="block text-base font-bold hover:underline"
              >
                Port Transfers
              </a>
              <a href="#" className="block text-base font-bold hover:underline">
                Tours
              </a>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <a href="#" className="block text-base font-bold hover:underline">
                About us
              </a>
              <a href="#" className="block text-base font-bold hover:underline">
                Partners
              </a>
              <a href="#" className="block text-base font-bold hover:underline">
                Blog
              </a>
              <a
                href="#"
                className="block text-base font-bold hover:underline"
              >
                Contact us
              </a>
              <a href="#" className="block text-base font-bold hover:underline">
                Book Online
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-300 mt-6 mb-6"></div>

                {/* Locations Section */}
            <h3 className="text-blue-500 font-bold text-xl mb-4 text-left w-full">Locations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full text-base">
            
            <div>
                <h4 className="font-bold underline text-lg">Mykonos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold underline text-lg">Santorini</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            
            <div>
                <h4 className="font-bold underline text-lg">Rhodes</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold underline text-lg">Kos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            
            <div>
                <h4 className="font-bold underline text-lg">Milos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold underline text-lg">Corfu</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            
            <div>
                <h4 className="font-bold underline text-lg">Paros</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold underline text-lg">Tinos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>



            
            <div>
                <h4 className="font-bold underline text-lg">Kefalonia</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold underline text-lg">Naxos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Sifnos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Kythnos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Serifos</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Kea - Tzia</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Chalkidiki</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            
            <div>
                <h4 className="font-bold underline text-lg">Kythira</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>

            
            <div>
                <h4 className="font-bold underline text-lg">Heraklion</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>


            
            <div>
                <h4 className="font-bold underline text-lg">Bodrum</h4>
                <ul className="space-y-1 text-sm">
                <li>Taxi</li>
                <li>Airport Taxi</li>
                <li>Port Taxi</li>
                <li>Tours</li>
                </ul>
            </div>
            </div>


            {/* Divider Line */}
          <div className="w-full border-t border-white mt-6 mb-6 pt-6">
                            <div className="flex flex-col items-center bg-white text-black space-y-3">
                        {/* Contact Us Button */}
                        <button className="bg-blue-500 text-white text-lg font-bold py-2  rounded-xl w-full">
                            Contact us
                        </button>

                        {/* Phone Number Button */}
                        <button className="bg-blue-500 text-white text-lg font-bold py-2 rounded-xl w-full">
                            +30 215 215 400
                        </button>

                        {/* App Store Buttons */}
                        <div className="flex flex-row space-x-1">
                            {/* Google Play Button */}
                            <button className="w-[50%] bg-black p-1 rounded-xl">
                            <Image
                            src={GooglePlay}
                            alt="Get it on Google Play"
                            />
                            </button>
                            {/* App Store Button */}
                            <button className="w-[50%] bg-black p-1 rounded-xl">
                            <Image
                                 src={AppleStore}
                                 alt="Download on the App Store"
                               
                                  />
                            </button>
                        </div>
                        </div>
          </div>
         

      {/* Footer Bottom Section */}
      <div className="text-left text-[13px] text-gray-500">
        <p>Copyright © 2025 Aegean Taxi LLC. All rights reserved</p>
        <div className="flex justify-left space-x-2 mt-1 text-[13px]">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
        </div>
      </div>
    </div>


          
      
    </footer>
  );
};

export default Footer;
