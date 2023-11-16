import React, { Suspense } from "react";
import Card from "./card";
import Link from "next/link";

export default async function HospitalCatalog({ hospitalPromise }: any) {
  const hospitalJsonReady = await hospitalPromise;
  return (
    <>
      <h3 className="text-center">
        Explore {hospitalJsonReady.count} models in our catalog
      </h3>
      <div id="hospital-div"
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
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
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

// import React, { Suspense, useState, useEffect } from "react";
// import Card from "./card";
// import Link from "next/link";

// export default function HospitalCatalog({ hospitalPromise }: any) {
//   const [hospitalData, setHospitalData] = useState({ data: [], count: 0 });

//   useEffect(() => {
//     hospitalPromise.then((data: any) => {
//       setHospitalData(data);
//     });
//   }, [hospitalPromise]);

//   if (!hospitalData) {
//     return null;
//   }

//   return (
//     <>
//       <h3 className="text-center">
//         Explore {hospitalData.count} models in our catalog
//       </h3>
//       <div
//         style={{
//           margin: "30px",
//           display: "flex",
//           flexDirection: "row",
//           alignContent: "space-around",
//           justifyContent: "space-around",
//           flexWrap: "wrap",
//         }}
//       >
//         {hospitalData.data.map((hospitalItem: any) => (
//           <Link
//             key={hospitalItem.id}
//             href={`/hospital/${hospitalItem.id}`}
//             className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
//           >
//             <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }
