import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { InputRangeSlider } from "./components/InputRangeSlider/InputRangeSlider";
import { MapFragment } from "./components/MapFragment/MapFragment";
import { Map } from "./types/Map";
import MapsJson from './api/maps.json'
import { Kings } from "./components/Kings/Kings";
import { Events } from "./components/Events/Events";

function App() {
  const [year, setYear] = useState("");
  const [maps, setMaps] = useState<Map[]>([]);

  useEffect(() => {
    setMaps(MapsJson);
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
            <section id="territories" className="section map-wrap">
              <MapFragment map={findedMapByYear.central} />
              <MapFragment map={findedMapByYear.east} />
            </section>

            <Kings kings={findedMapByYear.kings} />
            <Events dates={findedMapByYear.dates} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
