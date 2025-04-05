// function isPalindrome(str) {
//     let left = 0,
//         right = str.length - 1; 
//     while(left < right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;
//   }

function isPalindrome(str) {
    if(str.length <= 1) return true;
    if(s[0] !== str[str.length - 1]) return false;  

    return isPalindrome(str.slice(1,str.length - 1))
}