import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/cardcover.jpg"}
          alt="card cover"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div style={{ color: "black" }} className={styles.cardtext}>
        <h3 style={{ marginBottom: "5px", color: "#4477CE" }}>
          <a href="https://en.wikipedia.org/wiki/Vaccination" target="_blank">
            Vaccination
          </a>
        </h3>
        <h6>
          Vaccines are a way of artificially activating the immune system to
          protect against infectious disease.
        </h6>
      </div>
    </div>
  );
}
