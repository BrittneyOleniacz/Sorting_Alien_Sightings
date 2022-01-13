//================================//<---------First Method--------->//================================// 
// Note: this version is oversimplified and bloated to illustrate basic concept.

// d3 select of the tbody html element
var tbody =  d3.select("tbody")
// from data.js
var tableData = data;
//iterate over data    
tableData.forEach(element => {
    // each td element corresponds to the dictionaries keys in list
    // on each iteration make a new tr element
    let datetime = element["datetime"]    
    let tableRow = tbody.append("tr")
    tableRow.append("td").text(datetime)
    let city = element["city"]
    tableRow.append("td").text(city)
    let state = element["state"]  
    tableRow.append("td").text(state) 
    let country = element["country"]
    tableRow.append("td").text(country)
    let shape = element["shape"]
    tableRow.append("td").text(shape)
    let durationMinutes = element ["durationMinutes"]
    tableRow.append("td").text(durationMinutes)
    let comments = element["comments"]
    tableRow.append("td").text(comments) 
    // append td element to tr element previously created
    });

// create action listener
id="filter-btn"
d3.select("#filter-btn").on("click", dosomething)
function dosomething(){
    tbody.html("")
    let dateInput = d3.select("#datetime").property("value");
    let datafilter = tableData.filter(element => 
        element["datetime"] === dateInput
    )
    datafilter.forEach(element => {
    let datetime = element["datetime"]    
    let tableRow = tbody.append("tr")
    tableRow.append("td").text(datetime)
    let city = element["city"]
    tableRow.append("td").text(city)
    let state = element["state"]  
    tableRow.append("td").text(state) 
    let country = element["country"]
    tableRow.append("td").text(country)
    let shape = element["shape"]
    tableRow.append("td").text(shape)
    let durationMinutes = element["durationMinutes"]
    tableRow.append("td").text(durationMinutes)
    let comments = element["comments"]
    tableRow.append("td").text(comments) 
    // append td element to tr element previously created
    });
}
// ^^^ is painfully repetitive as it takes each cell in seperate columns of every row that has the desired datetime and appends it per cell along each row.  
// to streamline the process, a const can be created to select the desired datetime 


//================================//<---------Second Method--------->//================================//
//from data.js
var tableData = data;

//Create Events
var button = d3.select("#filter-btn");
var form = d3.select("form")

//Assign "task" to event
button.on("click", allthethings); 
form.on("submit", allthethings);

function allthethings() {
    d3.event.preventDefault();
    const thingtofilter = d3.select("#datetime").property("value");
    var results = tableData.filter((info) => info['datetime'] == thingtofilter);
	//display filtered data
    var tbody = d3.select("tbody");
    //But, must clear the data first or the filtered results will just be appended to the buttom. 
    tbody.html("");
    //display only filtered results
    results.forEach((factor) => {
        var row = tbody.append("tr");
        Object.entries(factor).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

//display entire dataset/table when the page loads
var tbody = d3.select("tbody");
//clear the table before rendering results
tbody.html("");
//display filtered results
tableData.forEach((factor) => {
    var row = tbody.append("tr");
    Object.entries(factor).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// ^^^ code is an improvement but still contains duplicated code. We can do better.

//================================//<---------Third Method--------->//================================//
// To avoid duplicate code, create variables for "renderTable"
// Look for differences in the duplicates, i.e results.forEach vs tableData.forEach
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
        Object.entries(factor).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(data); 

//...but, what exactly does that "Object" mean? 
// Essentially, the "Object" acts as a for loop that requires additional parameters/information to operate.
// ^^^ is decent, but the code can be further condensed if the "Object" statement is rephrased as a for loop. 

//================================//<---------Fourth "Final" Method--------->//================================//
function allthethings() {
    d3.event.preventDefault();
    const thingtofilter = d3.select("#datetime").property("value");
    var results = tableData.filter(info) => info['datetime'] == thingtofilter);

    renderTable(results);
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((factor) => {
        var row = tbody.append("tr");
        // "Object" as a for loop
		for (let key in factor) {
			var cell = row.append("td");
            cell.text(factor[key];
		}
    });
}

renderTable(data); 





