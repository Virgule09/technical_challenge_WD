import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  const [phones, setPhones] = useState(null);
  const [phone, setPhoneDetails] = useState(null);
  const phoneId = useParams();

  const getPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getPhoneDetails = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/phones/${phoneId}`)
      .then((response) => {
        setPhoneDetails(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhones();
    getPhoneDetails();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage phones={phones} phone={phone} />} />
      </Routes>
    </div>
  );
}

export default App;
