var dataset = [ 5, 10,  13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
// var dataset = [ 5, 10, 13, 19, 21];



var body = d3.select("body");

var svg = body.append("svg");

var w = 500;
var h = 150;

var barWidth = w / dataset.length;
var padding = 1;
var threshold = 15;

svg.attr('width', w).attr('height',h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d,i){
        return i * (barWidth);
        // return i * (barWidth + padding);
    })
    .attr("y",function(d) {
        return h - d*4;
    })
    .attr('width',barWidth-padding)
    .attr('height',function(d){
        return d*4;
    })
    .attr("fill", function(d) {
        if(d<threshold){
            return "red";
        }else{
            return "grey"
        }
        // return "rgb(0, " + d*10+ ", 0)";
    });


svg.append("line")
    .attr("x1",0)
    .attr('x2',w )
    .attr('y1',h - threshold*4 )
    .attr('y2',h - threshold*4 )
    .style('stroke', "black");

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d;
    })
    .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - padding) / 2;
    })
    .attr('y',function(d,i){
        return h-(d*4)+14;
    } )
    .attr('fill',"white")
    .attr("font-family","sans-serif")
    .attr('font-size',"14px" )
    .attr("text-anchor", "middle")


