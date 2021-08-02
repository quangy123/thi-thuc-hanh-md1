function array(){
    let array =[2,6,4,7,9,88,3,29]
    let value = +prompt('mời bạn nhập thứ cần tìm ?')
    for (let i = 0 ; i <array.length;i++){
        if (value==array[i]){
            alert('số của bạn cần tìm là : '+array[i]+' ở vị trí  :'+i)
            break;
        }
    }
}array()