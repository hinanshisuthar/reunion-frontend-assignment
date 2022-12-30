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

  const locationOptions = [
    "Select an Option",
    "Toronto, Canada",
    "California, USA",
    "Paris, France",
    "Santorini, Greece",
  ];

  const priceOptions = [
    "Select an Option",
    "10k-20k",
    "20k-30k",
    "30k-40k",
    "40k-50k",
  ];

  const propertyTypeOptions = ["Select an Option", "Flat", "Bungalow", "Villa"];

  const filterHandler = () => {
    let filteredResult = [];
    if (selectededCity) {
      filteredResult = data.filter(
        (data) => data.location.city === selectededCity?.split(", ")[0]
      );
    }
    if (selectedPrice) {
      filteredResult = data.filter(
        (data) =>
          data.price <
            selectedPrice?.replaceAll("k", "").split("-")[1] + "000" &&
          data.price > selectedPrice?.replaceAll("k", "").split("-")[0] + "000"
      );
    }
    if (selectedPropertyType) {
      filteredResult = data.filter(
        (data) => data["property-type"] === selectedPropertyType
      );
    }
    if (moveInDate) {
      filteredResult = data.filter(
        (data) =>
          Object.values(data["move-in-date"]).reverse().join("-") <= moveInDate
      );
    }
    if (search) {
      if (search === "") setSearch("");
      filteredResult = data.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setData(filteredResult);
  };

  return (
    <div className="md:px-25 md:py-[3rem] lg:px-28 md:py-[3.5rem] px-16 py-[2rem] bg-gray-100 z-0 flex flex-col gap-4">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-4xl font-semibold">Search properties to rent</h1>
        <div className="flex items-center border-2 rounded-lg py-1 px-3 bg-white">
          <input
            type="text"
            placeholder="Search with SearchBar"
            className="text-gray-700 p-1 outline-none font-medium"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={filterHandler}
          />
          <MdKeyboardArrowDown
            size={20}
            className="text-violet-600 bg-violet-100 rounded-full"
          />
        </div>
      </div>
      <FilterBar
        setSelectededCity={setSelectededCity}
        setSelectedPrice={setSelectedPrice}
        setSelectedPropertyType={setSelectedPropertyType}
        setMoveInDate={setMoveInDate}
        filterHandler={filterHandler}
        locationOptions={locationOptions}
        priceOptions={priceOptions}
        propertyTypeOptions={propertyTypeOptions}
      />
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.length < 1 ? (
            <h1 className="text-2xl text-center pt-5 text-red-500">
              No filtered results. Try changing filters
            </h1>
          ) : (
            data.map((house) => <Card house={house} key={house.id} />)
          )}
        </ul>
      </section>
    </div>
  );
};
