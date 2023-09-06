let name1="Qasim Ali";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

let variable="ede";
const carobject={name:"BMW", model1:"A5", manufectured:2018, isOK: false,};
console.log(`carname:${carobject.name}`);
console.log(`car model:${carobject.model1}`);
//bracketing method
console.log(carobject["manufectured"]);

//array objects
const person={name:"Shafqat", age:34, gender:"male",batch: "Batch 47",};
const students=[
{name: "Azlan", age: 10, gender:"male", batch:"Batch 46",},
{name:"Lion", age:9, gender:"male", batch:"Batch 48",},];
for (let s=0; s< students.length; s++) {
    console.log(`Hello i am from batch${students[s].batch} and my name is
    ${students[s].name}`);
}


export{};
