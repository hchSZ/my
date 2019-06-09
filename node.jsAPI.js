//暴露
module.exports = 10;
//引用
const fs = require("fs")
//文件读取
fs.readFile("./dey01", "utf-8", (err, data) => {
    console.log(err); //错误信息
    console.log(data); //文件内容
});
//文件写入
fs.writeFile("./dey01", "./dey02", (err, data) => {
    console.log(err);
})
//文件添加
fs.appendFile("./dey02", "内容", (err, data) => {

    console.log(err);

})
//文件克隆
fs.copyFile("./dey02", (err) => {
    console.log(err);

})
//路径
