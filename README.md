# **API Specifications**

## **Users**

### **Register**

- Method : POST
- Endpoint : user/register
- Body :

```
{
    name:  String,
    email: {
        type: String,
        required: true
    },
    password: String
}
```

- response

```
{
        "message": "Succes Register!"
}
```

### **Login**

- Method: POST
- Endpoint: /login
- Body:

```
{
    "email":"string",
    "password": "string"
}
```

- Response:

```
{
          "message": "Login Succesfull!",
          "token",
}
```

## **ToDo**

### **Get All Todo**

- method : GET
- Endpoint: /todo
- HTTP Header :
  - auth-token : `token`
- Response :

```
{
  "message": "Getting Data",
  "data": [
    {
      "_id": "ObjectId",
      "name": "string",
      "user": {
        "_id": "ObjectId",
        "name": "string"
      }
    }
]
}
```

### **Get Todo By ID**

- method : GET
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`
- Response:

```
{
  "message": "You Searched for",
  "data": {
    "_id": "ObjectId",
    "name": "string",
    "user": "ObjectId"
  }
}
```

### **Update Todo By ID**

- Method : PATCH
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`

- Body : 
```
{
  "name" : "updated name"
}

```  
- Response :

```
    {
  "message": "Todo updated",
  "data": {
    "_id": "ObjectId",
    "name": "updated name",
    "user": "ObjectId"
  }
}
```

### **Delete Task By ID**

- Method : DELETE
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`
- Response :

```
{
  "message": "Data Deleted!"
}
```

### **Delete All Todos**

- Method : DELETE
- Endpoint: todo/
- HTTP Header:
  - auth-token : `token`
- Response :

```
{
    message: "All Data Deleted!",
}
```

### **Add Todo**

- Method : POST
- Endpoint : todo/add
- HTTP Header : 
  - auth-token : `token`
- Response : 

```
{
  "name" : "string",
  "user" : "user.ObjectId"
}
```