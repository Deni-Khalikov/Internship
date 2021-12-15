let acc = document.getElementsByClassName("accordion");
let i;

// wtf is acc.length, its accordion im retarded.
// this code is copy pasted from w3 schools
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


let morningArr = [];
let middayArr = [];
let nightArr = [];

// create a function called addItem so you can add items to the array depending on morning or night
function addItem(routineType) {
  if (routineType === 'morning') {
    // STEP 1: identify, or get reference to the input element
    let item = document.getElementById('todoInputMorning');

    // STEP 2: ensure entered value is not null/empty
    if (item.value !== '') {
      // STEP 3: push valid values into corresponding array
      morningArr.push(item.value);
    }
    // STEP 4: empty out the input box
    item.value = '';

  } else if (routineType === 'midday') {
    let item = document.getElementById('todoInputMiiday');
  
    
  if(item.value != '') {
    middayArr.push(item.value);
  }
  item.value ='';

  }

  // adding items to Morning
  let morningParentList = document.getElementById('todoListMorning');
  morningParentList.innerHTML = '';

  morningArr.forEach(element => {
    let deleteButton = document.createElement('button')

    let editButton = document.createElement('button')

    deleteButton.innerHTML = 'x'

    editButton.innerHTML = 'e'

    deleteButton.classList.add('google-sucks')

    editButton.classList.add('airbnb-sucks')

    deleteButton.addEventListener('click', function() {
      deleteItemMorning(element);
    })

    editButton.addEventListener('click', function() {
      editButtonMorning(element)
    })

    let text    = document.createTextNode(element)
    let newItem = document.createElement('li')
    newItem.appendChild(text)

    newItem.appendChild(editButton)
    newItem.appendChild(deleteButton)
    morningParentList.appendChild(newItem)
  });
}

function editButtonMorning(element){
  console.log('edit function: ', element)
}


// function to delete morning
function deleteItemMorning(element) {

  console.log('inside function: ', element)
  for (let i = 0; i < morningArr.length; i++) {
    if (morningArr[i] === element) {
      morningArr.splice(i, 1);
    }
  }

  

  // add items to Morning
  let morningParentList = document.getElementById('todoListMorning');
  morningParentList.innerHTML = '';

  morningArr.forEach(element => {
    let deleteItem = document.createElement('button')
    deleteItem.innerHTML = 'x'
    deleteItem.classList.add('google-sucks')
    deleteItem.addEventListener('click', function() {
    deleteItemMorning(element);
    })
    let text    = document.createTextNode(element)
    let newItem = document.createElement('li')
    newItem.appendChild(text)

    newItem.appendChild(deleteItem)
    morningParentList.appendChild(newItem)
  });


}
