'use strict';

import d3 from 'd3';
import { streamData } from '../stub';

export default (mount) => {
    const width = mount.offsetWidth;
    const height = width / 3;
    const margin = { top: 0, bottom: 20, left: 0, right: 0 };

    const data = streamData.map(repo => {
        return repo.commitActivity.map((week, i) => {
            return {
                t: new Date(week.week * 1000),
                y: week.total,
            };
        });
    });

    // silhouette - center the stream, as in ThemeRiver.
    // wiggle - minimize weighted change in slope.
    // expand - normalize layers to fill the range [0,1].
    // zero - use a zero baseline, i.e., the y-axis.
    // number of samples per layer
    const stack = d3.layout.stack()
        .offset('silhouette')
        .order('inside-out');
    // const layers = stack(d3.range(n).map(() => bumpLayer(m)));
    const layers = stack(data);

    const scales = {
        x: d3.time.scale()
            .domain(d3.extent(data[0], d => d.t))
            .range([0, width]),

        y: d3.scale.linear()
            .domain([0, d3.max(layers, (layer)  => {
                return d3.max(layer, d => d.y0 + d.y);
            })])
            .range([height, 0]),

        color: d3.scale.category20(),
    };

    const axis = {
        x: d3.svg.axis()
            .scale(scales.x)
            .orient('bottom'),
    };

    const area = d3.svg.area()
        .interpolate('basis')
        .x(d => scales.x(d.t))
        .y0(d => scales.y(d.y0))
        .y1(d => scales.y(d.y0 + d.y));

    const svg = d3.select(mount).append('svg')
        .attr('class', 'chart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const areas = svg.append('g').attr('class', 'areas');

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`);

    svg.select('.axis.x')
        .transition()
        .call(axis.x);

    areas.selectAll('path')
        .data(layers)
        .enter().append('path')
        .attr('d', area)
        .style('fill', (d, i) => scales.color(streamData[i].full_name));
}
