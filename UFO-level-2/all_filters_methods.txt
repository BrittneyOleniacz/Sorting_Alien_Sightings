var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form")

button.on("click", allthethings); 
form.on("submit", allthethings);
 

//================================//<---------First Method--------->//================================//
function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 

    const datetimefilter = d3.select("#datetime").property("value");
    if (datetimefilter != "")
        results = tableData.filter((info) => info['datetime'] == datetimefilter);

    const cityfilter = d3.select("#city").property("value");
    if (cityfilter != "")
        results = results.filter((info) => info['city'] == cityfilter);
    
    renderTable(results);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
  
		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 

//================================//<---------Second Method--------->//================================//
function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 

    const datetimefilter = d3.select("#datetime").property("value");
    if (datetimefilter != "")
        results = tableData.filter((info) => info['datetime'] == datetimefilter);
	
	results = allfilters("city",results);
	
	
	renderTable(results);
}

function allfilters(theFilter, theData) {
    const toFilter = d3.select(`#${theFilter}`).property("value");
        if (toFilter != "") return theData;
        return results.filter((info) => info[theFilter] == tofilter);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
 		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 

//================================//<---------Second & 1/2 Method--------->//================================//
function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 

	results = allfilters("datetime", results);
	results = allfilters("city",results);
		
	renderTable(results);
}

function allfilters(theFilter, theData) {
    const toFilter = d3.select(`#${theFilter}`).property("value");
        if (toFilter != "") return theData;
        return results.filter((info) => info[theFilter] == tofilter);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
 		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 
 

//================================//<---------Third Method--------->//================================//
function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 
	
	const morefilters = ["datetime","city"];
	for (f in morefilters) {
		results = allfilters(morefilters[f],results);
	}

	renderTable(results);
}

function allfilters(theFilter, theData) {
    const toFilter = d3.select(`#${theFilter}`).property("value");
        if (toFilter != "") return theData;
        return results.filter((info) => info[theFilter] == tofilter);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
 		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 

//================================//<---------Third & 1/2 Method--------->//================================//

function allthethings() {
    d3.event.preventDefault();

    var results = tableData; 
	
	const morefilters = d3.selectAll('input').nodes().map(a => a.id);
	for (f in morefilters) {
		results = allfilters(morefilters[f],results);
	}

	renderTable(results);
}

function allfilters(theFilter, theData) {
    const tofilter = d3.select(`#${theFilter}`).property("value");
        if (tofilter = "") return theData;
        return results.filter((info) => info[theFilter] == tofilter);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
 		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 

