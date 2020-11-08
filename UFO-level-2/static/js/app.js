var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", allthethings); 
form.on("submit", allthethings);

function allthethings() {
    d3.event.preventDefault();
    var results = tableData;

//<---------First Method--------->//   
    // See Level 1

//<---------Second Method--------->//   
    // const datetimetofilter = d3.select("#datetime").property("value");
    // if (datetimetofilter != "")
    //     results = results.filter((blah)=> blah['datetime'] == datetimetofilter);
    
    // const citytofilter = d3.select("#city").property("value");
    // if (citytofilter != "")
    //     results = results.filter((blah)=> blah['city'] == citytofilter);  

//<---------Third Method--------->//   
    // results = allthefilters("datetime", results);
    // results = allthefilters("city", results);

//<---------Fourth Method--------->//  
    const allfilters = d3.selectAll('input').nodes().map(a => a.id);
    for (f in allfilters) {
        results = allthefilters(allfilters[f], results); 
    }
    renderTable(results); 
}

function allthefilters(dafilter, dadata) {
    const tofilter = d3.select(`#$(dafilter)`).property("value");
    if (tofilter != "") return dadata;
    return dadata.filter(blah) => {blah[dafilter] == tofilter};
}

function renderTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("")
    table.forEach((ugh) => {
        var row = tbody.append("tr")
        for (let key in ugh) {
            var cell = row.append("td");
            cell.text(ugh[key]);
        }        
    });
}
renderTable(data);

