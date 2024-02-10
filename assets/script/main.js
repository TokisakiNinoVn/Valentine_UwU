window.onload = function() {
    setInterval(toggleElement, 6000); // Gọi hàm toggleElement sau mỗi 5 giây
};

function toggleElement() {
    var element = document.querySelector(".update_status");
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden"); // Hiển thị phần tử nếu đang ẩn
    } else {
        element.classList.add("hidden"); // Ẩn phần tử nếu đang hiển thị
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const totalDay = document.querySelector('.alert_day')
    const viewYear = document.querySelector('.year_value')
    const viewMonth = document.querySelector('.month_value')
    const viewWeek = document.querySelector('.week_value')
    const viewDay = document.querySelector('.day_value')
    function countDays() {
        // Ngày bắt đầu
        var startDate = new Date('2023-11-24');
        
        // Ngày hiện tại
        var currentDate = new Date();
        
        // Tính số ngày kể từ ngày bắt đầu
        var timeDiff = currentDate.getTime() - startDate.getTime();
        var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        // Tính số năm, tháng, ngày, và tuần
        var years = Math.floor(daysDiff / 365);
        var months = Math.floor((daysDiff % 365) / 30);
        var days = daysDiff % 30;
        var weeks = Math.floor(daysDiff / 7);

        totalDay.innerHTML = daysDiff
        viewYear.innerHTML = years
        viewMonth.innerHTML = months
        viewWeek.innerHTML = weeks
        viewDay.innerHTML = days
    }
    
    // Gọi hàm để tính và hiển thị kết quả
    countDays();


    function tinhTuoi(ngaySinh) {
        var ngaySinhArray = ngaySinh.split('-');
        var ngay = parseInt(ngaySinhArray[2]);
        var thang = parseInt(ngaySinhArray[1]);
        var nam = parseInt(ngaySinhArray[0]);
    
        var ngayHienTai = new Date();
        var namHienTai = ngayHienTai.getFullYear();
        var thangHienTai = ngayHienTai.getMonth() + 1;
        var ngayHienTai = ngayHienTai.getDate();
    
        var tuoi = namHienTai - nam;
        if (thangHienTai < thang || (thangHienTai === thang && ngayHienTai < ngay)) {
            tuoi--;
        }
        return tuoi;
    }
    
    var ngaySinh = "2005-07-14";
    var tuoi = tinhTuoi(ngaySinh);
    const ageYu = document.querySelector('.age_yu');
    ageYu.innerHTML = tuoi;
    

})
function hienThiNgayGio() {
    var now = new Date(); // Lấy ngày giờ hiện tại
    var ngay = now.getDate();
    var thang = now.getMonth() + 1;
    var nam = now.getFullYear();
    var gio = now.getHours();
    var phut = now.getMinutes();
    var giay = now.getSeconds();

    // Định dạng ngày giờ
    var ngayGio = ngay + '/' + thang + '/' + nam + ' ' + gio + ':' + phut + ':' + giay;

    // Hiển thị lên phần tử có id="ngaygio"
    document.querySelector('.real_time').innerHTML = ngayGio;

    // Cập nhật mỗi giây
}
setTimeout(hienThiNgayGio, 1000);

