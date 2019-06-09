/* es6补充 */
// 1. 字符串拓展 startsWith和endsWith
/* let str = '前端'
// indexOf
console.log(str.startsWith('端'));
console.log(str.endsWith('端')); */
// 2. 字符填充padStart和padEnd  第一个参数是填充之后字符总长度， 第二个参数是要填充的字符
/* var str = '天下隆中对'
console.log(str.padStart(10, 'abcdefghilmn'))
console.log(str.padEnd(10, '传奇襄阳城')) */
// 3. 模板字符串 ``
var str = '天下隆中对'
var str1 = `${str}传奇襄阳城`
var path = 'www.baidu.com'
var str2 = '<a href="'+path+'">baiduyixia</a>'
var str3 = `<a href="${path}">baiduyixia</a>`
var str4 = '<ul>'+
'<li>'+path+'</li>'+
'<li></li>'+
'</ul>'
var str5 = `<ul>
<li>${path}</li>
<li>${path}</li>
</ul>`
// console.log(str5)
// 4. 函数拓展 参数默认值
// function fn (a) {
//     a = a || 10
//     console.log(a);
// }
/* function fn (a = 10, b) {
    console.log(a);
}
fn() */
// 5. 展开运算符
var arr1 = [11, 22, 33]
var arr2 = [44, 55, 66]
var arr3 = arr2.concat(arr1)
console.log([...arr1, ...arr2]) // [11, 22, 33, 44, 55, 66]

var obj1 = {name: 'jake', say: function() {}}
var obj2 = {age: 16}
console.log({...obj1, ...obj2});