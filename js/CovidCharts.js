var dates = [];

var worldwide_confirmed = []
var canada_confirmed = []
var usa_confirmed = []
var italy_confirmed = []
var china_confirmed = []

var worldwide_deaths = []
var canada_deaths = []

$.getJSON("https://spreadsheets.google.com/feeds/cells/1tXUQq5w0Nk8xNqVw1qEHDigMTQf0axKIPTxmzN-29YM/1/public/full?alt=json", function (data) {

      var sheetData = data.feed.entry;

      for (var i=9; i < sheetData.length; i++) {
        if (sheetData[i].gs$cell.col == 1) {
          dates.push(sheetData[i].content.$t);
        } else if (sheetData[i].gs$cell.col == 2) {
          worldwide_confirmed.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 3) {
          canada_confirmed.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 4) {
          usa_confirmed.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 5) {
          italy_confirmed.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 6) {
          china_confirmed.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 8) {
          worldwide_deaths.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        } else if (sheetData[i].gs$cell.col == 9) {
          canada_deaths.push(parseInt(sheetData[i].content.$t.replace(/,/g, "")));
        }
      }
      dates.reverse();
      worldwide_confirmed.reverse();
      canada_confirmed.reverse();
      usa_confirmed.reverse();
      italy_confirmed.reverse();
      china_confirmed.reverse();
      worldwide_deaths.reverse();
      canada_deaths.reverse();
    });

//rgba(255, 99, 132, 1)

Chart.defaults.global.defaultFontColor = 'rgba(255, 255, 255, 0.8)';
Chart.defaults.global.defaultFontFamily = 'Arial Rounded MT Bold';
Chart.defaults.scale.gridLines.display = true;
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.05)';

var ctx = document.getElementById("WorldCases_WorldDeaths_Chart");
var worldCases_worldDeaths_chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
        data: worldwide_deaths,
        label: "Worldwide Confirmed Deaths",
        borderColor: 'rgba(255, 50, 50, 1)',
        backgroundColor: 'rgba(255, 50, 50, 0.3)',
      },
      {
        data: worldwide_confirmed,
        label: "Worldwide Confirmed Cases",
        borderColor: 'rgba(101, 122, 253, 1)',
        backgroundColor: 'rgba(101, 122, 253, 0.3)'
      }
    ]
  }
});

var ctx = document.getElementById("Canada_Usa_Italy_China_Confirmed_Chart");
var canada_usa_italy_china_confirmed_chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [
      {
        data: canada_confirmed,
        label: "Canada Confirmed Cases",
        borderColor: 'rgba(229, 53, 73, 1)',
        backgroundColor: 'rgba(229, 53, 73, 0.1)',
      },
      {
        data: china_confirmed,
        label: "China Confirmed Cases",
        borderColor: 'rgba(224, 79, 191, 1)',
        backgroundColor: 'rgba(224, 79, 191, 0.1)',
      },
      {
        data: italy_confirmed,
        label: "Italy Confirmed Cases",
        borderColor: 'rgba(27, 211, 130, 1)',
        backgroundColor: 'rgba(27, 211, 130, 0.1)',
      },
      {
        data: usa_confirmed,
        label: "USA Confirmed Cases",
        borderColor: 'rgba(27, 149, 211, 1)',
        backgroundColor: 'rgba(27, 149, 211, 0.1)'
      }
    ]
  }
});
setTimeout(function() { worldCases_worldDeaths_chart.update(); },500);
setTimeout(function() { canada_usa_italy_china_confirmed_chart.update(); },500);
