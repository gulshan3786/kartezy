const displayProducts = async () => {
  try {
    const response = await fetch("/kartezy/vendorAdmin/orders", { method: "POST", })
    const resData = await response.json();

    if (response.status === 200) {
      const thead = document.querySelector("table.table thead");
      const tr = document.createElement("tr");
      if (resData.length != 0) {

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

        const tbody = document.querySelector("table.table tbody");
        resData.forEach(el => {
          let row = document.createElement("tr");
          row.innerHTML = `<td>${el.order_id}</td>
          <td>${el.distinct_products}</td>
          <td>${el.total_price}</td>
          <td>${el.city}</td>
          <td>${el.shipping_cost}</td>
          <td>${el.delivery_date}</td>
          <td> ${(el.status === 'delivered') ? '<span class="badge bg-label-success me-1 text-uppercase">Delivered</span>' : '<span class="badge bg-label-warning me-1 text-uppercase">pending</span>'} </td>
          <td>
          <div class="">
            <button onclick="fetchOrderReq(${el.order_id})" class ="btn" ><i class="bi bi-eye-fill color-purple me-1"></i></button>
            ${(el.status === 'delivered') ? '<button  class ="btn editProduct" ><i class="bi bi-bag-check text-success"></i></button>' : '<button  class ="btn editProduct" ><i class="bi bi-truck text-warning" ></i></button>'}   
            </div> 
          </td>`;
          tbody.appendChild(row);

        })
      } else {
        tr.innerHTML = `<th>No data Found</th>`;
        thead.appendChild(tr);
      }

    } else {
      console.log(resData.msg);
    }
  } catch (error) {
    console.log(error);
  }
}
const fetchOrderReq = async (orderId) => {
  document.getElementById('orderItems').innerHTML = ''
  try {
    const response = await fetch('/kartezy/vendorAdmin/singleOrderDetail', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orderId })
    })
    if (response.status === 200) {
      let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
      myModal.show()
      const jsonResp = await response.json();
      fillOrderData(jsonResp)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const fillOrderData = (jsonResp) => {
  document.getElementById('orderId').innerHTML = 'Order #' + jsonResp.order_id
  if (jsonResp.odr_status === 'pending') {
    document.getElementById('orderStatus').setAttribute('class', 'bg-label-warning badge  me-2 fs-6 ms-2')
    document.getElementById('orderStatus').innerHTML = jsonResp.odr_status
  } else {
    document.getElementById('orderStatus').setAttribute('class', 'bg-label-success badge  me-2 fs-6 ms-2')
    document.getElementById('orderStatus').innerHTML = jsonResp.odr_status
  }
  document.getElementById('orderPlaced').innerHTML = jsonResp.order_placed
  document.getElementById('username').innerHTML = jsonResp.first_name + ' ' + jsonResp.last_name
  document.getElementById('userId').innerHTML = 'Customer ID: #' + jsonResp.user_id
  document.getElementById('email').innerHTML = 'Email: ' + jsonResp.email
  document.getElementById('phone').innerHTML = 'Mobile: ' + jsonResp.mobile_no
  document.getElementById('shippingAddress').innerHTML = jsonResp.house_no + ', ' + jsonResp.land_mark + '<br> ' + jsonResp.area + '<br>' + jsonResp.city + ',' + jsonResp.state + '<br> Pincode: ' + jsonResp.pincode
  document.getElementById('billingAddress').innerHTML = jsonResp.house_no + ', ' + jsonResp.land_mark + '<br> ' + jsonResp.area + '<br>' + jsonResp.city + ',' + jsonResp.state + '<br> Pincode: ' + jsonResp.pincode
  document.getElementById('paymentype').innerHTML = jsonResp.type_of_transection;
  const tbody = document.getElementById('orderItems');
  let subTotal = 0
  jsonResp.Products.forEach((prdctObj) => {
    subTotal += prdctObj.total_price
    const newTr = document.createElement('tr')
    newTr.innerHTML = ` <td class="  control" style="display: none;" tabindex="0"></td>
                          <td class="sorting_1">
                            <div class="d-flex justify-content-start align-items-center text-nowrap">
                              <div class="avatar-wrapper">
                                <div class="avatar me-2 "><img src="/images/products/${prdctObj.main_image_path}" alt="product-Wooden Chair" class="rounded-2 w-50"></div>
                              </div>
                              <div class="d-flex flex-column">
                                <h6 class="text-body mb-0">${prdctObj.product_name}</h6><small class="text-muted">${prdctObj.category_name}</small>
                              </div>
                            </div>
                        </td>
                        <td><span>${prdctObj.price} INR</span></td>
                        <td><span class="text-body">${prdctObj.qty}</span></td>
                        <td>
                          <h6 class="mb-0">${prdctObj.total_price} INR</h6>
                        </td>`
    tbody.appendChild(newTr)
  })
  document.getElementById('subTotal').innerHTML = subTotal + ' INR'
  document.getElementById('shippingCost').innerHTML = '+' + jsonResp.shipping_cost + ' INR'
  document.getElementById('subTotalWithShipping').innerHTML = jsonResp.shipping_cost + subTotal + ' INR'
}
displayProducts();