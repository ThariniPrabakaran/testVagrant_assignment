function stringIsPalindrome(str){

    let cleanStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

    stringReverse =cleanStr.split('').reverse().join('')
    if(stringReverse===cleanStr){
        console.log(`${str} is a palindrome`)
    }
    else {console.log(`${str} is not a palindrome`)
}

}


stringIsPalindrome('Nitin')