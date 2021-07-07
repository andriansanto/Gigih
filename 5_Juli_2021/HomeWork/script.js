const form = document.getElementById("myform");

function onSubmit(event) {
  if (event) {
    event.preventDefault();
    console.log(event);
    alert("This is Alert!!!");
  }
}

form.addEventListener("submit", onSubmit);