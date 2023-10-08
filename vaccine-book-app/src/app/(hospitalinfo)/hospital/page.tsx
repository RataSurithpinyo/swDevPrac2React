import React, { Suspense } from "react";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";

export default function Hospital() {
  const hospitalsPromise = getHospitals(); // Promise
  return (
    <main>
      <div className="mt-24">
        <h2 className="text-center text-xl underline decoration-sky-500">
          Select your hospital
        </h2>
        <Suspense
          fallback={
            <p className="mt-6 text-center">
              Loading ... <LinearProgress />
            </p>
          }
        >
          <HospitalCatalog hospitalPromise={hospitalsPromise} />
        </Suspense>
      </div>
    </main>
  );
}
