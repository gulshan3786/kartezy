
let page = 1;
let gridComponentResult;
const recordsPerPage = 3;
let pageNumber = 1;
let totalPages;
let start = (pageNumber - 1) * recordsPerPage;
let end = start + recordsPerPage;


async function showGridResult() {
  const response = await fetch("/kartezy/grid/1");
  gridComponentResult = await response.json();

  let totalRecords = gridComponentResult.length;
  totalPages = Math.ceil(totalRecords / recordsPerPage);

  let fieldName = Object.keys(gridComponentResult[0]);
  let field = document.getElementById("field");
  fieldName.forEach(element => {
    let th = document.createElement("th");
    th.innerHTML = element;
    field.appendChild(th);
  });

  gridResult();
}

async function gridResult() {
  if (start > gridComponentResult.length) {
    start = 0;
  }
  // let newGridComponentResult = gridComponentResult;
  let newGridComponentResult = gridComponentResult.slice(start, end);
  let tag = "";
  let tags = "";
  console.log(newGridComponentResult)
  const tbody = document.getElementById("fieldData");
  newGridComponentResult.forEach(dataArray => {
    let keysArray = Object.keys(dataArray);
    let valuesArray = Object.values(dataArray);
    let tr = document.createElement("tr");
    valuesArray.forEach(valuesResult => {
      let td = document.createElement("td");
      td.innerText += valuesResult;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  document.getElementById('page').innerHTML = pageNumber;

}

function next() {
  pageNumber++;
  start = (pageNumber - 1) * recordsPerPage;
  end = start + recordsPerPage;
  if (pageNumber == totalPages) {
    document.getElementById('next').disabled = true;
  }
  if (pageNumber <= totalPages) {
    document.getElementById("fieldData").innerHTML = '';
    gridResult();
    document.getElementById('previous').disabled = false;
  }
}

function previous() {
  pageNumber--;
  start = (pageNumber - 1) * recordsPerPage;
  end = start + recordsPerPage;
  if (pageNumber == 1) {
    document.getElementById('previous').disabled = true;
  }
  if (pageNumber <= totalPages) {
    document.getElementById("fieldData").innerHTML = '';
    gridResult();
    document.getElementById('next').disabled = false;
  }
}
// const searchInfo = () => {
//   let myTable = document.getElementById('mytable');
//   let tr = mytable.getElementsByTagName('tr');
//   console.log('vbdf', gridComponentResult[0]);
//   let filter = document.querySelector('#inpSearch').value;
//   console.log(gridComponentResult[0].sepcificaton_key == filter);
//   for (let i = 0; i < gridComponentResult.length; i++) {
//     if (gridComponentResult[i].id == filter || gridComponentResult[i].product_id == filter || gridComponentResult[i].sepcificaton_key == filter || gridComponentResult[i].specification_value == filter || gridComponentResult[i].create_at == filter) {
//       tr[i].style.display = 'block';
//     } else {
//       tr[i].style.display = "none";
//     }
//   }

// for (let i = 0; i < tr.length; i++) {
//   let td = tr[i].getElementsByTagName('td')[2];
//   if (td) {
//     let textvalue = td.textContent || td.innerHTML
//     if (textvalue.toUpperCase().indexOf(filter) > -1) {
//       tr[i].style.display = "";
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }
// }
