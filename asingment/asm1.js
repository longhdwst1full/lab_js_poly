
let array_img = ['./image/bay-ky-quan-thien-nhien-the-gioi-moi.jpg', "./image/2.jpg", "./image/3.jpg", "./image/4.jpg", "./image/5.jpg", "./image/6.jpg"];

console.log(array_img)
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const active=$(".active");
// const li_=$$(li);

// slide

let button_= document.querySelectorAll("button");
console.log(button_);

console.log(button_[1]);
(function () {
    let current_index = 0;
    const img_ = $(".slide_img>img")
    const first = $(".first");
    const back = $(".back");
    const stop = $(".stop");
    const start = $(".start");
    const next = $(".next");
    const final = $(".final");
    const slide_number = $(".slide_number");
   


    first.addEventListener("click", () => {
        clearInterval(chay);

        current_index = 0;

        img_.src = array_img[current_index];
        slide_number.innerHTML = `1/6`;
    });

    final.addEventListener("click", function () {
        clearInterval(chay);
        current_index = Number(array_img.length - 1);

        img_.src = array_img[current_index];
        slide_number.innerHTML = "6/6";
        
    });
    back.addEventListener("click", function () {
        clearInterval(chay);

        if (current_index == 0) {

            current_index = Number(array_img.length);
        }
        current_index--;
        img_.src = array_img[current_index];
        slide_number.innerHTML = `${current_index + 1}/6`;

    });
    function next_() {
        clearInterval(chay);

        if (current_index == array_img.length - 1) {
            current_index = -1;
        }
        current_index++;

        img_.src = array_img[current_index];
        slide_number.innerHTML = `${current_index + 1}/6`;
    };
    next.addEventListener("click", next_);

    stop.addEventListener("click", function () {
        clearInterval(chay);
    });
    start.onclick = function () {
        setInterval(next_,1000);
       
    }
    // chay();
    chay=setInterval(next_,1000);
  
})();


let img_cart = document.querySelectorAll('td>img');
img_cart.forEach(function (item) {
    item.onmouseover = function () {
        item.style.transform = "scale(4)";
    }
    item.onmouseout = function () {
        item.style = "";
    }
})







// cart 

function doigia() {
    var arrgia = document.getElementsByName("price");
    var mucgia = document.getElementById("mucgia");
    mucdangchon = mucgia.value;
    for (let i = 0; i < arrgia.length; i++) {
        gia = parseFloat(arrgia[i].innerHTML);
        if (gia < mucdangchon || mucdangchon == "") {
            arrgia[i].parentNode.style.display = "";

        }
        else {
            arrgia[i].parentNode.style.display = "none"


        }
    }
}
function _check(i) {
    var soluong = document.getElementsByName("soluong");
    soluong[i].disabled = !soluong[i].disabled;
    if (soluong[i].disabled == true) {
        soluong[i].value = 0;
        soluong[i].parentNode.nextElementSibling.innerHTML = "";

    } tongtien();
}
function thanhtien(e) {
    var soluong = e.value;
    console.log(soluong);
    var dongia = e.parentNode.previousElementSibling.innerHTML;
    console.log(dongia);

    var tien = e.parentNode.nextElementSibling;
    tien.innerHTML = Number(soluong) * Number(dongia);
    tongtien();
}
function tongtien() {
    var tt = document.querySelector("span");
    var tong = 0;
    var tien = document.getElementsByName("thanhtien");
    for (let i = 0; i < tien.length; i++) {
        var tien1 = tien[i].innerText;
        tong += Number(tien1);
    }
    tt.innerHTML = tong;
}



// đăng kí
const dang_ki = $(".dang_ki");
function show_error(element, message) {
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.fontSize = "15px";
    document.getElementById(element).style.margin = "7px 0px";
}
courses.onchange = function () {
    console.log(courses.value)
 if (courses.value == '') {
     free_course.value="0"
   
    }
 if (courses.value == 'html') {
     free_course.value="5000000"
   
    }
    else if (courses.value== 'javascript') {
     free_course.value="800.000 đ"

    }
    else if (courses.value === 'php') {
   
     free_course.value="900.000 đ"

    
    }

}
function validate() {
    const chon = document.getElementsByName('chon_dđ');
   
    const hoten = $("#hoten");
    const email = $("#email");
    const phone = $("#phone");
    const courses = $("#courses");
    const free_course = $("#free_course");
    let flage = true;
    var regex = /^([\w\.])+\@(([\w])+\.)+([\w]{2,4})+$/;
    var regSDT = /^0[0-9]{9}$/;
    if (hoten.value.length == 0) {
        show_error("errol_hoten", "Mời bạn nhập vào họ tên đầy đủ");
        flage = false;
    }
    else {
        show_error("errol_hoten", "");
    }

    if (email.value.length == 0) {
        show_error("errol_email", "Mời bạn nhập vào email");
        flage = false;

    }
    else if (regex.test(email.value) == false) {
        show_error("errol_email", "Bạn nhập sai định dạng email");
        flage = false;
    }

    else {
        show_error("errol_email", "");
    }
    if (phone.value.length == 0) {
        show_error("errol_phone", "Mời bạn nhập vào số điện thoại");
        flage = false;

    }
    // else if (phone.value.length < 10) {
    //     show_error("errol_phone", "Số điện thoại bạn nhập thiếu");
    //     flage = false;
    // }
    else if (regSDT.test(phone.value) == false) {
        show_error("errol_phone", "SĐT không đúng định dạng rồi");
        flage = false;
    }
    // else if (isNaN(phone.value) == false) {
    //     show_error("errol_phone", "Số điện thoại bạn nhập sai định dạng");
    //     flage = false;
    // }
    else {
        show_error("errol_phone", "");
    }
   
    if (courses.value == "") {
        show_error("errol_courses", "Mời chọn khóa học ");
        flage = false;

    }
   
    else {    
        show_error("errol_courses", "");
    }


    // for (var i = 0; i < chon.length; i++) {
        if (!chon[0].checked && !chon[1].checked) {
            show_error("errol_chon", "Bạn chưa chọn hình thức học");
            flage = false;
            return false;
        }
        
        else show_error("errol_chon", "");
    // }


 

    if (flage == false) {
        return false
    }
    else {
        alert("Đăng kí thành công")
        return true;
    }
}




// chuyển tool

let tool_li = $$('ul.menu>li');

tool_li.forEach((item, index) => {
    item.onclick = function () {
        let tab_pane = document.querySelectorAll('.tab-pane');
        const panes = tab_pane[index];
        document.querySelector(".tab-pane.block").classList.remove("block")
        document.querySelector("ul.menu>li.active").classList.remove("active")
        this.classList.add('active');
        panes.classList.add('block')
    }

});