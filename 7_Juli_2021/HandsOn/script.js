function studentReducer(acc , {Age = 20}){
  return acc + Age;
}

function avgAge(students){
  const totalAge = students.reduce(studentReducer, 0);
  console.log("Total Age = ", totalAge);
  return totalAge / students.length;
}



function generateTableRow(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, student) {
  for (let element of student) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}


const students = [
  {Name: "Alice", Age: 20},
  {Name: "Bob", Age: 21},
  {Name: "Jane", Age: 20}
];

function calculate_age(){
  const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

  console.log("Calculation start");
  console.log("Second call started");

  wait(3000)
  .then(() => {
    console.log("Average Age =", avgAge(students));
    wait(3000).then(() => console.log("Third call finished"));
  });

  wait(2000)
  .then(() => {
    console.log("Second call finished");
    console.log("Third call started");
  });
  
}

let table = document.querySelector("table");
let data = Object.keys(students[0]);
generateTableRow(table, data); 
generateTable(table, students); 

// calculate_age();



