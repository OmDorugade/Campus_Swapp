import React from "react";
import illus from "../assets/img/illus.svg";
import av1 from "../assets/Avatar/av_1.svg";
import av2 from "../assets/Avatar/av_2.svg";
import av3 from "../assets/Avatar/av_3.svg";
import av4 from "../assets/Avatar/av_4.svg";

const Aboutus = () => {
  return (
    <div>
      <div>
        {/* Section - 1 */}
        <div className="w-full h-[40rem] mb-[10rem]">
          <div className="h-[10rem] pt-16 text-center  mx-auto text-3xl">
            <h1>We Design Build and ship world class digital products</h1>
          </div>
          <div>
            <div className="w-[35%] float-left h-[30rem] text-center">
              <ul className="pt-[3rem]">
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">0</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]  ">
                      Website & Apps launched
                    </h3>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">0</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      Awards & recognition
                    </h3>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="w-[30%] float-left h-[30rem] text-center">
              <img src={illus} alt="description-image" />
            </div>
            <div className="w-[35%] float-right h-[30rem] text-center">
              <ul className="pt-[3rem]">
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">100%</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      in-house & independent
                    </h3>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h1 className="text-[4rem] font-medium">Ind</h1>
                  </li>
                  <li>
                    <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                      working globally, proudly indian
                    </h3>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        {/* Section - 2 */}
        <div className="w-full h-full">
          {/* Cards - 1 */}
          <div className="flex flex-col sm:flex-row ">
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-3">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av1}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Kirtan Chaplot</div>
                  <p class="text-gray-700 text-base">
                     T.E Engineering Student , Aspiring Software Engineer
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #mern
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #website
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Kirtan Chaplot
              </h2>
              <p className="text-xl text-center mt-16">
              Hello there! I'm Kirtan Chaplot, a passionate computer engineering student currently enrolled at Universal College of Engineering. With a knack for problem-solving and a love for all things tech, I've found my niche in the world of computer engineering.
              </p>
            </div>
          </div>
          {/* Cards - 2 */}
          <div className="flex flex-col-reverse sm:flex-row ">
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Aditya Chaudhary
              </h2>
              <p className="text-xl text-center mt-16">
              Hello there! I'm Aditya Chaudhary, a passionate computer engineering student currently enrolled at Universal College of Engineering. With a knack for problem-solving and a love for all things tech, I've found my niche in the world of computer engineering.
              </p>
            </div>
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-[-3deg]">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av2}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Aditya Chaudhary</div>
                  <p class="text-gray-700 text-base">
                  T.E Engineering Student , Aspiring Software Engineer
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #editing
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #books
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tech
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Cards - 3 */}
          <div className="flex flex-col sm:flex-row ">
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-3">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av3}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Om Dorugade</div>
                  <p class="text-gray-700 text-base">
                  T.E Engineering Student , Aspiring Software Engineer
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #coding
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #c++
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #games
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Om Dorugade
              </h2>
              <p className="text-xl text-center mt-16">
              Hello there! I'm Om Dorugade, a passionate computer engineering student currently enrolled at Universal College of Engineering. With a knack for problem-solving and a love for all things tech, I've found my niche in the world of computer engineering.
              </p>
            </div>
          </div>
          {/* Cards - 4 */}
          <div className="flex flex-col-reverse sm:flex-row ">
            <div className=" w-[100%] sm:w-[50%] h-[30rem] mr-[7%] m-[auto]">
              <h2 className="text-4xl text-center pt-[15%] font-bold">
                Vishal Gupta
              </h2>
              <p className="text-xl text-center mt-16">
              Hello there! I'm Vishal Gupta, a passionate computer engineering student currently enrolled at Universal College of Engineering. With a knack for problem-solving and a love for all things tech, I've found my niche in the world of computer engineering.
              </p>
            </div>
            <div className=" w-[100%] sm:w-[25%] h-[30rem] ml-[7%] mr-[5%] m-[auto] k rotate-[-3deg]">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full bg-green-200"
                  src={av4}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-1 bg-green-200">
                  <div class="font-bold text-xl mb-2">Vishal Gupta</div>
                  <p class="text-gray-700 text-base">
                  T.E Engineering Student , Aspiring Software Engineer
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 bg-green-200">
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #app dev
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #java
                  </span>
                  <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #sports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section - 3 */}
        <div className="w-full h-[50rem] text-center pt-[5rem]">
          <img className="w-[40%] m-[auto]" src={illus} alt="grp-pic" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
