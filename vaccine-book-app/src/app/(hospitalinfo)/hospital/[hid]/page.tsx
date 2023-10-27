import Image from "next/image";
import getHospital from "@/libs/getHospital";
import Link from "next/link";

export default async function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);

  return (
    <main className="mt-20 text-center p-10">
      <h1 className="font-medium text-2xl underline decoration-sky-500">
        {hospitalDetail.data.name}
      </h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vh"
          className="rounded-lg w-[30%]"
        />
        <div className="text-left">
          <div className="text-md mx-5">Name: {hospitalDetail.data.name}</div>
          <div className="text-md mx-5">
            Address: {hospitalDetail.data.address}
          </div>
          <div className="text-md mx-5">
            District: {hospitalDetail.data.district}
          </div>
          <div className="text-md mx-5">
            Postal Code: {hospitalDetail.data.postalcode}
          </div>
          <div className="text-md mx-5">Tel: {hospitalDetail.data.tel}</div>
          <Link href={`/booking?id=${params.hid}&hospital=${hospitalDetail.data.name}`}>
            <button className="ml-4 mt-4 block rounded-md bg-sky-600 hover:bg-indigo-950 px-3 py-2 text-white shadow-sm">
              Make Reservation
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  //return an array
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
