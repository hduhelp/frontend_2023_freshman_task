if(!localStorage.getItem('start')){
  localStorage.setItem('start', 0);
}

localStorage.setItem('quantity', 10);

function clearData() {
  document.querySelector("tbody").innerHTML = "";
}

function fetchData() {
  console.log("fetch");
  fetch("./data.json")
  .then(response => response.json())
  .then(json => {
    var length = json.length;
    var start = parseInt(localStorage.getItem('start'));
    if(start > length) {
      localStorage.setItem('start', 0);
    }
    var quantity = parseInt(localStorage.getItem('quantity'));
    var pageNum = Math.floor(start / quantity) + 1;
    var end = start+quantity;
    document.querySelector("#bottom-info").innerHTML = `第${pageNum}页,共${length}条(每页显示${quantity}条)`;

    for(let i=start; i<end && i<length; i++) {
      addRow(json.students[i]);
    }

    buttonInit(pageNum, length, quantity);
  })
}

function buttonInit(pageNum, length, quantity) {
  if(pageNum <= 1) {
    offButton('prev');
  } else {
    onButton('prev');
  }

  if(pageNum >= Math.floor(length/quantity)+1) {
    offButton('next');
  } else {
    onButton('next');
  }
}

function onButton(button_id){
  var button = document.getElementById(`${button_id}`);
  button.disabled = false;
}

function offButton(button_id){
  var button = document.getElementById(`${button_id}`);
  button.disabled = true;
}

function addRow(student) {
  const trElement = document.createElement('tr');

  const tdCheckbox = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'selected_id';
  checkbox.value = student.id;
  checkbox.className = 'select';
  tdCheckbox.appendChild(checkbox);
  trElement.appendChild(tdCheckbox);

  const tdElements = ['id', 'number', 'name', 'college', 'major', 'grade', 'class', 'age'];
  tdElements.forEach((prop) => {
    const td = document.createElement('td');
    td.textContent = student[prop];
    trElement.appendChild(td);
  });

  const tdButtons = document.createElement('td');
  const viewButton = document.createElement('button');
  viewButton.className = 'check';
  viewButton.textContent = '查看';
  const changeButton = document.createElement('button');
  changeButton.className = 'change';
  changeButton.textContent = '修改';
  tdButtons.appendChild(viewButton);
  tdButtons.appendChild(changeButton);
  trElement.appendChild(tdButtons);

  document.querySelector('tbody').appendChild(trElement);
}


function checkRow(check_button) {
  // element is the button whose class is "check"
  const dialog = document.querySelector("#check-dialog");
  
  const row = check_button.parentNode.parentNode;
  // console.log(row);
  const rowChildren = row.children;
  const checkDialogList = document.querySelector("#check-dialog-list");
  checkDialogList.innerHTML = "";
  const label = document.querySelector("#head-row");
  const labelChildren = label.children;
  for(let i=1; i<rowChildren.length-1; i++) {
    // console.log(children[i].innerHTML);
    let liElement = document.createElement('li');
    liElement.innerHTML = `${labelChildren[i].innerHTML}: ${rowChildren[i].innerHTML}`;
    checkDialogList.appendChild(liElement);
  }
  dialog.showModal();
}

function addNewRow() {
  // element is the button whose class is "check"
  const dialog = document.querySelector("#add-dialog");
  const label = document.querySelector("#head-row");
  const labelChildren = label.children;
  for(let i=1; i<labelChildren.length-1; i++) {
    // console.log(children[i].innerHTML);
    let liElement = document.createElement('li');
    liElement.innerHTML = `${labelChildren[i].innerHTML}: `;
    
  }
  dialog.showModal();
}

function updateDisplayDelete(select, delete_value) {
  if(select.checked) {
    select.parentNode.parentNode.className = "selected";
    delete_value.push(parseInt(select.value));
  } else {
    select.parentNode.parentNode.className = "";
    const index = delete_value.indexOf(parseInt(select.value));
    if(index != -1) {
      delete_value.splice(index, 1);
    }
  }
  console.log(delete_value);
}

function selectToggle(select_toggle, delete_value) {
  const selects = document.querySelectorAll('.select');
  selects.forEach(select => {
    if(select.checked === select_toggle.checked) {
      return;
    }
    select.checked = select_toggle.checked;
    updateDisplayDelete(select, delete_value);
  })
}

function deleteRows(delete_value) {
  // post delete_value
  return;
}

function resetSelect(delete_value) {
  const select_toggle = document.querySelector("#select-toggle");
  select_toggle.checked = false;
  selectToggle(select_toggle, delete_value);
}
document.addEventListener("DOMContentLoaded", () => {

  fetchData();
  
  document.querySelector("#prev").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    var quantity = parseInt(localStorage.getItem('quantity'));
    start = start - quantity;
    localStorage.setItem('start', start);
    
    resetSelect(delete_value);
    clearData();
    fetchData();
  }
  
  document.querySelector("#next").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    var quantity = parseInt(localStorage.getItem('quantity'));
    start = start + quantity;
    localStorage.setItem('start', start);
    
    resetSelect(delete_value);
    clearData();
    fetchData();
  }

  const delete_value = [];
  document.addEventListener('click', event => {
    var element = event.target;
    if(element.className === 'check') {
      checkRow(element);
    } else if(element.className === 'change') {
      alert("change");
    } else if(element.className === 'select') {
      updateDisplayDelete(element, delete_value);
    } else if(element.id === 'select-toggle') {
      selectToggle(element, delete_value);
    } else if(element.id === "delete") {
      deleteRows(delete_value);
      resetSelect(delete_value);
    } else if(element.id === "add") {
      addNewRow();
    }
  })
  // not working...?
  // document.querySelectorAll('#add').forEach(function(button) {
  //   button.onclick = () => {
  //     alert("add");
  //   }
  // }) 

  // document.querySelectorAll('.change').forEach(function(button) {
  //   button.onclick = () => {
  //     alert("change");
  //   }
  // }) 
})