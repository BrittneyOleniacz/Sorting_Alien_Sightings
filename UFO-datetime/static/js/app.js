var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form")

button.on("click", allthethings); 
form.on("submit", allthethings);

function allthethings() {
    d3.event.preventDefault();
    const thingtofilter = d3.select("#datetime").property("value");
    var results = tableData.filter((info) => info['datetime'] == thingtofilter);

    renderTable(results);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key]);
		}
    });
}

renderTable(data); 


