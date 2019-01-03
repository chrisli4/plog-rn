import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Surface, Divider } from 'react-native-paper';
import { Screen } from '../../components/Container';
import { Modal } from '../../components/Modal';
import { Chart, ListItem } from '../../components/Chart';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import {
  makeGetVisibleTasks,
  makeGetChartVisible,
  makeGetFilter,
} from './selectors';
import { getHeight, getArea, getTemp } from '../../utils/data';
import { closeModalChart } from '../../actions/modals';

class Charts extends Component {
  state = {
    show: {
      height: false,
      temp: false,
      area: false,
    },
  };

  onToggle = value => {
    this.setState(state => ({
      ...state,
      show: {
        ...state.show,
        [value]: !state.show[value],
      },
    }));
  };

  render() {
    const { tasks, chartVisible, closeModalChart, filter } = this.props;
    const { show } = this.state;
    return (
      <Screen>
        <Chart
          dataHeight={getHeight(tasks)}
          dataTemp={getTemp(tasks)}
          dataArea={getArea(tasks)}
          show={show}
          minDate={new Date(filter.start)}
          maxDate={new Date(filter.end)}
        />
        <Modal visible={chartVisible} onDismiss={closeModalChart}>
          <Surface style={{ borderRadius: 7, marginHorizontal: 16 }}>
            <Title>Select Charts</Title>
            <ListItem
              text="Height"
              value="height"
              selected={show.height}
              onPress={this.onToggle}
            />
            <Divider />
            <ListItem
              text="Leaf Size"
              value="area"
              selected={show.area}
              onPress={this.onToggle}
            />
            <Divider />
            <ListItem
              text="Temperature"
              value="temp"
              selected={show.temp}
              onPress={this.onToggle}
            />
            <Divider />
            <Button onPress={closeModalChart} title="CLOSE" />
          </Surface>
        </Modal>
      </Screen>
    );
  }
}

const makeMapStateToProps = () => {
  const getVisibleTasks = makeGetVisibleTasks();
  const getChartVisible = makeGetChartVisible();
  const getFilter = makeGetFilter();
  const mapStateToProps = state => ({
    tasks: getVisibleTasks(state),
    filter: getFilter(state),
    chartVisible: getChartVisible(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  closeModalChart,
};

Charts.propTypes = {
  tasks: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired,
  chartVisible: PropTypes.bool.isRequired,
  closeModalChart: PropTypes.func.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Charts);
