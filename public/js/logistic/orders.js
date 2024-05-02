const updateOrder =(id,status) =>{
 let nextStatus;
  switch (status) {
    case 'shipped':
      nextStatus = 'In-Transit';
      break;
    case 'intransit':
      nextStatus = 'Delivered';
      break;
    default:
      nextStatus = 'Delivered';
  }


  Swal.fire({
    title: "You Want To order is " + nextStatus,
    text: "Are you sure?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then( async (result) => {
    if (result.isConfirmed) {
      const response = await fetch("/kartezy/logistic/updateOrder", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId : Number(id)
        })
      });
      const resData = await response.json();
      if (response.status === 200) {
        console.log("updated order");
      } else {
        Swal.fire({
          title: resData.status,
          text: resData.msg,
          icon: "error"
        });
      }
      
    }
  });

}

const displayOrders = async () => {
  const response = await fetch("/kartezy/logistic/orderslists", {
    method: "POST",
  })
  const resData = await response.json();
  if (response.status === 200) {
    
    const thead = document.querySelector("table thead");
    const tr = document.createElement("tr");
    if(resData.length != 0){
  
      let fields = Object.keys(resData[0]);
      fields.forEach(el => {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.classList.add('text-capitalize');
        th.innerText = el.replace(/_/g, " ");
        tr.appendChild(th);
      });
      let th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = 'Action';
      tr.appendChild(th);
      thead.appendChild(tr);
  
      const tbody = document.querySelector("table tbody");
      resData.forEach(el => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${el.id}</td>
          <td>${el.order_id}</td>
          <td>${el.address}</td>
          <td>${el.order_note}</td>
          <td> 
          ${(el.status == 'intransit')? '<span class="badge bg-label-warning me-1 text-uppercase">In transit</span>' : ''} 
          ${(el.status == 'delivered')? '<span class="badge bg-label-primary me-1 text-uppercase">Delivered</span>' : ''} 
          ${(el.status == 'shipped')? '<span class="badge bg-label-info me-1 text-uppercase">shipped</span>' : ''} 
          ${(el.status != 'shipped' && el.status != 'delivered' && el.status != 'intransit')? '<span class="badge bg-label-success me-1 text-uppercase">' + el.status  + '</span>' : ''} 
          </td>
          <td>
            <div class="">
              <a href="" class ="p-2" ><i class="bi bi-eye-fill color-purple me-1"></i></a>
              ${(el.status != 'delivered')? '<button data-id ="' + el.order_id + '" class ="p-2 updateOrder" style="background: none; border: none; margin: 0;"><i class="bi bi-pencil-square color-orange"></i></button>' : ''}  
            </div> 
          </td>`;
        tbody.appendChild(row);
        const updateBtn = row.querySelector(".updateOrder");
        if(updateBtn){
          updateBtn.addEventListener('click',(event)=>{
            updateOrder(el.order_id,el.status);
          })
        }
        
      })
    } else {
      tr.innerHTML = `<th>No data Found</th>`;
      thead.appendChild(tr);
    }

  } else {
    console.log(resData.msg);
  }
}
displayOrders();