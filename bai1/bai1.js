let a = 5 ;
let b = 8;
function giaiPhuongTrinhBacNhat(){
let  a = prompt('a = ')
    let b = prompt('b = ')
if (a == 0) {

    if (b == 0)

    {

        alert('Phương trình có vô số nghiệm')
    }


    else
    {
        alert('Phương trình vô nghiệm')
    }


}
else

    alert('Phương trình có một nghiệm là x: ' + (-b/a) )
}
giaiPhuongTrinhBacNhat()