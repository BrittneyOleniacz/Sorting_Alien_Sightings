
//Note: Level 1 is over simplified and bloated to show basic concept. For more advanced methods and elequent code, please see Level 2. 

//d3 select of the tbody html element
var tbody =  d3.select("tbody")
// from data.js
var tableData = data;
//iterate over data    
tableData.forEach(element => {
    //each td element corresponds to the dictionaries keys in list
    //on each iteration make a new tr element
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
    //append td element to tr element previously created
    });

//create action listener
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
    let durationMinutes = element ["durationMinutes"]
    tableRow.append("td").text(durationMinutes)
    let comments = element["comments"]
    tableRow.append("td").text(comments) 
    //append td element to tr element previously created
    });
}