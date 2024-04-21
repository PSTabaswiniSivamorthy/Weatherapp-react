import { useState } from "react";
import axios from "axios";

function App() {
  const [degree, setdegree] = useState("0");
  const [city, setcityname] = useState("Coimbatore");
  const [weather, setweather] = useState("Sunny");
  const [val, seteval] = useState("");

  function handlechange(event) {
    seteval(event.target.value);
  }
  function fetchweather() {
    var weatherdata = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=86b118ca34b686f62d6ae8a55e2bb2fd`
    );
    weatherdata.then(function (response) {
      setcityname(response.data.name);
      setdegree(response.data.main.temp);
      setweather(response.data.weather[0].main);
    });
    weatherdata.catch(function (error) {
      console.log("Couldn't fetch data");
    });
  }
  return (
    <div className="flex flex-row justify-center h-[100vh] items-center">
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
        }}
        className="p-2 rounded-md shadow"
      >
        <h1 className="font-medium">Hey! ⛅</h1>
        <p className="text-xs">Do you want to know the weather report</p>
        <input
          onChange={handlechange}
          className="rounded-md h-6 text text-sm p-1 mt-2 outline-none"
          placeholder="City Name"
        ></input>
        <br />
        <button
          onClick={fetchweather}
          className="bg-black text-white rounded-md p-1 mt-2 text-xs w-30 "
        >
          Get report ⚡
        </button>
        <p>
          Degree: {degree} | City: {city} | Weather: {weather}
        </p>
      </div>
    </div>
  );
}

export default App;
