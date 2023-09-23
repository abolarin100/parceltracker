import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import Payment from "./pages/Payment"; 
import ParcelDetails from './pages/ParcelDetails'
import TrackParcel from './pages/TrackParcel'
import Navbar from './pages/Navbar';


function App() {
  return (
    <>

   
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/create" element={<Create />} />
        <Route path="/parcel-details" element={<ParcelDetails />} />
        <Route path="/track-parcel" element={<TrackParcel />} />
        
      </Routes>
    </Router>

      
    </>
  );
}

export default App;
