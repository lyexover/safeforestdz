import Image from "next/image";
import styles from "../modules/fwi.module.css";
import { Loader2 } from "lucide-react";

export default function Fwi({fwiData, loading, city}) {

  const category = fwiData <= 4.2
    ? "Low"
    : fwiData <= 11.4
      ? "Moderate"
      : fwiData <= 17.9
        ? "High"
        : "Extreme";

  const date = new Date().toISOString()
  const day = date.split('T')[0]
  const time = date.split('T')[1].split('.')[0]

  // Show loading state
  if (loading) {
    return (
      <div className={styles.fwiContainer}>
        <div className={styles.loadingState}>
          <Loader2 className={styles.spinner} />
          <p className={styles.loadingText}>Loading fire weather data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.fwiContainer}>
      <div className={styles.mainInfo}>
        <Image src={`/${category}.png`} width={110} height={164} alt="indicator" />
        <div className={styles.text}>
          <p>{fwiData?.toFixed(2)}</p>
          <p>{category} Danger</p>
        </div>
      </div>

      <div className={styles.secondaryInfo}>
        <span>{day}</span>
        <span>{time}</span>
        <p>{city}</p>
      </div>
    </div>
  )
}