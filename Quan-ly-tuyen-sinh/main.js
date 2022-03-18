/**
 * input
 *  -   Nhập vào điểm chuẩn, điểm từng môn, khu vực, đối tượng ưu tiên
 * process
 *  - diemChuan = điểm chuẩn vừa nhập
 *  - tính điểm ưu tiên = uuTien
 *  - tính tổng điểm 3 môn = diemThi
 *  - cộng điểm ưu tiên vào tổng điểm 3 môn = tongDiem
 *  - so sánh tổng điểm với điểm chuẩn: tongDiem vs diemChuan
 * ouput
 *  - hiển trị kết quả so sánh được
 */
//Tính số điểm ưu tiên
function vungUuTien(){
    var areaA = document.getElementById('areaA');
    var areaB = document.getElementById('areaB');
    var areaC = document.getElementById('areaC');
    var areaX = document.getElementById('areaX');
    var area;
    if (areaA.checked){
        area = 2;
    } else if (areaB.checked){
        area = 1;
    } else if (areaC.checked){
        area = 0.5;
    } else if (areaX.checked){
        area = 0;
    }
    return area;
}
function doiTuong(){
    var obj1 = document.getElementById('obj1');
    var obj2 = document.getElementById('obj2');
    var obj3 = document.getElementById('obj3');
    var obj0 = document.getElementById('obj0');
    var obj;
    if (obj1.checked){
        obj = 2.5;
    } else if (obj2.checked){
        obj = 1.5;
    } else if (obj3.checked){
        obj = 1;
    } else if (obj0.checked){
        obj = 0;
    }
    console.log(obj);
    return obj;
}
function tinhDiem(){
    var diem1 = document.getElementById('diem1').value * 1;
    var diem2 = document.getElementById('diem2').value * 1;
    var diem3 = document.getElementById('diem3').value * 1;
    var tongDiem = diem1 + diem2 + diem3;
    return tongDiem;
}
function xetTuyen(){
    var diemChuan = document.getElementById('diemChuan').value * 1;
    if (tinhDiem() + doiTuong() + vungUuTien() >= diemChuan){
        var ketQua = "Chúc mừng bạn đã trúng tuyển vào trường của chúng tôi";
    } else {
        var ketQua = "Rất tiếc! Bạn chưa đạt đủ điều kiện để vào trường, hẹn gặp lại vào năm sau"
    }
    document.getElementById('ketQua').innerHTML = ketQua;
}