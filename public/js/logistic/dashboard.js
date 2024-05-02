const fetchDashDetail = async () => {
  try {
    const response = await fetch('/kartezy/logistic/dashboardDetailFetch', { method: 'post' })
    const jsonRsp = await response.json()
    if (response.status === 200) {
      document.getElementById('totalOrders').innerHTML = jsonRsp.totalOrders
      document.getElementById('pendingOrders').innerHTML = jsonRsp.pendingOrders
      document.getElementById('deliveredOrders').innerHTML = jsonRsp.deliveredOrders
      const labelForChartOrder = ['Delivered', 'Pending'];
      const valForChartOrder = [jsonRsp.deliveredOrders, jsonRsp.pendingOrders];
      renderDelivChart(labelForChartOrder, valForChartOrder,'#chart')
    } else {
      Swal.fire({
        title: jsonRsp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
const oderCityFetch = async () => {
  try {
    const response = await fetch('/kartezy/logistic/dashboardCityOrderFetch', { method: 'post' })
    const jsonRsp = await response.json()
    if (response.status === 200) {
      renderDelivChart(jsonRsp.cities, jsonRsp.orderOfCities,'#odrByCity')
    } else {
      Swal.fire({
        title: jsonRsp.msg,
        icon: "error"
      });
    }
  } catch (error) {
    console.log(error);
  }
}
fetchDashDetail()
oderCityFetch()
const renderDelivChart = (label, val,chart) => {
  var options = {
    series: val,

    chart: {
      width: 380,
      type: 'pie',
    },
    labels: label,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var chart = new ApexCharts(document.querySelector(chart), options);
  chart.render();

}