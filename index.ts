let q2:string= "Eric";
console.log(
    `hello ${q2.toLowerCase()}, would you like to learn some python today?`
    );
let q3:string= "ErIc";
console.log(
    `hello ${q3.toUpperCase()}, would you like to learn some python today?`
    );

    const titlecase = q3
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ");
    console.log(`hello ${titlecase},would you like to learn some python today?`);

    console.log(
        `albert einstein once said, "a person who never made a mistake never tried anything new."`
    );

    let famous_person: string = "albert einstein";
    let message: string =
    "a person who never made a mistake never tried anything new.";
    console.log(`${famous_person}, ${message}`);
    
//Jahanzain Tayab
const name="\tJahnzaib\n";
let q6: string =" Jahnzaib \n Tayab \t Hy \t developer ";
console.log(name);
console.log(name.trim());

//10th August 2023
let n1=5
let n2=3
console.log(n1+n2);

const fav_num:number=42
let fav_num_message:string=`my favorite number is, ${fav_num}`;
console.log(fav_num_message);

const sum=(num1:number, num2:number)=>{
    return num1+num2;
};
console.log(sum(5, 9));

    export{};