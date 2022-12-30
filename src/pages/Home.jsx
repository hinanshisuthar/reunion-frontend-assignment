import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Card } from "../components/Card";
import { FilterBar } from "../components/FilterBar";
import rentData from "../data/data.json";

export const Home = () => {
  const [data, setData] = useState(rentData.estate);

  const [search, setSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [moveInDate, setMoveInDate] = useState(null);
  const [selectededCity, setSelectededCity] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const filterHandler = () => {
    let filteredResult = data;
    if (selectededCity) {
      filteredResult = filteredResult.filter((data) => data.location.city === selectededCity);
    }
    if (selectedPrice) {
      filteredResult = filteredResult.filter(
        (data) =>
          data.price < selectedPrice.split("-")[1] &&
          data.price > selectedPrice.split("-")[0]
      );
    }
    if (selectedPropertyType) {
      filteredResult = filteredResult.filter(
        (data) => data["property-type"] === selectedPropertyType
      );
    }
    if (moveInDate) {
      filteredResult = filteredResult.filter(
        (data) =>
          Object.values(data["move-in-date"]).reverse().join("-") <= moveInDate
      );
    }
    if (search) {
      if (search === "") setSearch("");
      filteredResult = filteredResult.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setData(filteredResult);
  };

  return (
    <div className="px-28 py-[3.5rem] bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Search properties to rent</h1>
        <div className="flex items-center border-2 rounded p-1 bg-white">
          <input
            type="text"
            placeholder="Search with SearchBar"
            className="text-gray-600 p-1 outline-none font-medium"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={filterHandler}
          />
          <MdKeyboardArrowDown
            size={20}
            className="text-indigo-600 bg-indigo-100 rounded-full"
          />
        </div>
      </div>
      <FilterBar
        setSelectededCity={setSelectededCity}
        setSelectedPrice={setSelectedPrice}
        setSelectedPropertyType={setSelectedPropertyType}
        setMoveInDate={setMoveInDate}
        filterHandler={filterHandler}
      />
      <section>
        <ul className="grid grid-cols-3 gap-5">
          {data.length < 1 ? (
            <h1 className="text-2xl text-center pt-5 text-red-500">No filteredResults. Try changing filters</h1>
          ) : (
            data.map((house) => <Card house={house} key={house.id} />)
          )}
        </ul>
      </section>
    </div>
  );
};
