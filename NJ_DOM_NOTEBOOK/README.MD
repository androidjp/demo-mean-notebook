# Server Part of NoteBook Systeam

---

### 登录 :

* 方式：POST
* 接口：`http://localhost:9911/NJ_DOM_NOTEBOOK/customer/login`
* 请求 body：

```json
{
  "customerId": "androidJP",
  "password": "123"
}
```

* 响应内容：

```json
[
  {
    "_id": "59a80da575a70e1b803b2a75",
    "customerId": "androidJP",
    "password": "123",
    "phone": "18811112222",
    "nickName": "Jasper",
    "headPic": "https://baidu.com",
    "__v": 0
  }
]
```

### 注册 :

* 方式：POST
* 接口： `http://localhost:9911/NJ_DOM_NOTEBOOK/customer/register`
* 请求 body：

```json
{
  "customerId": "androidJP",
  "password": "123",
  "phone": "18811112222",
  "nickName": "Jasper",
  "headPic": "https://baidu.com",
  "addr": "东安村一号"
}
```

* 响应内容：

```json
{
  "__v": 0,
  "addressId": "f5aa75fe-33c5-4ba5-9394-8d8a99750bda",
  "customerId": "rerere",
  "content": "东安村一号",
  "status": true,
  "_id": "59a80f918e38ec1758e0886b"
}
```

### 创建笔记

* 方式：POST

### 更新笔记

* 方式：POST
* 接口：`http://localhost:9911/NJ_DOM_NOTEBOOK/api/note/update`
* 请求 body:

```json
{
  "authorId": "WUJA13",
  "title": "我的日记2",
  "cache": "你好伙计"
}
```

* 响应内容：

```json
{
  "__v": 0,
  "noteId": "b15fa902-8742-40dd-b9e5-b2a43d3b1dcf",
  "updatedAt": "2017-11-26T02:54:10.375Z",
  "createdAt": "2017-11-26T02:54:10.375Z",
  "authorId": "WUJA13",
  "title": "我的日记2",
  "cache": "你好伙计",
  "_id": "5a1a2cd28f8c02448e69ad46",
  "liked": 0,
  "status": 0
}
```

### 获取首页笔记

* 方式：get
* 接口：`http://localhost:9911/NJ_DOM_NOTEBOOK/api/note/list/date/:page`
* 响应内容：

```json
[
  {
    "_id": "5a1a2cd28f8c02448e69ad46",
    "noteId": "b15fa902-8742-40dd-b9e5-b2a43d3b1dcf",
    "updatedAt": "2017-11-26T02:54:10.375Z",
    "createdAt": "2017-11-26T02:54:10.375Z",
    "authorId": "WUJA13",
    "title": "我的日记2",
    "cache": "你好伙计",
    "__v": 0,
    "liked": 0,
    "status": 0
  }
]
```

### 获取用户的所有笔记

* 方式：get
* 接口：`http://localhost:9911/NJ_DOM_NOTEBOOK/api/note/list/user/:customerId`
* 响应内容：

```json
[
  {
    "_id": "5a1aad562ee1b949c4dc631a",
    "noteId": "d29aa6f9-42b9-4786-b3fa-34493eb956df",
    "updatedAt": "2017-11-26T12:02:30.000Z",
    "createdAt": "2017-11-26T12:02:30.000Z",
    "authorId": "WUJA13",
    "title": "我的日记1",
    "__v": 0,
    "liked": 0,
    "status": 0
  }
]
```

### 获取笔记详情

* 方式：get
* 接口：`http://localhost:9911/NJ_DOM_NOTEBOOK/api/note/get/:noteId`
* 响应内容：

```json
{
  "_id": "5a1a2cd28f8c02448e69ad46",
  "noteId": "b15fa902-8742-40dd-b9e5-b2a43d3b1dcf",
  "updatedAt": "2017-11-26T02:54:10.375Z",
  "createdAt": "2017-11-26T02:54:10.375Z",
  "authorId": "WUJA13",
  "title": "我的日记2",
  "cache": "你好伙计",
  "__v": 0,
  "liked": 0,
  "status": 0
}
```

### 删除笔记

* 方式：DELETE
* 接口： `http://localhost:9911/NJ_DOM_NOTEBOOK/api/note/delete/:noteId`
* 响应内容：

```json
{
  "code": 200,
  "message": "success delete address"
}
```
