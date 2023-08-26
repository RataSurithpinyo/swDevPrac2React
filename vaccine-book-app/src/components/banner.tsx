import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/cover.jpg"}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-semibold" style={{ marginTop: "40px", marginBottom: "10px" }}>Vaccine Service Center</h1>
        <h3 className="text-xl">Find the right hospital. Make an appointment.</h3>
      </div>
    </div>
  );
}
