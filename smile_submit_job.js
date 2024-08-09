// 目标URL
let url = "https://mpfacetxt.myngn.top/uploads/start.txt";

// 创建一个函数从远程URL获取数据
function fetchRemoteFileContent(callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
}

// 在请求处理函数中调用上面的函数
fetchRemoteFileContent(function(fileContent) {
    // 假设文件内容是JSON格式，你可以这样解析：
    let imagesData = JSON.parse(fileContent);

    let body = $request.body; // 获取当前请求的请求体
    let bodyObj = JSON.parse(body); // 将请求体转为对象

    // 替换 images 字段的数据
    bodyObj.images = imagesData;

    // 将修改后的请求体转换回字符串
    body = JSON.stringify(bodyObj);

    // 返回修改后的请求体
    $done({body});
});
