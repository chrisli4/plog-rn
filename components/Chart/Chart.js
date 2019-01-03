import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryLegend,
  VictoryLabel,
} from 'victory-native';
import theme from '../../config/theme';

const Chart = ({ dataHeight, dataArea, dataTemp, show }) => (
  <VictoryChart height={400} scale={{ x: 'time' }}>
    <VictoryLegend
      centerTitle
      x={50}
      y={50}
      data={[
        { name: 'Height', symbol: { fill: theme.colors.blue } },
        { name: 'Leaf Size', symbol: { fill: theme.colors.primary } },
        { name: 'Temp', symbol: { fill: theme.colors.orange } },
      ]}
      labelComponent={<VictoryLabel />}
    />
    <VictoryAxis fixLabelOverlap />
    <VictoryAxis dependentAxis />
    <VictoryGroup
      style={{
        data: { strokeWidth: 3, fillOpacity: 0.4 },
      }}
    >
      {show.height ? (
        <VictoryArea
          style={{
            data: { fill: theme.colors.blue, stroke: theme.colors.blue },
          }}
          data={[
            { y: 2, x: new Date('2018-12-1') },
            { y: 3, x: new Date('2018-12-2') },
            { y: 4, x: new Date('2018-12-3') },
          ]}
        />
      ) : null}
      {show.area ? (
        <VictoryArea
          style={{
            data: { fill: theme.colors.primary, stroke: theme.colors.primary },
          }}
          data={[
            { y: 2, x: new Date('2018-12-1') },
            { y: 3, x: new Date('2018-12-2') },
            { y: 4, x: new Date('2018-12-3') },
          ]}
        />
      ) : null}
      {show.temp ? (
        <VictoryArea
          style={{
            data: { fill: theme.colors.orange, stroke: theme.colors.orange },
          }}
          data={[
            { y: 2, x: new Date('2018-12-1') },
            { y: 3, x: new Date('2018-12-2') },
            { y: 4, x: new Date('2018-12-3') },
          ]}
        />
      ) : null}
    </VictoryGroup>
  </VictoryChart>
);

Chart.propTypes = {
  dataHeight: PropTypes.array.isRequired,
  dataArea: PropTypes.array.isRequired,
  dataTemp: PropTypes.array.isRequired,
  show: PropTypes.object.isRequired,
};

export default Chart;
