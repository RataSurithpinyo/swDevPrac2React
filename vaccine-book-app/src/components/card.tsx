import styles from "./card.module.css";
import Image from "next/image";

export default function Card({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white">
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="card cover"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div>
        <h3 className="ml-2 mt-2 w-full h-[30%] p-[5px] font-normal underline decoration-sky-500">
          {hospitalName}
        </h3>
      </div>
    </div>
  );
}
