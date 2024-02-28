import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const VenueFilters = () => {
  const [activeFilter,setActiveFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    Locality: '',
    VenueType: '',
    Space: '',
    RentalCost: '',
    Guests: '',
    RoomCount: '',
    Rating: ''
  });
  const handleFilterSelection =  (filterTitle, option) => {
    setSelectedFilters(prevFilters =>({ ...prevFilters, [filterTitle]: option }));    
  };
  console.log(selectedFilters);
  const filters = [
    {
      title: "Locality",
      options: ["Bengaluru", "Chennai", "Hyderabad", "Mumbai", "Pune"],
    },
    {
      title: "VenueType",
      options: ["Banquet Halls", "Lawns", "Hotels", "4 Star", "Pune"],
    },
    {
      title: "Space",
      options: ["Indoor", "Outdoor", "Poolside", "Terrace"],
    },
    {
      title: "RentalCost",
      options: ["< 25K", "25K - 50K", "50K - 1L", "1L - 2L", "> 2L"],
    },
    {
      title: "Guests",
      options: ["< 100", "100 - 250", "250 - 500", "500 - 1000", "> 1000"],
    },    
    {
      title: "RoomCount",
      options: ["< 30", "30 - 60", "60 - 100", "> 100"],
    },
    {
      title: "Rating",
      options: ["All", "4.5+", "4+", "3.5+","< 3.5"],
    },
  ];
  return (
    <div className="flex items-center justify-start h-10 w-full mt-3 gap-3 pl-5">
      {filters.map((filter,index) => (
        <div key={index} className="relative">
          <button className="flex items-center justify-evenly border border-black rounded-full p-1 px-2" onMouseEnter={() => setActiveFilter(index)} onMouseLeave={() => setActiveFilter(null)}>
            {filter.title}
            <IoMdArrowDropdown />
          </button>
          <div className={`${activeFilter === index ? 'flex' : 'hidden'} absolute h-auto w-auto bg-slate-500 border rounded-md hover:flex flex-col gap-1`}>
            {filter.options.map((option,optionIndex) => (
              <span key={optionIndex} onClick={() => handleFilterSelection(filter.title, option)}>{option}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VenueFilters;
