// XMLHttpRequest 对象用于在后台与服务器交换数据。

// XMLHttpRequest 对象是开发者的梦想，因为您能够：

// 在不重新加载页面的情况下更新网页
// 在页面已加载后从服务器请求数据
// 在页面已加载后从服务器接收数据
// 在后台向服务器发送数据


const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

// 0	UNSENT	代理被创建，但尚未调用 open() 方法。
// 1	OPENED	open() 方法已经被调用。
// 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
// 3	LOADING	下载中； responseText 属性已经包含部分数据。
// 4	DONE	下载操作已完成。

function apiHandler(response){
    if(requestSender.readyState === 4 && requestSender.status === 200){
        console.log(response.target.response);
    }
}

requestSender.open('GET', 'https://api.github.com/users/HaoyangHu', true);
requestSender.send();