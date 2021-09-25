function myFunction() {
  let text;
  let user = prompt("Please enter your name :", "");
  if (user == null || user == "") {
    text = "Hi Fellas!";
  } else {
    text = "Hi " + user + "!";
  }
  document.getElementById("grt").innerHTML = text;
}
setTimeout(myFunction, 1000);