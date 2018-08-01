var vis = function(data){

  var dataTime=data;

  var m=[30,10,10,10];
  var w = 1200;
  var h = 400;

  var x = d3.scale.ordinal().rangePoints([0, w], 1);
  var y = {};
  var dragging = {};

  var formatAsPercentage = d3.format("%");
  var line = d3.svg.line();
  var axis_percent = d3.svg.axis().orient("left").tickFormat(formatAsPercentage).ticks(5);
  var axis_value = d3.svg.axis().orient("left");
  var background;
  var foreground;

  var tooltip = d3.select(".vis")
  .append("div")
  .attr("class","tooltip")
  .style("fill-opacity",0)
  .style("z-index",1)
  .style("position","absolute");

  var svg = d3.select(".vis").append("svg")
  .attr("width", w + m[1] + m[3])
  .attr("height", h + m[0] + m[2])
  .append("g")
  .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

  d3.csv(dataTime, function(error, waves) {

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(waves[0]).filter(function(d) {
      return d != "country" && d!="region" && (y[d] = d3.scale.linear()
      .domain(d3.extent(waves, function(p) { return +p[d]; }))
      .range([h, 0]));
    }));

    // Add grey background lines for context.
    background = svg.append("g")
    .attr("class", "background")
    .selectAll("path")
    .data(waves)
    .enter().append("path")
    .attr("d", path);

    // Add blue foreground lines for focus.
    foreground = svg.append("g")
    .attr("class", "foreground")
    .selectAll("path")
    .data(waves)
    .enter().append("path")
    .attr("class", function(d){
      if (d.region == "asia") {
        return "asia";
      }
      else if (d.region == "south_america") {
        return "south_america";
      }
      else if (d.region == "oceania") {
        return "oceania";
      }
      else if (d.region == "europe") {
        return "europe";
      }
      else if (d.region == "north_america") {
        return "north_america";
      }
      else if (d.region == "africa") {
        return "africa";
      }
    }
  )
  .attr("d", path)
  .on("mouseover",function(d){
    tooltip.html(d.country)
    .style("left",(d3.event.pageX) + "px")
    .style("top",(d3.event.pageY -100) + "px")
    .style("opacity",1.0);
    d3.select(this)
    .attr("class", "highlight")
  })
  .on("mouseout",function(d){
    tooltip.style("opacity",0);
    d3.select(this)
    .attr("class", function(d){
      if (d.region == "asia") {
        return "asia";
      }
      else if (d.region == "south_america") {
        return "south_america";
      }
      else if (d.region == "oceania") {
        return "oceania";
      }
      else if (d.region == "europe") {
        return "europe";
      }
      else if (d.region == "north_america") {
        return "north_america";
      }
      else if (d.region == "africa") {
        return "africa";
      }
    })});



    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
    .data(dimensions)
    .enter().append("g")
    .attr("class", "dimension")
    .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
    .call(d3.behavior.drag()
    .on("dragstart", function(d) {
      dragging[d] = this.__origin__ = x(d);
      background.attr("visibility", "hidden");
    })
    .on("drag", function(d) {
      dragging[d] = Math.min(w, Math.max(0, this.__origin__ += d3.event.dx));
      foreground.attr("d", path);
      dimensions.sort(function(a, b) { return position(a) - position(b); });
      x.domain(dimensions);
      g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
    })
    .on("dragend", function(d) {
      delete this.__origin__;
      delete dragging[d];
      transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
      transition(foreground)
      .attr("d", path);
      background
      .attr("d", path)
      .transition()
      .delay(500)
      .duration(0)
      .attr("visibility", null);
    }));

    // Add an axis and title.
    g.append("g")
    .attr("class", "axis")
    .each(function(d) {
      if (d != "income") {
        d3.select(this).call(axis_percent.scale(y[d]));
      } else {
        d3.select(this).call(axis_value.scale(y[d]));
      }
    })
    .append("text")
    .attr("text-anchor", "middle")
    .attr("class","axistitle")
    .attr("y", -15)
    .text(String);

    // Add and store a brush for each axis.
    g.append("g")
    .attr("class", "brush")
    .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush)); })
    .selectAll("rect")
    .attr("x", -8)
    .attr("width", 16);
  });

  function position(d) {
    var v = dragging[d];
    return v == null ? x(d) : v;
  }

  function transition(g) {
    return g.transition().duration(500);
  }

  // Returns the path for a given data point.
  function path(d) {
    return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
  }

  // When brushing, don’t trigger axis dragging.
  function brushstart() {
    d3.event.sourceEvent.stopPropagation();
  }

  // Handles a brush event, toggling the display of foreground lines.
  function brush() {
    var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); });
    var extents = actives.map(function(p) { return y[p].brush.extent(); });
    foreground.style("display", function(d) {
      return actives.every(function(p, i) {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
      }) ? null : "none";
    });
  }
}
//end vis function

//Initiate Vis
vis("wave4.csv");
