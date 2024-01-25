import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SelectRole from './pages/SelectRole';
import VendorHome from './pages/vendor/VendorHome';
import OrgHome from './pages/organizer/OrgHome';
import Venues from './pages/organizer/Venues';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SelectRole />} />
        <Route path='/Vendor' element={<VendorHome />} />
        <Route path='/EventOrganiser' element={<OrgHome />} />
        <Route path='/EventOrganiser/Venues' element={<Venues />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
