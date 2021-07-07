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



  function calAge(){
      console.log(avgAge(students));
  }

  const students = [
    {Name: "Alice", Age: 20},
    {Name: "Bob", Age: 21},
    {Name: "Jane", Age: 20}
];

function calculate_age(){
    console.log("Average Age =", avgAge(students));
}
  
  let table = document.querySelector("table");
  let data = Object.keys(students[0]);
  generateTableRow(table, data); 
  generateTable(table, students); 

// calculate_age();



