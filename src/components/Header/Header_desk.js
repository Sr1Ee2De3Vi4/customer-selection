import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../assets/Rectangle 233.svg'
function Header()
{
    return(
        <div className="text-black">
        <nav className="bg-blue-100 h-40 pl-20 pr-20 ">
        <div className="pt-4">Brandon Wedding</div>


        <div className="pt-4 grid grid-cols-3">
          <div>
            <p className="text-4xl font-semibold">Bridal Shower</p> 
          </div>
          <div></div>
          {/* <div></div> */}
          <div className="">
          <input className=" pb-2 pl-8 ml-8 pr-8 font-semibold pt-2 text-blue text-sm" type="button" value="Save Selection" placeholder=""></input>
          <input className="  pb-2 pl-8 ml-8 pr-8 font-semibold pt-2 text-blue text-sm" type="button" value="Selection Done" placeholder=""></input>
          </div>
        </div>


        <div className="pt-4 grid grid-cols-6">
        <div className="flex flex-cols mt-4">
                    <img className=" mb-4 ml-4" src={img1} />
                    <p className="font-semibold ml-4 ">Bridal Shower</p>
        </div>
        <div className="flex flex-cols mt-4">
                    <img className=" mb-4  ml-4" src={img1} />
                    <p className="font-semibold ml-4 ">Bridal Shower</p>
        </div>
        <div className="flex flex-cols mt-4">
                    <img className=" mb-4  ml-4" src={img1} />
                    <p className="font-semibold ml-4 ">Bridal Shower</p>
        </div>
       
        </div>
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-40">

            <div>ggg</div>
              <div className="flex items-center">
                
               
                  

                  
                  <div className="ml-10 flex items-baseline space-x-16 ">
                  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Domains
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                  <p>  Tech stack</p>
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Products
                    </a>
  
                   
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    About Us
                    </a>
  
                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Careers
                    </a>

                    <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact Us
                    </a>

                    <button type="button" className="bg-white text-xs w-32 h-8 ">
                         Book a call with Us
                    </button>

                  </div>
                </div>
                </div>
             
                </div> */}
             </nav>
             {/* <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> */}


            </div>
    );
    
    }
     export default Header;