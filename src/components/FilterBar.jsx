import { BiCalendar } from "react-icons/bi";

export const FilterBar = ({
  setSelectededCity,
  setSelectedPriceRange,
  setSelectedPropertyType,
  setMoveInDate,
  filterHandler,
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
          <option className="p-sm" value="none" selected disabled hidden>
            Select an Option
          </option>
          <option className="p-sm" value="Pune">
            Toronta, Canada
          </option>
          <option className="p-sm" value="Patna">
            California, USA
          </option>
          <option className="p-sm" value="Mumbai">
            Paris, France
          </option>
          <option className="p-sm" value="Bangaluru">
            Santorini, Greece
          </option>
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
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option className="p-sm" value="none" selected disabled hidden>
            Select Price
          </option>
          <option className="p-sm" value="10000-20000">
            10k-20k
          </option>
          <option className="p-sm" value="20000-30000">
            20k-30k
          </option>
          <option className="p-sm" value="30000-40000">
            30k-40k
          </option>
          <option className="p-sm" value="40000-50000">
            40k-50k
          </option>
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
          <option className="p-sm" value="none" selected disabled>
            Select Property Type
          </option>
          <option className="p-sm" value="Flat">
            Flat
          </option>
          <option className="p-sm" value="Banglow">
            Bangloww
          </option>
          <option className="p-sm" value="Villa">
            Villa
          </option>
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
