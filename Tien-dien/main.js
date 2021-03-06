/**
 * input
 *  -   Nhập tên người dùng, nhập số chỉ điện;
 * process
 *  -   Xử lý tiền điện theo đơn giá của từng số chỉ điện;
 *  -   Tổng tiền điện theo đơn giá đã xử lý;
 * output
 *  -   Xuất tên người dùng và số tiền điện của họ;
 */
const dongia50 = 500;
const dongia100 = 650;
const dongia200 = 850;
const dongia350 = 1100;
const dongia00 = 1300;
var tongTien = 0;
document.getElementById('xemGia').onclick = () => {
    var soChi = document.getElementById("soChi").value * 1;
    var user = document.getElementById('user').value;
    giaTien(soChi,dongia50,dongia100,dongia200,dongia350,dongia00);
    var thongBaoTen = "Thông tin tiền điện của: " + user;
    var thongBaoTien =  "Số tiền điện tháng này của bạn là: " + tongTien + " VNĐ";
    document.getElementById('ketQuaTen').innerHTML = thongBaoTen;
    document.getElementById('ketQuaTien').innerHTML = thongBaoTien;

//Giá điện tiêu thụ trên từng số chỉ điện
}
function tieuThu0(soChi,donGia0){                       // < 50 kW
    var tieuThu = soChi * donGia0;
    return tieuThu;
}
function tieuThu1(soChi,donGia1){                       // < 100 kW (50 kW tiếp theo)
    var tieuThu = (soChi - 50) * donGia1;               
    return tieuThu;
} 
function tieuThu2(soChi,donGia2){                       // < 200 kW (100 kW kế tiếp)
    var tieuThu = (soChi - 100) * donGia2;
    return tieuThu;
}
function tieuThu3(soChi,donGia3){                       // < 350 kW (150 kW kế tiếp)
    var tieuThu = (soChi - 150) * donGia3;
    return tieuThu;
} 
function tieuThu4(soChi,donGia4){                       // lớn hơn 350 kW
    var tieuThu = (soChi - 350) * donGia4;
    return tieuThu;
} 
//Tổng tiền điện đã tiêu thụ
function giaTien(soChi,donGia0,donGia1,donGia2,donGia3,donGia4){
    if (soChi < 50){
        tongTien = tieuThu0(soChi,donGia0);
    } else if (soChi > 50 && soChi < 100){
        tongTien = tieuThu0(50,donGia0) + tieuThu1(soChi,donGia1);
    } else if (soChi > 100 && soChi < 200){
        tongTien = tieuThu0(50,donGia0) + tieuThu1(100,donGia1) + tieuThu2(soChi,donGia2);
    } else if (soChi > 200 && soChi < 350){
        tongTien = tieuThu0(50,donGia0) + tieuThu1(100,donGia1) + tieuThu2(200,donGia2) + tieuThu3(soChi,donGia3);
    } else {
        tongTien = tieuThu0(50,donGia0) + tieuThu1(100,donGia1) + tieuThu2(200,donGia2) + tieuThu3(350,donGia3) + tieuThu4(soChi,donGia4);
    }
    return tongTien;
}