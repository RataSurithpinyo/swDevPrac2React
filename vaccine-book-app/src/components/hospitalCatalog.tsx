import React, { Suspense } from "react";
import Card from "./card";
import Link from "next/link";

export default async function HospitalCatalog({ hospitalPromise }) {
  const hospitalJsonReady = await hospitalPromise;
  // if (!hospitalJsonReady) {
  //   return null;
  // }
  return (
    <>
      <h3 className="text-center">
        Explore {hospitalJsonReady.count} models in our catalog
      </h3>
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
        {hospitalJsonReady.data.map((hospitalItem) => (
          <Link
            key={hospitalItem.id}
            href={`/hospital/${hospitalItem.id}`}
            className="w-1/5"
          >
            <Card
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
