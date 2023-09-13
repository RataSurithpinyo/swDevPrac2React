"use client";
import React, { useReducer } from "react";
import Card from "./card";

export default function CardPanel() {
  const cardReducer = (
    hospitalList: Map<string, number>,
    action: { type: string; hospitalName: string; rating?: number }
  ) => {
    if (action.type === "add") {
      const newHospitalList = new Map(hospitalList);
      newHospitalList.set(action.hospitalName, action.rating ?? 0);
      // console.log(hospitalList)
      return newHospitalList;
    } else if (action.type === "remove") {
      const newHospitalList = new Map(hospitalList);
      newHospitalList.delete(action.hospitalName);
      console.log(newHospitalList);
      return newHospitalList;
    } else {
      // console.log(hospitalList)
      return hospitalList;
    }
  };

  let defaultHospital = new Map<string, number>([
    ["Chulalongkorn Hospital", 5],
    ["Rajavithi Hospital", 5],
    ["Thammasat University Hospital", 5],
  ]);

  const [hospitalList, dispatchList] = useReducer(cardReducer, defaultHospital);

  return (
    <div className="mb-4">
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
        <Card
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
          hospitalList={(hospital, rating) =>
            dispatchList({ type: "add", hospitalName: hospital, rating })
          }
          ratingValue={hospitalList.get("Chulalongkorn Hospital") ?? 0}
        />
        <Card
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          hospitalList={(hospital, rating) =>
            dispatchList({ type: "add", hospitalName: hospital, rating })
          }
          ratingValue={hospitalList.get("Rajavithi Hospital") ?? 0}
        />
        <Card
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          hospitalList={(hospital, rating) =>
            dispatchList({ type: "add", hospitalName: hospital, rating })
          }
          ratingValue={hospitalList.get("Thammasat University Hospital") ?? 0}
        />
      </div>
      <div className="ml-32 mb-2 font-bold underline decoration-sky-500">
        Hospital List with Ratings : {hospitalList.size}
      </div>
      {Array.from(hospitalList.keys()).map((hospital) => (
        <div
          className="ml-32 cursor-pointer"
          key={hospital}
          onClick={() =>
            dispatchList({ type: "remove", hospitalName: hospital })
          }
        >
          {hospital} : {hospitalList.get(hospital)}
        </div>
      ))}
      {hospitalList.size === 0 && <div className="ml-32">No Ratings.</div>}
    </div>
  );
}
