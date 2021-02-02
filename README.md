# Alien Sightings

![titleimage](images/saucer.png)

## Background
WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and the details of sightings have been collected from eye-witness reports. This information must be made available online for the world to see as proof of alien life. 

PROBELM: Our collection is too large to search through manually and the most dedicated followers are complaining that they are having trouble locating specific reports. 

SOLUTION: Write code that will create a table dynamically based using the provided [data](StarterCode/static/js/data.js) of alien sightings. Provide users the option to filter the table data for specific values using JavaScript, HTML, and CSS, and D3.js. 

## Tasks
### Automatic Table and Date Search
* Create a basic HTML web page.
* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO    sighting. 
* Organize table into columns for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
* Use a date form in your HTML document and write corresponding JavaScript code that will take user input and search through the `date/time` column to find rows that match.

![dt](images/datetime.png)

### Multiple Search Categories 
* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

![all](images/allfilters.png)
