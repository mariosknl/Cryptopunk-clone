import { useState, useEffect } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import axios from "axios";
import Punklist from "./components/Punklist";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xd6BB0620F4eb8dabd6e3ffD6EF5990B0F213AC03"
      );
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  console.log(punkListData);

  return (
    <div className="app">
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
