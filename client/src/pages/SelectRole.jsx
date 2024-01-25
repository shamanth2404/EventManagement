import React, { useState } from "react";
import {Link} from 'react-router-dom';

const roles = ["Vendor", "EventOrganiser", "Guest"];

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState("");
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-2 absolute top-[40%] left-[45%]">
        <h2>Who are you?</h2>
        {roles.map((role, index) => (
          <Link to={`/${role}`}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectRole;
