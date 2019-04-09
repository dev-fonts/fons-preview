window.onload = () => {
    var input = document.getElementById("input");
    var btn = document.getElementById("btn");
    var output = document.getElementsByClassName("output");

  input.onkeyup = (event) => {
    if (event.target.value !== " ") {
      for (var i = 0; i < output.length; i++) {
        output[i].innerHTML = event.target.value;
      }
     } else if (event.target.value == " ") {
        for (var k = 0; k < output.length; k++) {
          output[k].innerHTML = "Custom";
        }
      }
    }
  btn.onclick = () => {
      input.value = " ";
      for (var j = 0; j < output.length; j++) {
      output[j].innerHTML = "Custom";
    }
  }
}
