var myData;
d3.csv("trafficData/Traffic_Data.csv").then(function(data) {
    console.log(data[0]);
    myData = data;
})


// var dataset=[10,30,45,100,3,10,58,25,5,36,7];
var dataset=[];
for (let i = 0; i < 30; i++) {
    var num = Math.round(Math.random() * 30);
    dataset.push(num);   
}
console.log(dataset);


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