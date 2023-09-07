import DateReserve from "@/components/dateReserve";
import TextField from "@mui/material/TextField";
export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="mt-24 text-xl text-center underline decoration-sky-500 ">
        Book Your Vaccination.
      </div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          <label className="block">
            <span className="text-slate-700">ชื่อและนามสกุล</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm  
          "
            />
          </label>
        </div>
        <div className="text-md text-left text-gray-600 ">
          <label className="block">
            <span className="text-slate-700">รหัสประจำตัวประชาชน</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm  
          "
            />
          </label>
        </div>

        <div className="text-md text-left text-gray-600">
          <label className="block">
            <span className="text-slate-700">โรงพยาบาล</span>
            <select className="mt-1 block w-[100%] pl-2 pr-2 py-2 bg-white border border-slate-300 rounded-md text-sm">
              <option value="Chulalongkorn Hospital">
                Chulalongkorn Hospital
              </option>
              <option value="Rajavithi Hospital">Rajavithi Hospital</option>
              <option value="Thammasat University Hospital">
                Thammasat University Hospital
              </option>
            </select>
          </label>
        </div>

        <div className="text-md text-left text-gray-600">
          <div className="mt-3">วันที่ต้องการรับวัคซีน</div>
          <DateReserve/>
        </div>
      </div>

      <button className="block rounded-md bg-sky-600 hover:bg-indigo-950 px-3 py-2 text-white shadow-sm">
        จองวัคซีน
      </button>
    </main>
  );
}
