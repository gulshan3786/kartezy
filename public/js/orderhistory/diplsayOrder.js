const displayInofrmation = (order) => {
  document.getElementById("order").innerHTML = `
    <div class='row' style='width: 100% border: 3px solid;'>
      <div class='col-lg-6'>
        <table cellpadding='10px'>
          <tr>
            <td><h3><i class="bi bi-bag-check-fill primary-text"></i>&nbsp;Order id : </h3></td>
            <td><h3>${order.order_id}</h3></th>
          </tr>

          <tr>
            <th><i class="bi bi-person-bounding-box primary-text"></i>&nbsp;Customer name : </th>
            <td>${order.customer_name}</td>
          </tr>

          <tr>
            <th><i class="bi bi-telephone-fill primary-text"></i>&nbsp;Mobile no : </th>
            <td>${order.mobile_no}</td>
          </tr>

          <tr>
            <th><i class="bi bi-geo-alt-fill primary-text"></i>&nbsp;Address : </th>
            <td>${order.address}</td>
          </tr>

          <tr>
            <th><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Ordered : </th>
            <td>${order.create_at}</td>
          </tr>

          <tr>
            <th><i class="bi bi-calendar-minus primary-text"></i>&nbsp;Delivered : </th>
            <td>${order.deliver_date}</td>
          </tr>

          <tr>
            <th><i class="bi bi-truck primary-text"></i>&nbsp;Satus : </th>
            <td>${order.status}</td>
          </tr>

          <tr>
            <th><i class="bi bi-pencil-square primary-text"></i>&nbsp;Note : </th>
            <td>${order.order_note}</td>
          </tr>

          <tr>
            <th><h3><i class="bi bi-currency-rupee primary-text"></i>&nbsp;Total Price : </h3></th>
            <th><h3>${order.total_price}</h3></th>
          </tr>
        </table>
      </div>
      <div class='col-lg-6' id='statuschart'></div>
    </div>
  `
}

const displayProducts = (products) => {
  document.getElementById("order").innerHTML += "<h3 class='primary-text text-center mt-4'>Products</h3><table class='table' id='items' align='center' width='80%' cellpadding='10px'><table>"
  const table = document.getElementById("items");
  table.innerHTML += `<tr><th>Index</th><th>Product name</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>`;
  let count = 1;
  products.forEach(product => {
    table.innerHTML += `
      <tr>
        <td>${count++}</td>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        <td>${product.qty}</td>
        <td>${product.total_price}</td>
      </tr>
    `
  });
}

const displayStatusChart = (statues) => {
  var options = {
    series: [100, 100, 0, 50],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 100
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  var chart = new ApexCharts(document.querySelector("#statuschart"), options);
  chart.render();
}

displayParticularOrder = async () => {
  const response = await fetch(window.location.href, { method: 'POST' });
  const order = await response.json();
  if (response.status == 200) {
    displayInofrmation(order.message.information)
    displayProducts(order.message.items)
    displayStatusChart(order.message.statues);
    document.getElementById("invoicegenratebtn").addEventListener('click', () => { invoiceGenrate(order.message) })
  }
  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: order.message || 'Somethig is wrong..',
      showConfirmButton: false,
      timer: 2000
    });
  }
}