function totalIntegerInString(str){

    digiCount =0
    for(let i=0;i<str.length;i++){
    if (/\d/g.test(str.charAt(i))){
        digiCount++
    }
    }
    return digiCount++
}

console.log(totalIntegerInString('asdqe2342 3434 asdfakdafj'))