import React from 'react'

export default class WorkTitle extends React.Component {
  render () {
    return (
        <div className="work__title">
            <h1>{this.props.title}</h1>
            <span className="work__meta--date">{this.props.date}</span>
        </div>
    )
  }
};