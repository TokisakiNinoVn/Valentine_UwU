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

})


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
    
    // Hiển thị kết quả
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<p>Số năm: " + years + "</p>";
    resultDiv.innerHTML += "<p>Số tháng: " + months + "</p>";
    resultDiv.innerHTML += "<p>Số ngày: " + days + "</p>";
    resultDiv.innerHTML += "<p>Số tuần: " + weeks + "</p>";
}

// Gọi hàm để tính và hiển thị kết quả
countDays();