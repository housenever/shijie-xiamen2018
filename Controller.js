//Time select Controller
/*
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
*/


//Region Filter Controller
var selectLaw = document.getElementById('law');
selectLaw.onclick= function(){
  d3.selectAll("path.psychology, path.management, path.finance, path.design, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.law")
  .transition()
  .attr("display","inline");
}

var selectPsy = document.getElementById('psychology');
selectPsy.onclick= function(){
  d3.selectAll("path.law, path.management, path.finance, path.design, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.psychology")
  .transition()
  .attr("display","inline");
}

var selectMana = document.getElementById('management');
selectMana.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.finance, path.design, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.management")
  .transition()
  .attr("display","inline");
}

var selectFinance = document.getElementById('finance');
selectFinance.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.design, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.finance")
  .transition()
  .attr("display","inline");
}

var selectDesign = document.getElementById('design');
selectDesign.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.design")
  .transition()
  .attr("display","inline");
}

var selectArchi = document.getElementById('archi');
selectArchi.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.archi")
  .transition()
  .attr("display","inline");
}

var selectEnvi = document.getElementById('environment');
selectEnvi.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.archi, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.environment")
  .transition()
  .attr("display","inline");
}

var selectAi = document.getElementById('ai');
selectAi.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.archi, path.environment, path.chemistry, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.ai")
  .transition()
  .attr("display","inline");
}

var selectChem = document.getElementById('chemistry');
selectChem.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.archi, path.environment, path.ai, path.aero")
  .transition()
  .attr("display","none");

  d3.selectAll("path.chemistry")
  .transition()
  .attr("display","inline");
}

var selectAero = document.getElementById('aero');
selectAero.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.archi, path.environment, path.chemistry, path.ai")
  .transition()
  .attr("display","none");

  d3.selectAll("path.aero")
  .transition()
  .attr("display","inline");
}

var selectAll = document.getElementById('all');
selectAll.onclick= function(){
  d3.selectAll("path.law, path.psychology, path.management, path.finance, path.design, path.archi, path.environment, path.ai, path.chemistry, path.aero")
  .transition()
  .attr("display","inline");
}
