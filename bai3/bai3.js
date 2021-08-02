let array = ['a','o','e','u','i'];
function check (){
    let string = document.getElementById("chuoi").value;
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (string[i].toUpperCase() == array[j].toUpperCase()){
                count++;
            }
        }
    }
    if (count == 0){
        document.getElementById("ketquat").innerText = "Chuỗi  không  ký tự nguyên âm !";
    }else {
        document.getElementById("ketqua").innerText = "Chuỗi   "+count+" có số nguyên âm !";
    }
}