import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let Button = ({ whatsUp, stateObject, saySomething,add}) => (
  <div >
    <h1>Component 1: {whatsUp}</h1>
        <button onClick={add}>Item Add</button>
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  add: () => { dispatch(addItem())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;