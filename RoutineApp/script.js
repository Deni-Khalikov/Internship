


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  function todoList() {
    var item    = document.getElementById('todoInput1').value
    var text    = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todoListMorning').appendChild(newItem)

  }
}


