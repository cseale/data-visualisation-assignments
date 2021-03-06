var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;
d3.select(window).on("resize", resize);

var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = viewWidth - margin.left - margin.right;
var height = viewHeight - margin.top - margin.bottom;

var svg = d3.select("svg")
    .attr("width", viewWidth)
    .attr("height", viewHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the axis
// Define the axes
var xAxis = d3.axisBottom().scale(x).ticks(10);

var yAxis = d3.axisLeft().scale(y).ticks(10);

function drawScatterplot() {
  //You can implement your scatterplot here


  //The svg is already defined, you can just focus on the creation of the scatterplot
  //you should at least draw the data points and the axes.
  console.log("Draw Scatterplot");

  //The data can be found in the boat_data.boats variable
  console.log(boat_data.boats); //IMPORTANT - Remove this, it is here just to show you how to access the data

  x.domain([0, d3.max(boat_data.boats, function(d) { return d.x; })]);
  y.domain([0, d3.max(boat_data.boats, function(d) { return d.y; })]);

  //You can start with a simple scatterplot that shows the x and y attributes in boat_data.boats
  var dots = svg
    .selectAll('.dot')
    .data(boat_data.boats);

  dots.enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', d => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', 4);

  // add the X Axis
// Add the X Axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  // Add the Y Axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  //Additional tasks are given at the end of this file
}

function resize() {
  //This function is called if the window is resized
  //You can update your scatterplot here
  viewWidth = window.innerWidth;
  viewHeight = window.innerHeight;


  drawScatterplot();
}


drawScatterplot();


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
////////////////////    ADDITIONAL TASKS   ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/*
Once that you have implemented your basic scatterplot you can work on new features
  * Color coding of the points based on a third attribute
  * Legend for the third attribute with color scale
  * Interactive selection of the 3 attributes visualized in the scatterplot
  * Resizing of the window updates the scatterplot
*/
