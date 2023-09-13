import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import CardPanel from "@/components/cardPanel";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CardPanel/>
    </main>
  );
}
