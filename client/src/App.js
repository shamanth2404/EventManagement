import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SelectRole from './pages/SelectRole';
import VendorHome from './pages/vendor/VendorHome';
import OrgHome from './pages/organizer/OrgHome';
import Venues from './pages/organizer/Venues';
import Navbar from './components/Navbar';
import Vendors from './pages/organizer/Vendors';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path='/' element={<SelectRole />} />
        <Route path='/Vendor' element={<VendorHome />} />
        <Route path='/EventOrganiser' element={<OrgHome />} />
        <Route path='/Venues' element={<Venues />} />   
        <Route path='/Vendors' element={<Vendors />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
