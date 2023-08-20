import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: "30px" }}>
        <Card />
      </div>
    </main>
  );
}
