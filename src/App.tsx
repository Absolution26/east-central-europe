import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { InputRangeSlider } from "./components/InputRangeSlider/InputRangeSlider";
import { MapFragment } from "./components/MapFragment/MapFragment";
import { Map } from "./types/Map";
import MapsJson from './api/maps.json'

function App() {
  const [year, setYear] = useState("");
  const [maps, setMaps] = useState<Map[]>([]);

  useEffect(() => {
    setMaps(MapsJson);

    // fetch("/api/maps.json")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }

    //     return response.json();
    //   })
    //   .then((res) => setMaps(res))
    //   .catch((error) => console.error("Помилка завантаження даних:", error));
  }, []);

  const rounding = (num: number) => {
    return num - (num % 5);
  } 

  const findedMapByYear = maps.find((map) => map.year === rounding(+year));

  return (
    <div className="App">
      <Header year={year} />
      <main className="main">
        <InputRangeSlider year={year} changeYear={setYear} />

        {findedMapByYear && (
          <div className="container">
            <div className="map-wrap">
              <MapFragment map={findedMapByYear.central} />
              <MapFragment map={findedMapByYear.east} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
