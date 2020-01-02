var myData;
d3.csv("trafficData/Traffic_Data.csv").then(function(data) {
    console.log(data[0]);
    myData = data;
    
})

var dataset=[10,25,5,36,7];

// d3.select("body").selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//     .text(function(d) {
//         return d + " is the Original but " + d*10 + " has been multiplied accordingly!";
//     })
//     .style('color', function(d) {
//         if (d>20) {
//             return "red";
//         } else {
//             return "black";
//         }   
//     })

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
        .append('div')
        .attr("class","bar")
        .style('height', function (d) {
            var barHeight = d * 5;

            return barHeight + "px";
        });

console.log(d3.selectAll("p"))