import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ role }) => {
  const OrgItems = ["MyWedding","Venues", "Vendors", "Ideas", "E-Invites"];
  const VendorItems = ["Bookings", "Vendors", "AddNewVendor"];
  return (
    <div className="flex items-center justify-between h-10 w-full px-5 mt-3">
      <div className="logo">Logo</div>
      <div className="nav-items w-[60%] flex items-center justify-evenly">
        {role === "Organiser"
          ? OrgItems.map((item) => <Link to={`/${item}`}>{item}</Link>)
          : VendorItems.map((item) => <Link to={`/${item}`}>{item}</Link>)}
        <CiSearch />
        <Link to="/profile"><CgProfile /></Link>
      </div>
      
    </div>
  );
};

export default Navbar;
