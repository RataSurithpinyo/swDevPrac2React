"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1
          className="text-4xl font-semibold"
          style={{ marginTop: "40px", marginBottom: "10px" }}
        >
          Vaccine Service Center
        </h1>
        <h3 className="text-xl">
          Find the right hospital. Make an appointment.
        </h3>
      </div>
    </div>
  );
}
