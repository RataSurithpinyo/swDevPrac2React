import Image from "next/image";
export default function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  // Mock data
  const mockHospital = new Map();
  mockHospital.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
  });
  mockHospital.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
  });
  mockHospital.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
  });

  return (
    <main className="mt-20 text-center p-10">
      <h1 className="font-medium text-2xl underline decoration-sky-500">
        Hospital ID: {params.hid}
      </h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockHospital.get(params.hid).image}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vh"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5">{mockHospital.get(params.hid).name}</div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  //return an array
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
