var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", allthethings); 
form.on("submit", allthethings);
 
function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 
    
    const allfilters = d3.selectAll('input').nodes().map(a => a.id);
    
    for (f in allfilters) {
		results = allthefilters(allfilters[f],results);
	}
	renderTable(results);
}

function allthefilters(theFilter, theData) {
    const tofilter = d3.select(`#${theFilter}`).property("value");
        if (tofilter == "") return theData;
        return theData.filter((info) => info[theFilter] == tofilter);
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