interface User  {
  readonly id : number
  username : string ,
  password : string ,
  email?: string,
}

const U:User={
  id : 21212 ,
  username : "Hassan",
  password : "31dq1q",
  email : "hassan@gmail.com"
}

// function login(user : User) : void{
//   console.log(` My name is ${user.username} , and my Email ${user.email} , even i can tell my password ${user.password},   `)
// }

// login("Hassan", "Hassanmahad07@gmail.com" , "w281jheqow1281");