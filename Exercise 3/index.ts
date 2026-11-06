
function fullName(first : string, last : string) : string {
  return first + " " + last;
}

console.log(fullName("Hassan" , "Mahad"));




function registerUser (username: string, isAdmin?: boolean , language: string = "en") {
  console.log (`${username} ,  ${isAdmin} , ${language}`);
}

console.log(registerUser ("Hassan" , true ,)) ;


function average(...scores: number[]): number {
    if (scores.length === 0) {
        return 0;
    }

    const total = scores.reduce((sum, score) => sum + score, 0);

    return total / scores.length;
}

console.log(average(80, 90, 70));
