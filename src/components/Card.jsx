import { HiSparkles } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBath, BiBed } from "react-icons/bi";
import { RxDimensions } from "react-icons/rx";

export const Card = ({ house }) => {
  return (
    <li className="w-64 rounded-lg relative m-1 bg-white w-[20rem]">
      <div className="relative">
        <img
          src={house.image}
          alt="house"
          className="h-40 w-full z-50 rounded-t-lg object-cover"
        />

        {house.popular ? (
          <>
            <div className="absolute bottom-0 rounded p-1 bg-indigo-500 flex items-center text-gray-100">
              <HiSparkles size={18} />
              <span className="pl-1 uppercase text-xs">Popular</span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="py-2 px-4">
        <div className="flex justify-between items-center pb-2">
          <div className="text-xl font-semibold flex items-center text-indigo-600">
            $ {house.price}
            <span className="month text-xs text-gray-400 font-medium p-1">
              /month
            </span>
          </div>
          <div className="w-8 h-8 cursor-pointer flex justify-center items-center text-indigo-500 border-2 rounded-full">
            <AiOutlineHeart className="text-indigo-500" size={18} />
          </div>
        </div>
        <div className="text-xl font-semibold pb-2">{house.name}</div>
        <div className="address text-sm text-gray-500 font-medium">
          {house.location.address}, {house.location.city},{" "}
          {house.location.state}
        </div>
        <div className="flex justify-between items-center pb-2 text-xs mt-6 text-gray-500 font-medium">
          <div className="flex justify-center items-center">
            <BiBed />
            <span className="ml-1">{house.deta.bed} Bed</span>
          </div>
          <div className="flex justify-center items-center">
            <BiBath />
            <span className="ml-1">{house.deta.bathroom} bathroom</span>
          </div>
          <div className="flex justify-center items-center">
            <RxDimensions />
            <span className="ml-1">{house.deta.dimension} dimension</span>
          </div>
        </div>
      </div>
    </li>
  );
};
