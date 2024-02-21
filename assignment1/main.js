function kiemtra() {
    var masv = document.getElementById('masv');
    var hotensv = document.getElementById("hoten");
    var email = document.getElementById("email");
    var gioitinh = document.getElementsByName("gt");
    var hobbies = document.getElementsByName("hobbies");
    var national = document.getElementById("national");
    if (masv.value == "") {

        alert("Mời bạn nhập vào Mã sinh viên của mình ");
        return false;
    }
    if (hotensv.value == "") {
        alert("Mời bạn nhập vào họ tên của mình ");
        return false;

    }
    var regex = /^([\w\.])+\@(([\w])+\.)+([\w]{2,4})+$/;
    if (email.value == "") {
        alert("MỜi bạn nhập vào Email của mình ")
        return false;

    }
    else if (regex.test(email.value) == false) {
        alert("Bạn đã nhập sai đa=ịnh dạng Email");
        return false;
    }
    if (!gioitinh[0].checked && !gioitinh[1].checked) {
        alert("Bạn chưa chọn giới tính");
        return false;
    }
    var count = 0;
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            count++;
        }


    }
    if (count < 1) {
        alert("Bạn phải chọn ít nhất 1 sở thích");
    }
    if (national.value == "") {
        alert("Mời bạn chọn quốc tịch");
        return false;
    }

}
function khac(msg) {
    var khac = document.getElementById("khac");
    khac.style.display = msg ? "" : "none";
}

