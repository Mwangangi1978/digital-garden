(function () {
  var data = window.__graphData;
  if (!data || !data.nodes.length) return;

  var container = document.getElementById("graph-canvas");
  var tooltip = document.getElementById("graph-tooltip");
  var rect = container.getBoundingClientRect();
  var width = rect.width || 960;
  var height = Math.max(window.innerHeight * 0.75, 500);

  container.style.height = height + "px";

  var sectionColors = {
    notes: "#F7CAC9",
    watercolor: "#5BC0EB",
    moments: "#FED766",
    site: "#A8D5BA"
  };

  var darkSectionColors = {
    notes: "#E8918A",
    watercolor: "#3DA8D4",
    moments: "#E5BF4A",
    site: "#7BC09A"
  };

  function getColors() {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
      document.body.classList.contains("dark-mode") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isDark ? darkSectionColors : sectionColors;
  }

  var svg = d3.select("#graph-canvas")
    .append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height]);

  var g = svg.append("g");

  var zoom = d3.zoom()
    .scaleExtent([0.2, 4])
    .on("zoom", function (event) {
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  var simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(function (d) { return d.id; }).distance(120))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(function (d) {
      return d.section === "watercolor" ? 32 : 20;
    }));

  var link = g.append("g")
    .attr("class", "graph-links")
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("class", "graph-link")
    .attr("data-context", function (d) { return d.context; });

  var defs = svg.append("defs");

  data.nodes.forEach(function (d) {
    if (d.image) {
      defs.append("pattern")
        .attr("id", "img-" + d.id.replace(/[^a-zA-Z0-9]/g, "_"))
        .attr("width", 1)
        .attr("height", 1)
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("href", d.image)
        .attr("width", 1)
        .attr("height", 1)
        .attr("preserveAspectRatio", "xMidYMid slice");
    }
  });

  var node = g.append("g")
    .attr("class", "graph-nodes")
    .selectAll("g")
    .data(data.nodes)
    .join("g")
    .attr("class", function (d) { return "graph-node graph-node--" + d.section; })
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  node.each(function (d) {
    var el = d3.select(this);
    var colors = getColors();
    if (d.image) {
      var patternId = "img-" + d.id.replace(/[^a-zA-Z0-9]/g, "_");
      el.append("circle")
        .attr("r", 28)
        .attr("class", "node-circle node-circle--image")
        .attr("fill", "url(#" + patternId + ")")
        .attr("stroke", colors[d.section])
        .attr("stroke-width", 3);
    } else {
      el.append("circle")
        .attr("r", 14)
        .attr("class", "node-circle")
        .attr("fill", colors[d.section])
        .attr("stroke", colors[d.section])
        .attr("stroke-width", 2);
    }
  });

  node.append("text")
    .attr("class", "node-label")
    .attr("dy", function (d) { return d.image ? 40 : 26; })
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.title.length > 22 ? d.title.substring(0, 20) + "..." : d.title;
    });

  node.on("mouseover", function (event, d) {
    link.classed("graph-link--dim", true);
    node.classed("graph-node--dim", true);

    var connected = new Set();
    connected.add(d.id);
    data.links.forEach(function (l) {
      var src = typeof l.source === "object" ? l.source.id : l.source;
      var tgt = typeof l.target === "object" ? l.target.id : l.target;
      if (src === d.id) connected.add(tgt);
      if (tgt === d.id) connected.add(src);
    });

    node.classed("graph-node--dim", function (n) { return !connected.has(n.id); });
    link.classed("graph-link--dim", function (l) {
      var src = typeof l.source === "object" ? l.source.id : l.source;
      var tgt = typeof l.target === "object" ? l.target.id : l.target;
      return !(src === d.id || tgt === d.id);
    });
    link.classed("graph-link--active", function (l) {
      var src = typeof l.source === "object" ? l.source.id : l.source;
      var tgt = typeof l.target === "object" ? l.target.id : l.target;
      return src === d.id || tgt === d.id;
    });

    tooltip.querySelector(".tooltip-title").textContent = d.title;
    tooltip.querySelector(".tooltip-section").textContent = d.section;
    tooltip.querySelector(".tooltip-date").textContent = d.date;
    var img = tooltip.querySelector(".tooltip-image");
    if (d.image) {
      img.src = d.image;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

    var ctx = [];
    data.links.forEach(function (l) {
      var src = typeof l.source === "object" ? l.source.id : l.source;
      var tgt = typeof l.target === "object" ? l.target.id : l.target;
      if ((src === d.id || tgt === d.id) && l.context) ctx.push(l.context);
    });
    tooltip.querySelector(".tooltip-context").textContent = ctx.length ? ctx.join(" · ") : "";
    tooltip.style.display = "block";

    var x = event.pageX + 15;
    var y = event.pageY - 10;
    if (x + 280 > window.innerWidth) x = event.pageX - 290;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
  })
    .on("mousemove", function (event) {
      var x = event.pageX + 15;
      var y = event.pageY - 10;
      if (x + 280 > window.innerWidth) x = event.pageX - 290;
      tooltip.style.left = x + "px";
      tooltip.style.top = y + "px";
    })
    .on("mouseout", function () {
      link.classed("graph-link--dim", false).classed("graph-link--active", false);
      node.classed("graph-node--dim", false);
      tooltip.style.display = "none";
    })
    .on("click", function (event, d) {
      window.location.href = d.permalink;
    });

  simulation.on("tick", function () {
    link
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });
    node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
  });

  document.getElementById("graph-reset").addEventListener("click", function () {
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  window.addEventListener("resize", function () {
    var r = container.getBoundingClientRect();
    width = r.width || 960;
    svg.attr("viewBox", [0, 0, width, height]);
    simulation.force("center", d3.forceCenter(width / 2, height / 2));
    simulation.alpha(0.3).restart();
  });
})();
