// create cookie, with also expire time,
// http
const user = document.cookie = "userName=taskin; expires=Thu, 22 may 2025 08:23:00 UTC";
const password = document.cookie = "password=1234";
const email = document.cookie = "email=taskin@gmail.com";
 document.cookie = "email=";

// cookie can be string, but if i want to create cookie as object, its possible. but i have to take different way. 
const newUser = { id: 123, name: "Alice" };
 document.cookie = `user=${encodeURIComponent(JSON.stringify(user))}; path=/;`;


//  we can set expire time
// we can set httpOnly=true. it means no noe can check cookies using javascript
// we can set secure=true. it means who will sent request from https then server will provide cookie to browser, otherwise server will not provide.


