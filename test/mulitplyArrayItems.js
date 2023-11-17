function mulitplyArrayItems(arr){
let product =1
for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){

        product *= arr[i][j]
    }
    console.log(product)
}
}

mulitplyArrayItems([[1,2],[2,3,4],[4,5,6,7]])
