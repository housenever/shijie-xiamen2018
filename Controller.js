//Time select Controller
var SelectWave = function(container){
  var selectWave1 = document.getElementById('wave1');
  var selectWave2 = document.getElementById('wave2');
  var selectWave3 = document.getElementById('wave3');
  var selectWave4 = document.getElementById('wave4');
  var waveTime = document.getElementById('wave');

  selectWave1.onclick = function(){
    var content = container.find(".vis");
    content.html("");
    vis("wave1.csv");
    waveTime.innerHTML = "1989-1993";
  }

  selectWave2.onclick = function(){
    var content = container.find(".vis");
    content.html("");
    vis("wave2.csv");
    waveTime.innerHTML = "1994-1998";
  }

  selectWave3.onclick = function(){
    var content = container.find(".vis");
    content.html("");
    vis("wave3.csv");
    waveTime.innerHTML = "1999-2004";
  }

  selectWave4.onclick = function(){
    var content = container.find(".vis");
    content.html("");
    vis("wave4.csv");
    waveTime.innerHTML = "2005-2009";
  }

}


//Region Filter Controller
var selectAsia = document.getElementById('asia');
selectAsia.onclick= function(){
  d3.selectAll("path.africa, path.europe, path.north_america, path.south_america, path.oceania")
  .transition()
  .attr("display","none");

  d3.selectAll("path.asia")
  .transition()
  .attr("display","inline");
}

var selectAfrica = document.getElementById('africa');
selectAfrica.onclick= function(){
  d3.selectAll("path.asia, path.europe, path.north_america, path.south_america, path.oceania")
  .transition()
  .attr("display","none");

  d3.selectAll("path.africa")
  .transition()
  .attr("display","inline");
}

var selectEurope = document.getElementById('europe');
selectEurope.onclick= function(){
  d3.selectAll("path.asia, path.africa, path.north_america, path.south_america, path.oceania")
  .transition()
  .attr("display","none");

  d3.selectAll("path.europe")
  .transition()
  .attr("display","inline");
}

var selectNorth = document.getElementById('north_america');
selectNorth.onclick= function(){
  d3.selectAll("path.asia, path.africa, path.europe, path.south_america, path.oceania")
  .transition()
  .attr("display","none");

  d3.selectAll("path.north_america")
  .transition()
  .attr("display","inline");
}

var selectSouth = document.getElementById('south_america');
selectSouth.onclick= function(){
  d3.selectAll("path.asia, path.africa, path.europe, path.north_america, path.oceania")
  .transition()
  .attr("display","none");

  d3.selectAll("path.south_america")
  .transition()
  .attr("display","inline");
}

var selectOcean = document.getElementById('oceania');
selectOcean.onclick= function(){
  d3.selectAll("path.asia, path.africa, path.europe, path.north_america, path.south_america")
  .transition()
  .attr("display","none");

  d3.selectAll("path.oceania")
  .transition()
  .attr("display","inline");
}

var selectAll = document.getElementById('all');
selectAll.onclick= function(){
  d3.selectAll("path.asia, path.africa, path.europe, path.north_america, path.south_america, path.oceania")
  .transition()
  .attr("display","inline");
}
