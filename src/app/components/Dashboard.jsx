'use client'
import { useState } from "react"
import { useFWIPredict } from "../hooks/useFWIPredict";
import Fwi from "./Fwi";
import Weather from "./Weather";

export default function Dashboard() {
    const [city, setCity] = useState("bejaia")
    const { data, loading, error, refetch } = useFWIPredict(city)
    
    // This will now show the data correctly after it loads
    console.log('Dashboard data:', data);

    return (
        <>
          <div className="fwiContainer">
            <select name="city" value={city} onChange={(e)=> setCity(e.target.value)}>
               <option value="Algiers">Algiers</option>
               <option value="bejaia">Bejaia</option>
               <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
               <option value="Tizi Ouzou">Tizi Ouzou</option>
            </select>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <button onClick={refetch}>Refresh</button>

           
            {data && <Fwi fwiData={data.prediction} loading={loading}/>}
          </div>

          <div className="weatherContainer">
            {data && (
              <Weather 
                weatherData={{
                  temperature: data.Temperature,
                  humidity: data.RH,
                  windSpeed: data.Ws,
                  rain: data.Rain
                }} 
                loading={loading}
              />
            )}
          </div>
        </>
    )
}