// from data.js
// var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body


// // Step 5: Use d3 to update each cell's text with
function tablecreation(data) {
  var tbody = d3.select("tbody");
  tbody.html("")
data.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {

//     // Append a cell to the row for each value
//     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
};

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'


// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");
  var inputField = d3.select("#datetime").property("value");
  console.log(inputField)
  let filtereddata = data
  filtereddata = filtereddata.filter(row=>row.datetime == inputField)
  tablecreation(filtereddata) 
  // We can use d3 to see the object that dispatched the event
  }

tablecreation(data)

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);




