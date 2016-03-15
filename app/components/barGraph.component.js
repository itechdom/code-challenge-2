var template = require('./barGraph.html');
var d3 = require('d3');

let barGraphComponent = function(){
    return{
        restrict: 'E',
            replace: true,
            template,
            scope:{
                posts:"="
            },
            link:function(scope,element){

                //create a new svg element with the specified classes and add the chart to it

                var width = 720,
                    barHeight = 20;

                scope.$watch('posts',function(nVal,oVal){
                    renderChart(nVal);
                },true);

                function renderChart(data){

                    d3.select(".chart").remove();
                    element.append('<svg class="chart"></svg>');

                    var x = d3.scale.linear()
                        .range([0, width/10]);

                    var chart = d3.select(".chart")
                        .attr("width", width);

                    x.domain([0, d3.max(data, function(d) { return d.value; })]);

                    chart.attr("height", barHeight * data.length * 30);

                    var bar = chart.selectAll("g")
                        .data(data)
                        .enter().append("g")
                        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

                    bar.append("rect")
                        .attr("width", function(d) { return x(d.value); })
                        .attr("height", barHeight - 1);

                    bar.append("text")
                        .attr("x", function(d) { 
                            //quick fix, we have almost 6 pixels per letter
                            var textLength = (d.name.length+1)*6.8;
                            if(textLength > 150){
                                return x(d.value)+textLength/1.5+30;
                            }
                            return x(d.value) + textLength + 10; 
                        })
                        .attr("y", barHeight / 2)
                        .attr("dy", ".35em")
                        .text(function(d) { return d.value+'-'+d.name; });

                   

                    function type(d) {
                        d.value = +d.value;
                        return d;
                    }


                }

            },
            controller:function(){
            }
    }
}
module.exports = barGraphComponent;
