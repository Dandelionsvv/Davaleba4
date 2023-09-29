//დავალება 1

// let array = [5, 25, 89, 120, 36]
// array.push('javascript', 'python')
// array.unshift('html', 'css')
// console.log(array, 'element:', array.length);
// array.shift()
// array.pop()
// console.log(array, 'element:', array.length);

//-----------------------------------------------------

//დავალება 2

// let array = ['orange', 'banana', 'pear']
// console.log('element:', array.length);
// array.push('apple', 'pineapple')
// array.unshift('watermelon')
// console.log('element:', array.length)
// array.splice(2, 0, 'mango')
// console.log(array);
// array.shift()
// array.pop()
// console.log(array, 'element:', array.length);

//-----------------------------------------------------

//დავალება 3

// let array = [1, 2, 3, 4, 5]
// array.splice(3, 0, 'a', 'b', 'c')
// console.log(array);

//-----------------------------------------------------

//დავალება 4

// let arr = [1, 2, 3, 4, 5]
// let sum = 0

// arr.forEach(function(arr){
//     sum += arr
// })

// console.log(sum)

//-----------------------------------------------------

//დავალება 5

// for (let i = 100; i > 0;  i--){
//     console.log(i);
// }

//-----------------------------------------------------

//დავალება 6

// let array=[2,15,10,24]
// let newArray = array.filter((num)=>{
//     return num !== 10
// })
// console.log(newArray);

//-----------------------------------------------------

//დავალება 7

// let array = [12, 25, 3, 6, 8, 14, 7, 23]
// let newArray = array.map((num)=>{
//     return num /3
// })
// console.log(newArray);

//-----------------------------------------------------

//დავალება 8 

// let languages = ['html', 'css', 'javascript', 'python', 'php']

// let newLanguages = languages.filter((lang)=>{
//     if(lang.length > 3){
//         return lang
//     }
// })
// console.log(newLanguages);

//-----------------------------------------------------

//დავალება 9

// let words = ['madrid', 'rome', 'milan', 'berlin']

// let mWords = words.filter((mword)=>{
//     return mword.includes ('m') || mword.includes ('n')
// })
// console.log(mWords);

//-----------------------------------------------------

//დავალება 10

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let newArray = arr1.concat(arr2, arr3)

// console.log(newArray);

//-----------------------------------------------------

//დავალება 11

// let arr = [-1, -2, -3, 4]
// let newArr = arr.some((num)=>{
//      return num > 0
// })
// console.log(newArr);

//-----------------------------------------------------

//დავალება 12

// let array = [23, 45, 32, 5, 87, 7, 3, 98]
// array.sort((a, b) => b - a)
// console.log(array);
// console.log(array[array.length - 1])