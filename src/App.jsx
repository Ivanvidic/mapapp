import { Navbar } from "./components/Navbar";
import { Map } from "./pages/Map";
import { DataTable } from "./pages/Table";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://plovput.li-st.net/getObjekti"
        );
        setData(response.features);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Map data={data} />} />
        <Route path="/table" element={<DataTable data={data} />} />
      </Routes>
    </>
  );
}

export default App;
