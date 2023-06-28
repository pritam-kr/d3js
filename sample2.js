import * as d3 from 'd3';

const container = d3.select('#container');

const svg = container.append('svg').attr('width', 400).attr('height', 500);

svg
  .append('rect')
  .attr('x', 20)
  .attr('y', 9)
  .attr('fill', 'steelblue')
  .attr('width', 400)
  .attr('height', 100)
  .attr('rx', 10)
  .attr('ry', 10);

function generateGraph() {
  const graphContainer = d3.select('#basic_graph');
  const svg = graphContainer.append('svg');

  const data = [5, 10, 15, 20, 60];

  const graphRect = svg.selectAll('rect').data(data).enter().append('rect');

  graphRect
    .attr('width', 40)
    .attr('height', (d) => d * 10)
    .attr('fill', 'red')
    .attr('x', (d, i) => i * 60)
    .attr('y', (d, i) => 200 - d * 10);
}

generateGraph();
