import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const VenueFilters = () => {
  const filters = [
    {
      title: "Locality",
      options: ["Bengaluru", "Chennai", "Hyderabad", "Mumbai", "Pune"],
    },
    {
      title: "Venue Type",
      options: ["Banquet Halls", "Lawns", "Hotels", "4 Star", "Pune"],
    },
  ];
  return (
    <div className="flex items-center justify-start h-10 w-full mt-3 gap-3 pl-5">
      {filters.map((filter) => (
        <button className="flex items-center justify-evenly border border-black rounded-full p-1 px-2">
          {filter}
          <IoMdArrowDropdown />
        </button>
      ))}
    </div>
  );
};

export default VenueFilters;
