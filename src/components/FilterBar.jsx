import { BiCalendar } from "react-icons/bi";
import { Dropdown } from "./Dropdown";

export const FilterBar = ({
  setSelectededCity,
  setSelectedPrice,
  setSelectedPropertyType,
  setMoveInDate,
  filterHandler,
  locationOptions,
  priceOptions,
  propertyTypeOptions,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-6 gap-3 bg-white my-5 rounded-lg my-5">
      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">
          Location
        </span>
        <select
          className="w-full outlint-none font-medium"
          name="location"
          id="location"
          onChange={(e) => setSelectededCity(e.target.value)}
        >
          <Dropdown options={locationOptions} title="location" />
        </select>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">When</span>
        <div className="flex items-center">
          <input
            className="font-medium mr-2 focus:outline-none cursor-pointer w-full placeholder-black"
            type="text"
            placeholder="Select Move-in date"
            onChange={(e) => {
              setMoveInDate(
                e.target.value.slice(0, 7).split("-").reverse().join("-")
              );
            }}
            onFocus={(e) => {
              e.target.type = "date";
              e.target.min = new Date().toISOString().substring(0, 10);
              e.target.readOnly = false;
              setMoveInDate(e.target.value);
            }}
          />
          <span>
            <BiCalendar />
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">Price</span>
        <select
          className="w-full outlint-none font-medium"
          name="price"
          id="price"
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <Dropdown options={priceOptions} title="Price" />
        </select>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">
          Property Type
        </span>
        <select
          className="w-full outlint-none font-medium"
          name="propertyType"
          id="propertytype"
          onChange={(e) => setSelectedPropertyType(e.target.value)}
        >
          <Dropdown options={propertyTypeOptions} title="Property Type" />
        </select>
      </div>

      <button
        className="py-4 bg-indigo-500 text-white rounded-lg w-32 m-auto"
        onClick={filterHandler}
      >
        Search
      </button>
    </div>
  );
};
