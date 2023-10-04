if(!localStorage.getItem('start')){
  localStorage.setItem('start', 0);
}

localStorage.setItem('quantity', 10);

function fetchData() {
  fetch("./data.json")
  .then(response => response.json())
  .then(json => {
    var length = json.length;
    var start = localStorage.getItem('start');
    var quantity = localStorage.getItem('quantity');
    var pageNum = Math.floor(start / 10) + 1;
    document.querySelector("#footer").innerHTML = `第${pageNum}页,共${length}条(每页显示${quantity}条)`;

    for(let i=start; i<start+quantity && i<length; i++) {
      addRow(json.students[i]);
    }
  })
}

function addRow(student) {
  var tbodyElement = document.createElement('tbody');

  tbodyElement.innerHTML = 
        `<td>${student.id}</td>
        <td>${student.number}</td>
        <td>${student.name}</td>
        <td>${student.college}</td>
        <td>${student.major}</td>
        <td>${student.grade}</td>
        <td>${student.class}</td>
        <td>${student.age}</td>
        <td><button id="check">查看</button> <button id="change">修改</button></td>`;

  document.querySelector("table").appendChild(tbodyElement);

}

document.addEventListener("DOMContentLoaded", () => {

  fetchData();

  // document.querySelector("#add").onclick = () => {

  // }
  document.querySelector("#prev").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    start = start - 10;
    localStorage.setItem('start', start);
    fetchData();
  }
  
  document.querySelector("#next").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    start = start + 10;
    localStorage.setItem('start', start);
    fetchData();
  }
})