import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectRole from "./pages/SelectRole";
import VendorHome from "./pages/vendor/VendorHome";
import OrgHome from "./pages/organizer/OrgHome";
import Venues from "./pages/organizer/Venues";
import Navbar from "./components/Navbar";
import Vendors from "./pages/organizer/Vendors";
import Ideas from "./pages/organizer/Ideas";
import { React, useContext, useState } from "react";

// const userContext = React.createContext({ user: null, login: () => {} });

function App() {
  // const [user, setUser] = useState("");
  // const login = () => {
  //   setUser(this);
  // };
  return (
    // <userContext.Provider value={{ user, login }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectRole />} />
          <Route path="/Vendor" element={<VendorHome />} />
          <Route path="/EventOrganiser" element={<OrgHome />} />
          <Route path="/Venues" element={<Venues />} />
          <Route path="/Vendors" element={<Vendors />} />
          <Route path="/Ideas" element={<Ideas />} />
        </Routes>
      </BrowserRouter>
    // </userContext.Provider>
  );
}

export default App;
