import React, { Component } from 'react';
import { View, Text, SegmentedControlIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Chart from 'react-native-chart';

import Style from '../style';

const data = [
  [0, 0],
  [0, 1],
  [1, 3],
  [3, 7],
  [4, 9],
];

class WellData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wellData: props.wellData || [],
      chartData: [[0,0]],
      currentView: 'Battery'
    }
  }

  componentWillMount() {
    Actions.refresh({key: 'drawer', open: false});
  }

  componentDidMount() {
    this._updateChartData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      wellData: nextProps.wellData
    });
  }

  render() {
    console.log('RENDERING');
    return (
      <View style={Style.Global.view}>
        <SegmentedControlIOS 
          style={Style.WellData.segmentedButton}
          selectedIndex={0} 
          values={['Battery', 'Temperature', 'Water']} 
          onValueChange={value=>this._segmentedChange(value)} 
        />
        <Chart
          style={{width: 300, height: 300}}
          data={this.state.chartData}
          type="line"
          verticalGridStep={5}
          showDataPoint={true}
          dataPointRadius={0}
          tightBounds={true}
          xAxisTransform={label=>new Date(label).toDateString()}
        />
      </View>
    )
  }

  _segmentedChange(value) {
    this._updateChartData(value);
  }

  _updateChartData(selectedKey) {
    //Go through wellData filter by currentView, and put it in chartData
    /*
    "level": "H",
    "battery": "73.1",
    "temp": "82.4",
    */

    const currentView = selectedKey || this.state.currentView
    const viewToData = {'Battery': 'battery', 'Temperature': 'temp', 'Water': 'level'};
    const chartData = this.state.wellData.map(function(dataPoint){
      if(dataPoint.well_id === '100'){ //WARNING: Change Well ID checker
        //Convert datePoint.created into a UTC time in milliseconds & Convert the viewValue (battery, etc...)
        const x = Date.parse(dataPoint.created);
        const y = parseInt(dataPoint[viewToData[currentView]]);
        return [x, y];
      }
    }.bind(this));

    console.log(chartData);
    this.setState({
      chartData: chartData
    });
  }
}

function mapStateToProps(state) {
  return {
    wellData: 
  [
  {
    "id": "37",
    "level": "H",
    "battery": "73.1",
    "temp": "82.4",
    "well_id": "100",
    "record_date": "2015-12-06 11:10:48",
    "record_by": "3",
    "mac_address": "0013A20040C42A47",
    "stat1": "1",
    "stat2": "1",
    "pg": "1",
    "created": "2015-12-06 14:10:49",
    "modified": "2015-12-06 14:10:49",
    "is_send_push": "0"
  },
  {
    "id": "38",
    "level": "H",
    "battery": "73.1",
    "temp": "82.4",
    "well_id": "100",
    "record_date": "2015-12-06 11:24:52",
    "record_by": "3",
    "mac_address": "0013A20040C42A47",
    "stat1": "1",
    "stat2": "1",
    "pg": "1",
    "created": "2015-12-06 14:24:53",
    "modified": "2015-12-06 14:24:53",
    "is_send_push": "0"
  },
  {
    "id": "39",
    "level": "H",
    "battery": "73.1",
    "temp": "82.4",
    "well_id": "100",
    "record_date": "2015-12-06 11:25:06",
    "record_by": "3",
    "mac_address": "0013A20040C42A47",
    "stat1": "1",
    "stat2": "1",
    "pg": "1",
    "created": "2015-12-06 14:25:07",
    "modified": "2015-12-06 14:25:07",
    "is_send_push": "0"
  },
  {
    "id": "42",
    "level": "H",
    "battery": "73.21",
    "temp": "87.8",
    "well_id": "100",
    "record_date": "2015-12-11 09:26:21",
    "record_by": "3",
    "mac_address": "0013A20040C42A47",
    "stat1": "1",
    "stat2": "1",
    "pg": "1",
    "created": "2015-12-11 12:26:22",
    "modified": "2015-12-11 12:26:22",
    "is_send_push": "0"
  },
  {
    "id": "46",
    "level": "H",
    "battery": "73.1",
    "temp": "84.2",
    "well_id": "100",
    "record_date": "2016-01-22 12:51:06",
    "record_by": "0",
    "mac_address": "0013A20040C42A47",
    "stat1": "1",
    "stat2": "1",
    "pg": "1",
    "created": "2016-01-25 13:29:56",
    "modified": "2016-01-25 13:29:56",
    "is_send_push": "0"
  }]//state.well.data
  }
}

export default connect(mapStateToProps)(WellData);
