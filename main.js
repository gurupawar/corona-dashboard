function getData(indexs) {
  fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then((data) => {
      return data.json();
    })
    .then((covidData) => {
      console.log(covidData.data.regional);
      const dataStats = covidData.data.regional[`${indexs}`];

      document.getElementById("state").innerHTML = `${dataStats.loc} `;

      document.getElementById(
        "confirmed"
      ).innerHTML = `${dataStats.totalConfirmed}`;

      document.getElementById(
        "recovered"
      ).innerHTML = `${dataStats.discharged} `;

      document.getElementById("deaths").innerHTML = `${dataStats.deaths} `;
    })
    .catch((error) => {
      console.log(`The error: ${error}`);
    });

  var CovidData = document.getElementById("covid__data");

  // ------------------------------------------ chart-------------------
  var dataInPie = {
    labels: ["Total", "Active", "Recoverd", "Death"],
    datasets: [
      {
        data: [123, 75, 41, 61],
        backgroundColor: ["#ff073a", "#007bff", "#29a746", "#6c757d"],
      },
    ],
  };

  var options = {
    onClick: (evt, item) => {
      pieChart.update();
      item[0]._model.outerRadius += 10;
    },
  };

  var pieChart = new Chart(CovidData, {
    type: "bar",
    data: dataInPie,
    options: options,
  });
}

// ----------------------------------------------------fucntion call -------------------------
getData(19);
