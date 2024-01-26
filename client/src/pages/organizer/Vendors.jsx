import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FaAngleDown } from "react-icons/fa6";

const Vendors = () => {
  const categories = [
    {
      title: "Venues",
      subCategories: ["Banquet Halls", "Lawns", "Resorts", "Party Halls"],
      bgColor: "bg-slate-500",
      imageUrl: "Venue",
    },
    {
      title: "Photographers",
      subCategories: ["Photographers"],
      bgColor: "bg-slate-500",
      imageUrl: "Photographer",
    },
    {
      title: "Venues",
      subCategories: ["Banquet Halls", "Lawns", "Resorts", "Party Halls"],
      bgColor: "bg-slate-500",
      imageUrl: "",
    },
    {
      title: "Venues",
      subCategories: ["Banquet Halls", "Lawns", "Resorts", "Party Halls"],
      bgColor: "bg-slate-500",
      imageUrl: "",
    },
    {
      title: "Venues",
      subCategories: ["Banquet Halls", "Lawns", "Resorts", "Party Halls"],
      bgColor: "bg-slate-500",
      imageUrl: "",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("");
  return (
    <div>
      <Navbar role="Organiser" />
      <h2 className="mt-5 mx-5">Wedding Categories</h2>
      <div className="grid grid-cols-2 gap-4 mx-5 mt-5">
        {categories.map((category) => (
          <div>
            <div
              className={`${category.bgColor} flex items-center justify-between h-[120px]`}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.title ? "" : category.title
                )
              }
            >
              <div>
                <h1 className="flex items-center gap-1">
                  {category.title}
                  <FaAngleDown />
                </h1>
                {category.subCategories.map((sub) => (
                  <span>{sub},</span>
                ))}
              </div>
              <div>Image</div>
            </div>
            <div
              className={`${
                activeCategory === category.title
                  ? "grid grid-cols-2"
                  : "hidden"
              }  gap-2 pt-2`}
            >
              <span
                className={`${
                  category.subCategories.length === 1 ? "hidden" : "block"
                }`}
              >
                View All {category.title}
              </span>
              {category.subCategories.map((sub) => (
                <span>{sub}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
