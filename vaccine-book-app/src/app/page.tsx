import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "30px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" />
        <Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg" />
        <Card
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
