import { 
  Thermometer, 
  Eye, 
  Droplets, 
  Wind, 
  Gauge, 
  Sun, 
  CloudRain, 
  Navigation,
  Zap
} from "lucide-react";
import Image from "next/image";
import styles from '@/app/modules/weather.module.css'

export default function Weather({weatherData, loading, fwiData}) {
    
    const weatherCards = [
    {
      name: "Temperature",
      value: weatherData?.temp_c,
      unit: "°C",
      icon: Thermometer
    },
    {
      name: "Feels Like",
      value: weatherData?.feelslike_c,
      unit: "°C",
      icon: Thermometer
    },
    {
      name: "Humidity",
      value: weatherData?.humidity,
      unit: "%",
      icon: Droplets
    },
    {
      name: "Wind Speed",
      value: weatherData?.wind_kph,
      unit: "km/h",
      icon: Wind
    },
    {
      name: "Wind Gust",
      value: weatherData?.gust_kph,
      unit: "km/h",
      icon: Zap
    },
    {
      name: "Visibility",
      value: weatherData?.vis_km,
      unit: "km",
      icon: Eye
    },
    {
      name: "Pressure",
      value: weatherData?.pressure_mb,
      unit: "mb",
      icon: Gauge
    },
    {
      name: "UV Index",
      value: weatherData?.uv,
      unit: "",
      icon: Sun
    },
    {
      name: "Precipitation",
      value: weatherData?.precip_mm,
      unit: "mm",
      icon: CloudRain
    }
  ];


  const color = fwiData <= 4.2
  ? styles.green
  : fwiData <= 11.4
    ? styles.yellow
    : fwiData <= 17.9
      ? styles.orange
      : styles.red;


  return (
    <div className={styles.weatherContainer}>
      <div className={styles.logoContainer}>
        <Image alt="logo" src={'/logo.png'} height={142} width={468} />
      </div>
      <div className={styles.main}>
        <div className={styles.text}>
          <p>TODAY</p>
          <p>TOMORROW</p>
        </div>
        <div className={styles.cards}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            weatherCards.map((card, index) => (
              <div className={`${styles.card} ${color}`} key={index}>
                <div className={styles.icon}>
                  <card.icon size={35} />
                </div>
                <div className={styles.info}>
                  <h3>{card.name}</h3>
                  <p>{card.value} {card.unit}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <p className={styles.note}>All data from <span>'Weather-api'</span></p>
    </div>
  );
}
