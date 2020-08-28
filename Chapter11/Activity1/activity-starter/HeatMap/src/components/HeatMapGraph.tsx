import React from "react";
import { Group } from "@vx/group";
import { genBins } from "@vx/mock-data";
import { scaleLinear } from "@vx/scale";
import { HeatmapCircle } from "@vx/heatmap";

const HeatMapGraph = props => {
  const hot1 = "#235f85";
  const hot2 = "#9a1414";
  const bg = "white";

  const max = (data, value = d => d) => Math.max(...data.map(value));
  const min = (data, value = d => d) => Math.min(...data.map(value));

  const bins = d => d.bins;
  const count = d => d.count;

  const colorMax = max(props.data, d => max(bins(d), count));
  const bucketSizeMax = max(props.data, d => bins(d).length);

  const xScale = scaleLinear({
    domain: [0, props.data.length]
  });
  const yScale = scaleLinear({
    domain: [0, bucketSizeMax]
  });
  const circleColorScale = scaleLinear({
    range: [hot1, hot2],
    domain: [0, colorMax]
  });
  const opacityScale = scaleLinear({
    range: [0.1, 1],
    domain: [0, colorMax]
  });

  const separation = 20;
  const margin = {
    top: 10,
    left: 20,
    right: 20,
    bottom: 110
  };

  let size = props.width;
  if (size > margin.left + margin.right) {
    size = props.width - margin.left - margin.right - separation;
  }

  const xMax = size;
  const yMax = props.height - margin.bottom - margin.top;

  const binWidth = xMax / props.data.length;
  const binHeight = yMax / bucketSizeMax;
  const radius = min([binWidth, binHeight]) / 2;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <svg width={props.width} height={props.height}>
      <rect
        x={0}
        y={0}
        width={props.width}
        height={props.height}
        rx={14}
        fill={bg}
      />
      <Group top={margin.top} left={margin.left}>
        <HeatmapCircle
          data={props.data}
          xScale={xScale}
          yScale={yScale}
          colorScale={circleColorScale}
          opacityScale={opacityScale}
          radius={radius}
          gap={2}
        >
          {heatmap => {
            return heatmap.map(bins => {
              return bins.map(bin => {
                return (
                  <circle
                    key={`heatmap-circle-${bin.row}-${bin.column}`}
                    className="vx-heatmap-circle"
                    cx={bin.cx}
                    cy={bin.cy}
                    r={bin.r}
                    fill={bin.color}
                    fillOpacity={bin.opacity}
                    onClick={event => {
                      const { row, column } = bin;
                      alert(JSON.stringify({ row, column, ...bin.bin }));
                    }}
                  />
                );
              });
            });
          }}
        </HeatmapCircle>
      </Group>
    </svg>
  );
};

export default HeatMapGraph;
