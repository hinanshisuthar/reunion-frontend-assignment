export const FilterBar = ({
  setSelectededCity,
  setSelectedPriceRange,
  setSelectedPropertyType,
  setMoveInDate,
  filterHandler,
}) => {
  return (
    <div className="grid grid-cols-5 items-center p-6 gap-3 bg-white my-5 rounded-lg">
      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">
          Location
        </span>
        <select
          className="outlint-none font-medium"
          name="location"
          id="location"
          onChange={(e) => setSelectededCity(e.target.value)}
        >
          <option className="p-sm" value="none" selected disabled hidden>
            Select an Option
          </option>
          <option className="p-sm" value="Pune">Pune, Maharastra</option>
          <option className="p-sm" value="Patna">Patna, Bihar</option>
          <option className="p-sm" value="Mumbai">Mumbai, Maharastra</option>
          <option className="p-sm" value="Bangaluru">Bangaluru, Karnataka</option>
        </select>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">When</span>
        <select
          className="outlint-none font-medium"
          name="date"
          id="date"
          onChange={(e) => setMoveInDate(e.target.value)}
        >
          <option className="p-sm" value="none" selected disabled hidden>
            Select move-in date
          </option>
          <option className="p-sm" value="10-2022">Oct,2022</option>
          <option className="p-sm" value="11-2022">Nov,2022</option>
          <option className="p-sm" value="12-2022">Dec,2022</option>
          <option className="p-sm" value="1-2023">Jan, 2023</option>
          <option className="p-sm" value="2-2023">Feb, 2023</option>
          <option className="p-sm" value="3-2023">March,2023</option>
          <option className="p-sm" value="4-2023">April, 2023</option>
          <option className="p-sm" value="5-2023">May,2023</option>
          <option className="p-sm" value="6-2023">June,2023</option>
          <option className="p-sm" value="7-2023">July,2023</option>
          <option className="p-sm" value="8-2023">August,2023</option>
        </select>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">Price</span>
        <select
          className="outlint-none font-medium"
          name="price"
          id="price"
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option className="p-sm" value="none" selected disabled hidden>
            Select Price
          </option>
          <option className="p-sm" value="10000-20000">10k-20k</option>
          <option className="p-sm" value="20000-30000">20k-30k</option>
          <option className="p-sm" value="30000-40000">30k-40k</option>
          <option className="p-sm" value="40000-50000">40k-50k</option>
        </select>
      </div>

      <div className="flex flex-col items-start border-r">
        <span className="text-gray-400 font-medium flex flex-col">
          Property Type
        </span>
        <select
          className="outlint-none font-medium"
          name="propertyType"
          id="propertytype"
          onChange={(e) => setSelectedPropertyType(e.target.value)}
        >
          <option className="p-sm" value="none" selected disabled>
            Select Property Type
          </option>
          <option className="p-sm" value="Flat">Flat</option>
          <option className="p-sm" value="Banglow">Bangloww</option>
          <option className="p-sm" value="Villa">Villa</option>
        </select>
      </div>

      <button
        className="py-3 bg-indigo-500 text-white rounded-lg w-36 m-auto"
        onClick={filterHandler}
      >
        Search
      </button>
    </div>
  );
};
