export interface BookingItem {
// - ชื่อ ของผู้จองวัคซีน
// - นามสกุล ของผู้จองวัคซีน
// - รหัสประจำตัวประชาชน ของผู้จองวัคซีน
// - โรงพยาบาล ที่ต้องการรับวัคซีน
// - วันที่ต้องการรับวัคซีน 
    name: string
    surname: string
    id: string
    hospital: string
    bookDate: string
}