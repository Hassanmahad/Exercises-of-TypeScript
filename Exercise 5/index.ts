function echo<T>(input: T): T {
  return input;
}
// const result = echo(112);


const Myname = echo("Hamza");   // T is string
Myname.toUpperCase();           // ✅ Works

const age = echo(43);         // T is number
age.toFixed(1);               // ✅ Works



interface ApiResult<T> {
status: string,
data: T
}
const stringResponse: ApiResult<string> = {
  status: "haye lipax",
  data: "Done",
};

const userResponse: ApiResult<{ id: number; name: string }> = {
  status: "Yow",
  data: { id: 1, name: "Ali" },
};


function frist<T>(items: T[]): T {
  return items[1];
}

const firstNum = frist([1, 2, 3]);          
const firstName = frist(["Ali", "Ayan"]);  
