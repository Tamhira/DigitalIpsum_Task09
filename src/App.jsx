import logo from "./assets/logo.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import { FaRegBell, FaMoon, FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#f6f6f6] p-6">
        {/* Navigation Bar */}
        <div className=" bg-white flex justify-between py-3 px-6 rounded-lg mb-4">
          <div>
            <img src={logo} alt="" style={{ width: "50px" }} />
          </div>

          <div className="flex gap-4">
            <div>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-200 px-4 py-3 rounded-full"
                placeholder="search"
                style={{ width: "500px" }}
              />
            </div>

            <div>
              <div className="flex bg-gray-200  p-2 rounded-full">
                <div className="bg-white rounded-full px-4 py-1 flex gap-2">
                  <div className="pt-1">
                    <IoSunnySharp />
                  </div>{" "}
                  <div>Light</div>
                </div>
                <div className="rounded-full px-4 py-1 flex gap-2"><div className="pt-1">
                    <FaMoon />
                  </div>{" "}
                  <div>Dark</div></div>
              </div>
            </div>

            <div>
              <div className="flex bg-gray-200 gap-2 p-3 rounded-full text-xl">
                <FaRegBell />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-right">
              <div className="font-bold text-lg">Mas Poci</div>
              <div>Trial</div>
            </div>
            <div className="text-5xl">
              <FaUserCircle />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between">
          {/* Sidebar */}
          <div className="bg-white px-6 pt-6 rounded-lg flex flex-col justify-between">
            <div className="pb-6">
              <div className="pb-6 flex gap-6">
                <div className="pt-1">
                  <IoHomeOutline />
                </div>
                <div>Dashboard</div>
              </div>
              <div className="pb-6 flex gap-6">
                <div className="pt-1">
                  <BsShop />
                </div>
                <div>Market</div>
              </div>
              <div className="pb-6 flex gap-6">
                <div className="pt-1">
                  <HiOutlineSpeakerphone />
                </div>
                <div>Active Bid</div>
              </div>
              <div className="pb-6 flex gap-6">
                <div className="pt-1">
                  <FaRegUser />
                </div>
                <div>Portfolio</div>
              </div>
              <div className="pb-6 flex gap-6">
                <div className="pt-1">
                  <FaRegHeart />
                </div>
                <div>Favourite</div>
              </div>
            </div>
            <div className="bg-[#f6f6f6] text-xl px-6 py-2 rounded-lg mb-6">
              <div className="font-semibold">All Balance</div>
              <div className="text-4xl text-[#593EF8] font-bold py-4">
                $96800
              </div>
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="bg-[#593EF8] my-4 rounded-full px-2 text-white py-2 text-center">
                Top Up Balance
              </div>
            </div>
          </div>

          <div>
            {/* Upper Portion */}
            <div className="flex gap-4">
              <div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="font-semibold text-2xl pb-2">Expenditure</div>
                  <div className="flex gap-3">
                    <div>
                      <div className="font-semibold text-2xl">-0,2%</div>
                      <div className="text-md pt-2">Down 10%</div>
                    </div>
                    <div>
                      <img src={img2} alt="" style={{ width: "200px" }} />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="font-semibold text-2xl pb-2">Income</div>
                  <div className="flex gap-3">
                    <div>
                      <div className="font-semibold text-2xl">+5%</div>
                      <div className="text-md pt-2">Up 17%</div>
                    </div>
                    <div>
                      <img src={img3} alt="" style={{ width: "200px" }} />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-2xl pb-2">Saving</div>
                  <div className="flex gap-3">
                    <div>
                      <div className="font-semibold text-2xl">-2,7%</div>
                      <div className="text-md pt-2">Down 20%</div>
                    </div>
                    <div>
                      <img src={img4} alt="" style={{ width: "200px" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-lg p-4 mb-4"
                style={{ width: "300px" }}
              >
                <div className="flex justify-between">
                  <div className="pt-1 font-semibold text-2xl pb-2">
                    My card
                  </div>
                  <div className="font-semibold text-2xl pb-2">...</div>
                </div>
                <div className="text-4xl text-[#593EF8] font-bold py-2">
                  $96800
                </div>
                <div className="bg-blue-400 text-white p-4 rounded-2xl mb-4">
                  <div>My Balance</div>
                  <div className="text-3xl font-semibold py-2">$568,00</div>
                  <div className="text-xl font-semibold pb-1">...3490</div>
                  <div className="">32/12</div>
                </div>
                <div className="bg-blue-400 text-white p-4 rounded-2xl">
                  <div>My Balance</div>
                  <div className="text-3xl font-semibold py-2">$568,00</div>
                  <div className="text-xl font-semibold pb-1">...3490</div>
                  <div className="">32/12</div>
                </div>
              </div>

              <div
                className="bg-white rounded-lg p-4 mb-4"
                style={{ width: "475px" }}
              >
                <div className="flex justify-between">
                  <div className="flex gap-8">
                    <div className="text-2xl font-semibold">Income</div>
                    <div className="text-2xl font-semibold text-gray-500">
                      Communication
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">...</div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#593EF8] my-4 rounded-full px-6 text-white py-2 text-center">
                    All Card
                  </div>
                  <div className="border border-gray-500 my-4 rounded-full px-6 text-gray-500 py-2 text-center">
                    ****3490
                  </div>
                  <div className="border border-gray-500 my-4 rounded-full px-6 text-gray-500 py-2 text-center">
                    ****3490
                  </div>
                </div>
                <div>
                  <img
                    src={img5}
                    alt=""
                    style={{ width: "475px", height: "350px" }}
                  />
                </div>
              </div>
            </div>

            {/* Lower Portion */}
            <div className="flex gap-4">
              <div className="bg-white px-6 pt-6 rounded-lg">
                <div className="flex justify-between">
                  <div className="pt-1 font-semibold text-2xl pb-2">
                    Course Statistics
                  </div>
                  <div className="font-semibold text-2xl pb-2">...</div>
                </div>
                <div className="flex gap-14">
                  <div>
                    <img src={img6} alt="" />
                  </div>
                  <div className="pt-6 pr-4">
                    <div className="pb-4">Spending Money</div>
                    <div className="pb-4">Jajan Ofc</div>
                    <div className="pb-4">Self Reward</div>
                    <div className="pb-4">Wedding Money</div>
                  </div>
                </div>
              </div>
              <div className="bg-white px-6 pt-6 rounded-lg">
                <div className="pt-1 font-semibold text-2xl pb-2">
                  Quick transfer
                </div>
                <div className="flex gap-4 py-4">
                  <div className="text-5xl">
                    <FaUserCircle />
                  </div>
                  <div className="text-5xl">
                    <FaUserCircle />
                  </div>
                  <div className="text-5xl">
                    <FaUserCircle />
                  </div>
                  <div className="text-5xl">
                    <FaUserCircle />
                  </div>
                  <div className="text-5xl">
                    <FaUserCircle />
                  </div>
                </div>
                <div className="text-xl font-semibold">Amount</div>
                <div className="bg-gray-200 rounded-full flex justify-between p-1 mt-4">
                  <div className="ml-4 pt-2">$323.00</div>
                  <div className="bg-[#593EF8] rounded-full px-4 text-white py-2 text-center">
                    Transfer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
