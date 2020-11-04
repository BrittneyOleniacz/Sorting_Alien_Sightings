var tbody =  d3.select("tbody")
var tableData = data;  
tableData.forEach(element => {
    let  datetime =element["datetime"]    
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
    });


id="filter-btn"
    d3.select("#filter-btn").on("click", dosomething)
    function dosomething(){
        tbody.html("")
        let dateInput = d3.select("#datetime").property("value");
        let dataFilter = tableData.filter(element => 
            element["datetime"] === dateInput);
            dataFilter.forEach(element => {
                let datetime =element["datetime"]    
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
                });
    }
id="filter-btn"        
    d3.select("#filter-btn").on("click", dosomething)
    function dosomething(){
        tbody.html("")
        let stateInput = d3.select("#state").property("value");
        let dataFilter = tableData.filter(element => 
            element["state"] === stateInput);
        dataFilter.forEach(element => {
            let datetime =element["datetime"]    
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
            });
        }
        
id="filter-btn"
    d3.select("#filter-btn").on("click", dosomething)             
    function dosomething(){
        tbody.html("")
        let cityInput = d3.select("city").property("value");
        let dataFilter = tableData.filter(element => 
                element["city"] === cityInput);
            dataFilter.forEach(element => {
                let  datetime =element["datetime"]    
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
                });
        }

//====================================================================//
        //Filtering Country
//====================================================================//       
// id="filter-btn"
//     d3.select("#filter-btn").on("click", dosomething)
//     function dosomething(){    
//         tbody.html("")
//         let dataInput = d3.select("#country").property("value");
//         let dataFilter = tableData.filter(element => 
//             element["country"] === dataInput
//         )
//         dataFilter.forEach(element => {
//             let datetime =element["datetime"]    
//             let tableRow = tbody.append("tr")
//             tableRow.append("td").text(datetime)
//             let city = element["city"]
//             tableRow.append("td").text(city)
//             let state = element["state"]  
//             tableRow.append("td").text(state) 
//             let country = element["country"]
//             tableRow.append("td").text(country)
//             let shape = element["shape"]
//             tableRow.append("td").text(shape)
//             let durationMinutes = element ["durationMinutes"]
//             tableRow.append("td").text(durationMinutes)
//             let comments = element["comments"]
//             tableRow.append("td").text(comments) 
//             });
//         }   
