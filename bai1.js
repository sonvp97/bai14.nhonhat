let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0];
function minArray(arr) {
    if (arr.length == 0){
        return "Mảng rỗng";
    }
    let min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
let min = minArray(arr3);
document.write(min);