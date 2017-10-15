# Server Part of CEAT Systeam
- 登录:
方式：POST
接口：http://localhost:8888/NJ_DOM_CEAT/customer/login
请求body：
{
    "customerId" : "androidJP",
    "password" : "123"
}
响应内容：
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

- 注册:
方式：POST
接口： http://localhost:8888/NJ_DOM_CEAT/customer/register
请求body：
{
    "customerId" : "androidJP",
    "password" : "123",
    "phone" : "18811112222",
    "nickName" : "Jasper",
    "headPic" : "https://baidu.com",
    "addr" : "东安村一号"
}
响应内容：
{
    "__v": 0,
    "addressId": "f5aa75fe-33c5-4ba5-9394-8d8a99750bda",
    "customerId": "rerere",
    "content": "东安村一号",
    "status": true,
    "_id": "59a80f918e38ec1758e0886b"
}

- 添加地址
方式：POST
接口： http://localhost:8888/NJ_DOM_CEAT/customer/addAddress’
请求body：
{
    "customerId":"androidJP",
    "content":"南方软件园"
}
响应内容：
{
    "__v": 0,
    "status": false,
    "addressId": "f40e98eb-0c9c-4449-a0b1-b78803c519c0",
    "customerId": "androidJP",
    "content": "南方软件园",
    "_id": "59a810328e38ec1758e0886c"
}


- 更新地址
方式：POST
接口： http://localhost:8888/NJ_DOM_CEAT/customer/updateAddress
请求body：
{
        "_id": "59a80da575a70e1b803b2a76",
        "addressId": "c5c8d498-83b9-4ae1-a13c-82b6c8158344",
        "customerId": "androidJP",
        "content": "东安村wwuwuwuwu号",
        "status": true
}

响应内容：
{
    "n": 1,
    "nModified": 1,
    "ok": 1
}

- 获取用户所有地址
方式：GET
接口： http://localhost:8888/NJ_DOM_CEAT/customer/getAddressesByCustomerId/androidJP
响应内容：
[
    {
        "_id": "59a80da575a70e1b803b2a76",
        "addressId": "c5c8d498-83b9-4ae1-a13c-82b6c8158344",
        "customerId": "androidJP",
        "content": "东安村一号",
        "status": true,
        "__v": 0
    },
    {
        "_id": "59a80ee9de7a7d2bc06b351f",
        "addressId": "68d5597c-1830-4ac1-a20a-ca6bd449d049",
        "customerId": "androidJP",
        "content": "东安村一号",
        "status": true,
        "__v": 0
    },
    {
        "_id": "59a810328e38ec1758e0886c",
        "status": false,
        "addressId": "f40e98eb-0c9c-4449-a0b1-b78803c519c0",
        "customerId": "androidJP",
        "content": "南方软件园",
        "__v": 0
    }
]

- 删除用户地址
方式：delete
接口： http://localhost:8888/NJ_DOM_CEAT/customer/deleteAddress/59a80da575a70e1b803b2a76
响应内容：
"success delete address"
