'use client'
import { useState } from "react"
import { useFWIPredict } from "../hooks/useFWIPredict";
import Fwi from "./Fwi";
import Weather from "./Weather";
import styles from '@/app/modules/dashboard.module.css'
import Image from "next/image";

export default function Dashboard() {
    const [city, setCity] = useState("bejaia")
    const { data, loading, error, refetch } = useFWIPredict(city)

    console.log('Dashboard component rendered with data:', data);
    
    const weatherData = data?.raw_data.current

    return (

      <>

         <div className={styles.mobileHeader}>
          <Image alt="logo" src={'/logo.png'} height={142} width={468} />
           <select name="city" value={city} onChange={(e)=> setCity(e.target.value)}>
               <option value="Algiers">Algiers</option>
               <option value="bejaia">Bejaia</option>
               <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
               <option value="Tizi Ouzou">Tizi Ouzou</option>
                <option value="skikda">Skikda</option>
               <option value="el tarf">El Tarf</option>
               <option value="jijel">Jijel</option>
            </select>
         </div>
      
        <div className={styles.dashboardContainer}>

          <div className={styles.fwiContainer}>
            <select name="city" value={city} onChange={(e)=> setCity(e.target.value)}>
               <option value="Algiers">Algiers</option>
               <option value="bejaia">Bejaia</option>
               <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
               <option value="Tizi Ouzou">Tizi Ouzou</option>
               <option value="skikda">Skikda</option>
               <option value="el tarf">El Tarf</option>
               <option value="jijel">Jijel</option>
            </select>

           
           <Fwi fwiData={data?.prediction} loading={loading} city={city}/>

            <Image alt="logo" src={'/logo.png'} height={142} width={468} />
          </div>

          <div className={styles.weatherContainer}>
              <Weather 
                weatherData={weatherData} 
                loading={loading}
                fwiData={data?.prediction}
              />
          </div>
        </div>

        </>
    )
}
