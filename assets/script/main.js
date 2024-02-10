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