import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SelectRole from './pages/SelectRole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectRole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
