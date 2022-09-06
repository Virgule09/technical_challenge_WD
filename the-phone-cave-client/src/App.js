import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  const [phones, setPhones] = useState(null);

  const getPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/phones`)
      .then((response) => {
        console.log(response)
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage phones={phones} />} />
      </Routes>
    </div>
  );
}

export default App;
