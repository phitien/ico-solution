import React from 'react'
import Component from './Component'

import {connect} from '../utils'

class LineChart extends Component {
  initialState() {return this.state = {
    ...super.initialState(),
    id: this.props.id || 'linechart',
    data: this.props.data,
    height: this.props.height,
    width: this.props.width,
    margin: this.props.width,
  }}
  componentDidMount() {
    super.componentDidMount()
    linechart(this)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    super.componentDidUpdate(prevProps, prevState, snapshot)
    linechart(this)
  }
  get cmpClassName() {return 'chart linechart'}
  get id() {return this.state.id}
  set id(v) {this.setAttr('id', v)}
  get data() {return [].concat(this.state.data).filter(o => o)}
  set data(v) {this.setAttr('data', v)}
  get width() {return this.state.width}
  set width(v) {this.setAttr('width', v)}
  get height() {return this.state.height}
  set height(v) {this.setAttr('height', v)}
  get margin() {return this.state.margin}
  set margin(v) {this.setAttr('margin', v)}
}
export default LineChart
